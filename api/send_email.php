<?php
/**
 * Email API Endpoint
 *
 * Handles contact form and property valuation submissions
 * Sends emails using PHPMailer via cPanel SMTP
 */

// Include configuration
require_once 'config.php';

// Include PHPMailer (make sure PHPMailer is uploaded to this directory)
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';
require_once 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Set headers for JSON response
header('Content-Type: application/json');

// CORS headers (allows your React app to call this API)
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'fail',
        'message' => 'Only POST requests are allowed'
    ]);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate that we have data
if (!$data) {
    http_response_code(400);
    echo json_encode([
        'status' => 'fail',
        'message' => 'Invalid JSON data'
    ]);
    exit();
}

// Determine email type and process accordingly
$type = $data['type'] ?? '';

try {
    switch ($type) {
        case 'contact':
            $result = handleContactForm($data);
            break;

        case 'property_valuation':
            $result = handlePropertyValuation($data);
            break;

        default:
            throw new Exception('Invalid form type');
    }

    echo json_encode([
        'status' => 'success',
        'message' => $result['message'],
        'data' => $result
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'fail',
        'message' => DEBUG_MODE ? $e->getMessage() : 'Failed to send email. Please try again.',
        'error' => DEBUG_MODE ? $e->getTraceAsString() : null
    ]);
}

/**
 * Handle contact form submission
 */
function handleContactForm($data) {
    $fullName = $data['fullName'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $message = $data['message'] ?? '';
    $type = $data['type'] ?? '';
    $timeframe = $data['timeframe'] ?? '';
    $agent = $data['agent'] ?? DEFAULT_RECIPIENT;

    // Validate required fields
    if (empty($fullName) || empty($email)) {
        throw new Exception('Name and email are required');
    }

    // Prepare email content for agent
    $subject = "New Contact Form Submission - " . ucfirst($type);
    $body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Type:</strong> " . htmlspecialchars($type) . "</p>
        <p><strong>Timeframe:</strong> " . htmlspecialchars($timeframe) . "</p>
        <p><strong>Name:</strong> " . htmlspecialchars($fullName) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        <p><strong>Message:</strong></p>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    // Send email to agent
    sendEmail($agent, $subject, $body);

    // Send confirmation email to user (if enabled)
    if (SEND_USER_CONFIRMATION) {
        $userSubject = "Thank you for contacting KW Commercial San Diego";
        $userBody = "
            <h2>Thank you for reaching out!</h2>
            <p>Hi " . htmlspecialchars($fullName) . ",</p>
            <p>We've received your message and one of our team members will get back to you shortly.</p>
            <p><strong>Your submission details:</strong></p>
            <p><strong>Type:</strong> " . htmlspecialchars($type) . "</p>
            <p><strong>Timeframe:</strong> " . htmlspecialchars($timeframe) . "</p>
            <p><strong>Message:</strong></p>
            <p>" . nl2br(htmlspecialchars($message)) . "</p>
            <br>
            <p>Best regards,<br>KW Commercial San Diego Team</p>
        ";
        sendEmail($email, $userSubject, $userBody);
    }

    return [
        'message' => 'Contact form submitted successfully',
        'sent_to' => $agent
    ];
}

/**
 * Handle property valuation submission
 */
function handlePropertyValuation($data) {
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $street_address = $data['street_address'] ?? '';
    $city = $data['city'] ?? '';
    $zip = $data['zip'] ?? '';
    $country = $data['country'] ?? '';
    $property_type = $data['property_type'] ?? '';
    $building_sf = $data['building_sf'] ?? '';
    $lot_size = $data['lot_size'] ?? '';

    // Validate required fields
    if (empty($name) || empty($email)) {
        throw new Exception('Name and email are required');
    }

    // Prepare email content for team
    $subject = "New Property Valuation Request - " . htmlspecialchars($city);
    $body = "
        <h2>New Property Valuation Request</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>

        <h3>Property Information</h3>
        <p><strong>Address:</strong> " . htmlspecialchars($street_address) . "</p>
        <p><strong>City:</strong> " . htmlspecialchars($city) . "</p>
        <p><strong>Zip:</strong> " . htmlspecialchars($zip) . "</p>
        <p><strong>Country:</strong> " . htmlspecialchars($country) . "</p>
        <p><strong>Property Type:</strong> " . htmlspecialchars($property_type) . "</p>
        <p><strong>Building SF:</strong> " . htmlspecialchars($building_sf) . "</p>
        <p><strong>Lot Size:</strong> " . htmlspecialchars($lot_size) . "</p>
    ";

    // Send email to team
    sendEmail(DEFAULT_RECIPIENT, $subject, $body);

    // Send confirmation email to user (if enabled)
    if (SEND_USER_CONFIRMATION) {
        $userSubject = "Property Valuation Request Received";
        $userBody = "
            <h2>Thank you for your property valuation request!</h2>
            <p>Hi " . htmlspecialchars($name) . ",</p>
            <p>We've received your property valuation request for the property at:</p>
            <p><strong>" . htmlspecialchars($street_address) . ", " . htmlspecialchars($city) . ", " . htmlspecialchars($zip) . "</strong></p>
            <p>Our team will review your submission and get back to you with a comprehensive market analysis shortly.</p>
            <br>
            <p>Best regards,<br>KW Commercial San Diego Team</p>
        ";
        sendEmail($email, $userSubject, $userBody);
    }

    return [
        'message' => 'Property valuation request submitted successfully',
        'sent_to' => DEFAULT_RECIPIENT
    ];
}

/**
 * Send email using PHPMailer
 */
function sendEmail($to, $subject, $body) {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USERNAME;
        $mail->Password   = SMTP_PASSWORD;
        $mail->SMTPSecure = SMTP_ENCRYPTION;
        $mail->Port       = SMTP_PORT;

        // Recipients
        $mail->setFrom(FROM_EMAIL, FROM_NAME);
        $mail->addAddress($to);
        $mail->addReplyTo(FROM_EMAIL, FROM_NAME);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = strip_tags($body);

        $mail->send();
        return true;

    } catch (Exception $e) {
        throw new Exception("Email could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
}
