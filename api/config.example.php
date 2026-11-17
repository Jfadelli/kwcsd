<?php
/**
 * Email configuration: TEMPLATE.
 *
 * On the server: copy this file to config.php (same folder) and fill in the
 * real values. config.php is in .gitignore, so passwords and secrets never
 * end up in the repo.
 */

// --- SMTP (cPanel > Email Accounts > Connect Devices / "Configure Mail Client") ---
define('SMTP_HOST', 'mail.kwcsandiego.com');
define('SMTP_PORT', 465);              // 465 = SSL, 587 = TLS (STARTTLS)
define('SMTP_ENCRYPTION', 'ssl');      // 'ssl' for 465, 'tls' for 587 ('none' only for local testing)
define('SMTP_USERNAME', 'noreply@kwcsandiego.com');
define('SMTP_PASSWORD', 'CHANGE_ME');

// --- Sender ---
// Keep FROM_EMAIL the same as SMTP_USERNAME. Many hosts reject or spam-folder
// mail whose From address doesn't match the account that logged in.
define('FROM_EMAIL', SMTP_USERNAME);
define('FROM_NAME', 'KW Commercial San Diego Website');

// --- Recipients ---
// Where messages go when no agent is chosen, and every property valuation request.
define('DEFAULT_RECIPIENT', 'info@kwcsandiego.com');

// When a visitor picks an agent, also copy DEFAULT_RECIPIENT so no lead is missed.
define('CC_TEAM_ON_AGENT_MESSAGES', true);

// Agents a visitor can choose on the contact form: id => email.
// The ids must match `id` in src/data/agents.js. The browser only ever sends
// the id, so nobody can use the form to email an address that isn't listed here.
define('AGENTS', [
    'mark-hughes'    => 'mhughes@kwcommercial.com',
    'libby-brignon'  => 'ebrignon@kwcommercial.com',
    'sue-na'         => 'suena@kwcommercial.com',
    'will-schneider' => 'willschneider@kwcommercial.com',
    'peter-kim'      => 'pkim0812@gmail.com',
]);

// Send the visitor a short "we got your message" email.
define('SEND_USER_CONFIRMATION', true);

// --- Spam protection ---
// reCAPTCHA v3 secret key (Google reCAPTCHA admin console). Leave '' to turn
// reCAPTCHA off; the honeypot and rate limit below still apply.
// If you set this, also build the site with VITE_RECAPTCHA_SITE_KEY.
define('RECAPTCHA_SECRET', '');
define('RECAPTCHA_MIN_SCORE', 0.5);    // 0.0 (bot) to 1.0 (human)

// Max submissions per visitor IP address within the window.
define('RATE_LIMIT_MAX', 5);
define('RATE_LIMIT_WINDOW_SECONDS', 600);

// --- Cross-origin access ---
// The live site calls the API on its own domain, which needs no CORS. These
// extra origins are allowed to call it from elsewhere, e.g. local development.
define('ALLOWED_ORIGINS', [
    'https://kwcsandiego.com',
    'https://www.kwcsandiego.com',
]);

// true shows mailer error details in responses. Only for troubleshooting!
define('DEBUG_MODE', false);
