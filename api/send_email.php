<?php
/**
 * Form email endpoint: POST /api/send_email.php (JSON body)
 *
 * Handles the Contact Us form ("contact") and the Property Valuation form
 * ("property_valuation"), and sends them through cPanel SMTP with PHPMailer.
 *
 * Spam/abuse protection, in order:
 *   1. Honeypot: a hidden "website" field. If filled, pretend success, send nothing.
 *   2. Rate limit per IP (RATE_LIMIT_MAX per RATE_LIMIT_WINDOW_SECONDS).
 *   3. reCAPTCHA v3, if RECAPTCHA_SECRET is set.
 *   4. Recipients come only from config (AGENTS / DEFAULT_RECIPIENT); the
 *      browser can choose an agent id but never an email address.
 *
 * Responses: { status: "success"|"fail", message, errors? }
 * Works on PHP 7.1+ (the server runs 7.2). Keep it that way: no 7.3+ syntax.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body);
    exit;
}

function fail(int $code, string $message, array $errors = []): void
{
    $body = ['status' => 'fail', 'message' => $message];
    if ($errors) {
        $body['errors'] = $errors;
    }
    respond($code, $body);
}

if (!is_file(__DIR__ . '/config.php')) {
    error_log('send_email.php: api/config.php is missing. Copy config.example.php and fill it in.');
    fail(500, 'The form is not set up yet. Please call or email us directly.');
}
require __DIR__ . '/config.php';
require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

// Allowed dropdown values => labels used in the email.
const INQUIRY_TYPES = [
    'buy' => 'Buy', 'sell' => 'Sell', 'lease' => 'Lease',
    'offerToLease' => 'Offer to Lease', 'consult' => 'Consult',
];
const TIMEFRAMES = [
    'lessThan3Months' => 'Less than 3 months', 'lessThan6Months' => 'Less than 6 months',
    'lessThan12Months' => 'Less than 12 months', 'nextYear' => 'Next year',
];
const PROPERTY_TYPES = [
    'multifamily' => 'Multifamily', 'office' => 'Office', 'industrial' => 'Industrial',
    'retail' => 'Retail', 'hospitality' => 'Hospitality', 'recreation' => 'Recreation',
    'specialty' => 'Specialty',
];

// ---------------------------------------------------------------------------
// Request basics
// ---------------------------------------------------------------------------

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($method !== 'POST') {
    header('Allow: POST, OPTIONS');
    fail(405, 'Only POST requests are allowed.');
}

$raw = file_get_contents('php://input', false, null, 0, 65536);
$data = json_decode((string) $raw, true);
if (!is_array($data)) {
    fail(400, 'Invalid request.');
}

$successMessage = 'Thank you! Your message has been sent.';

// 1. Honeypot: bots fill every field. Look successful so they move on.
if (trim((string) ($data['website'] ?? '')) !== '') {
    respond(200, ['status' => 'success', 'message' => $successMessage]);
}

// 2. Rate limit.
if (!rate_limit_allows(client_ip())) {
    fail(429, 'Too many submissions from your connection. Please wait a few minutes and try again, or call us.');
}

// 3. reCAPTCHA v3.
$formType = (string) ($data['formType'] ?? '');
if (RECAPTCHA_SECRET !== '') {
    $check = verify_recaptcha((string) ($data['recaptchaToken'] ?? ''), $formType);
    if ($check !== true) {
        error_log('send_email.php: reCAPTCHA rejected (' . $check . ')');
        fail(403, 'We couldn’t verify your submission. Please refresh the page and try again, or call us.');
    }
}

// ---------------------------------------------------------------------------
// Forms
// ---------------------------------------------------------------------------

try {
    if ($formType === 'contact') {
        handle_contact($data);
    } elseif ($formType === 'property_valuation') {
        handle_property_valuation($data);
    } else {
        fail(400, 'Unknown form.');
    }
} catch (MailException $e) {
    error_log('send_email.php: mail failed: ' . $e->getMessage());
    fail(
        500,
        DEBUG_MODE
            ? 'Mailer error: ' . $e->getMessage()
            : 'Sorry, your message couldn’t be sent right now. Please try again later, or call us.'
    );
}

respond(200, ['status' => 'success', 'message' => $successMessage]);

function handle_contact(array $data): void
{
    $v = new Validator($data);
    $inquiry = $v->choice('inquiryType', INQUIRY_TYPES, 'Please choose what you’re looking to do.');
    $timeframe = $v->choice('timeframe', TIMEFRAMES, 'Please choose a timeframe.');
    $agentId = $v->text('agentId', 60, false);
    $name = $v->text('fullName', 100);
    $email = $v->email('email');
    $phone = $v->phone('phone');
    $message = $v->text('message', 5000);

    if ($agentId !== '' && !array_key_exists($agentId, AGENTS)) {
        $v->errors['agentId'] = 'Please choose an agent from the list.';
    }
    $v->stopIfInvalid();

    $to = $agentId !== '' ? AGENTS[$agentId] : DEFAULT_RECIPIENT;
    $cc = ($agentId !== '' && CC_TEAM_ON_AGENT_MESSAGES && $to !== DEFAULT_RECIPIENT) ? DEFAULT_RECIPIENT : null;

    $html = email_table('New website inquiry', [
        'Name' => $name,
        'Email' => $email,
        'Phone' => $phone,
        'Looking to' => $inquiry,
        'Timeframe' => $timeframe,
        'Preferred agent' => $agentId !== '' ? AGENTS[$agentId] : 'No preference',
        'Message' => $message,
    ]);

    // One SMTP connection for both emails: the host refuses a second
    // connection opened right after the first.
    $mail = new_mailer();
    try {
        send_mail($mail, $to, $cc, "Website inquiry: {$inquiry} ({$name})", $html, $email, $name);
        send_confirmation($mail, $email, 'Thanks for contacting KW Commercial San Diego');
    } finally {
        $mail->smtpClose();
    }
}

function handle_property_valuation(array $data): void
{
    $v = new Validator($data);
    $name = $v->text('name', 100);
    $email = $v->email('email');
    $phone = $v->phone('phone');
    $street = $v->text('street_address', 200);
    $city = $v->text('city', 100);
    $zip = $v->text('zip', 12);
    $country = $v->text('country', 100);
    $type = $v->choice('property_type', PROPERTY_TYPES, 'Please select a property type.');
    $buildingSf = $v->text('building_sf', 50);
    $lotSize = $v->text('lot_size', 50);
    $v->stopIfInvalid();

    $html = email_table('New property valuation request', [
        'Name' => $name,
        'Email' => $email,
        'Phone' => $phone,
        'Address' => "{$street}, {$city} {$zip}, {$country}",
        'Property type' => $type,
        'Building size' => $buildingSf,
        'Lot size' => $lotSize,
    ]);

    $mail = new_mailer();
    try {
        send_mail($mail, DEFAULT_RECIPIENT, null, "Property valuation request: {$city} ({$name})", $html, $email, $name);
        send_confirmation($mail, $email, 'We received your property valuation request');
    } finally {
        $mail->smtpClose();
    }
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

class Validator
{
    /** @var array */
    public $errors = [];
    /** @var array */
    private $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    private function raw(string $key): string
    {
        $value = $this->data[$key] ?? '';
        if (!is_scalar($value)) {
            return '';
        }
        // Drop control characters except newline/tab, then trim.
        return trim((string) preg_replace('/[^\P{C}\n\t]/u', '', (string) $value));
    }

    public function text(string $key, int $max, bool $required = true): string
    {
        $value = $this->raw($key);
        if ($required && $value === '') {
            $this->errors[$key] = 'This field is required.';
        } elseif (mb_strlen($value) > $max) {
            $this->errors[$key] = "Please keep this under {$max} characters.";
        }
        return $value;
    }

    public function email(string $key): string
    {
        $value = $this->text($key, 254);
        if (!isset($this->errors[$key]) && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
            $this->errors[$key] = 'Enter a valid email address.';
        }
        return $value;
    }

    public function phone(string $key): string
    {
        $value = $this->text($key, 30);
        $digits = preg_replace('/\D/', '', $value);
        if (!isset($this->errors[$key]) && (strlen($digits) < 10 || strlen($digits) > 15)) {
            $this->errors[$key] = 'Enter a valid phone number, including area code.';
        }
        return $value;
    }

    /** Returns the human-readable label for an allowed value. */
    public function choice(string $key, array $allowed, string $message): string
    {
        $value = $this->raw($key);
        if (!array_key_exists($value, $allowed)) {
            $this->errors[$key] = $message;
            return '';
        }
        return $allowed[$value];
    }

    public function stopIfInvalid(): void
    {
        if ($this->errors) {
            fail(422, 'Please fix the highlighted fields and try again.', $this->errors);
        }
    }
}

// ---------------------------------------------------------------------------
// Email
// ---------------------------------------------------------------------------

function new_mailer(): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->Port = SMTP_PORT;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    if (SMTP_ENCRYPTION === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif (SMTP_ENCRYPTION === 'tls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->SMTPAutoTLS = false; // 'none': local testing only
    }
    $mail->Timeout = 15;
    // Reuse this connection for every email in the request (see handle_contact).
    $mail->SMTPKeepAlive = true;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->setFrom(FROM_EMAIL, FROM_NAME);
    $mail->isHTML(true);
    return $mail;
}

/** Clears the previous message's recipients and content so the mailer can send the next one. */
function reset_message(PHPMailer $mail): void
{
    $mail->clearAllRecipients();
    $mail->clearReplyTos();
    $mail->clearAttachments();
    $mail->clearCustomHeaders();
    $mail->Subject = '';
    $mail->Body = '';
    $mail->AltBody = '';
}

/** Sends to the team. Reply-To is the visitor, so agents can just hit Reply. */
function send_mail(PHPMailer $mail, string $to, ?string $cc, string $subject, string $html, string $replyTo, string $replyName): void
{
    reset_message($mail);
    $mail->addAddress($to);
    if ($cc) {
        $mail->addCC($cc);
    }
    $mail->addReplyTo($replyTo, $replyName);
    $mail->Subject = $subject;
    $mail->Body = $html;
    $mail->AltBody = html_to_text($html);
    $mail->send();
}

/**
 * Short receipt to the visitor. It deliberately contains no text the visitor
 * typed, so the form can't be used to send someone else a custom message.
 * A failure here is logged but doesn't fail the request: the team already
 * has the message.
 */
function send_confirmation(PHPMailer $mail, string $to, string $subject): void
{
    if (!SEND_USER_CONFIRMATION) {
        return;
    }
    try {
        reset_message($mail);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = '<p>Thank you for reaching out to Pacific Commercial Partners at KW Commercial San Diego.</p>'
            . '<p>We’ve received your message, and a member of our team will get back to you shortly.</p>'
            . '<p>Best regards,<br>Pacific Commercial Partners<br>KW Commercial San Diego</p>';
        $mail->AltBody = html_to_text($mail->Body);
        $mail->send();
    } catch (MailException $e) {
        error_log('send_email.php: confirmation email failed: ' . $e->getMessage());
    }
}

function email_table(string $title, array $rows): string
{
    $h = function (string $s): string {
        return nl2br(htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
    };
    $out = '<h2 style="font-family:Arial,sans-serif;color:#b40f0f">' . $h($title) . '</h2>'
        . '<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">';
    foreach ($rows as $label => $value) {
        $out .= '<tr><td style="vertical-align:top;font-weight:bold;white-space:nowrap">' . $h($label)
            . '</td><td>' . $h((string) $value) . '</td></tr>';
    }
    return $out . '</table><p style="font-family:Arial,sans-serif;color:#777;font-size:12px">'
        . 'Sent from the kwcsandiego.com website. Reply to this email to respond directly.</p>';
}

function html_to_text(string $html): string
{
    $text = preg_replace(['/<br\s*\/?>/i', '/<\/(p|tr|h2)>/i', '/<\/td><td>/i'], ["\n", "\n", ': '], $html);
    return html_entity_decode(trim(strip_tags((string) $text)), ENT_QUOTES, 'UTF-8');
}

// ---------------------------------------------------------------------------
// Spam protection helpers
// ---------------------------------------------------------------------------

function client_ip(): string
{
    return (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

/** File-based sliding-window limiter, one small file per (hashed) IP. */
function rate_limit_allows(string $ip): bool
{
    $dir = __DIR__ . '/storage/ratelimit';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true)) {
        error_log('send_email.php: cannot create ' . $dir . '; rate limiting is off');
        return true;
    }

    $file = $dir . '/' . hash('sha256', $ip) . '.json';
    $now = time();
    $fh = @fopen($file, 'c+');
    if (!$fh) {
        return true;
    }
    flock($fh, LOCK_EX);
    $hits = json_decode((string) stream_get_contents($fh), true);
    $hits = array_values(array_filter(is_array($hits) ? $hits : [], function ($t) use ($now) {
        return is_int($t) && $t > $now - RATE_LIMIT_WINDOW_SECONDS;
    }));
    $allowed = count($hits) < RATE_LIMIT_MAX;
    if ($allowed) {
        $hits[] = $now;
    }
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($hits));
    flock($fh, LOCK_UN);
    fclose($fh);

    // Occasionally clear out files from visitors who haven't been back.
    if (mt_rand(1, 50) === 1) {
        foreach (glob($dir . '/*.json') ?: [] as $old) {
            if (filemtime($old) < $now - RATE_LIMIT_WINDOW_SECONDS) {
                @unlink($old);
            }
        }
    }
    return $allowed;
}

/** @return true|string  true when the token passes, otherwise a reason for the log. */
function verify_recaptcha(string $token, string $expectedAction)
{
    if ($token === '') {
        return 'missing token';
    }
    $payload = http_build_query([
        'secret' => RECAPTCHA_SECRET,
        'response' => $token,
        'remoteip' => client_ip(),
    ]);
    $url = 'https://www.google.com/recaptcha/api/siteverify';

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
        ]);
        $body = curl_exec($ch);
        curl_close($ch);
    } else {
        $body = @file_get_contents($url, false, stream_context_create(['http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => $payload,
            'timeout' => 10,
        ]]));
    }

    $result = json_decode((string) $body, true);
    if (!is_array($result)) {
        // Google unreachable: let the message through rather than lose a lead.
        // The honeypot and rate limit still apply.
        error_log('send_email.php: reCAPTCHA check skipped, no response from Google');
        return true;
    }
    if (empty($result['success'])) {
        return 'failed: ' . implode(',', $result['error-codes'] ?? []);
    }
    if (($result['action'] ?? '') !== $expectedAction) {
        return 'action mismatch';
    }
    if (($result['score'] ?? 0) < RECAPTCHA_MIN_SCORE) {
        return 'low score ' . ($result['score'] ?? 0);
    }
    return true;
}
