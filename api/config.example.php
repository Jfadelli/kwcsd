<?php
/**
 * Email Configuration - EXAMPLE FILE
 *
 * This is a template file. To use:
 * 1. Copy this file to config.php
 * 2. Fill in your actual cPanel email credentials
 * 3. Never commit config.php to Git!
 */

// SMTP Configuration
define('SMTP_HOST', 'mail.kwcsandiego.com');  // Usually mail.yourdomain.com
define('SMTP_PORT', 587);                       // 587 for TLS, 465 for SSL
define('SMTP_ENCRYPTION', 'tls');              // 'tls' or 'ssl'
define('SMTP_USERNAME', 'YOUR_EMAIL@kwcsandiego.com');  // Your cPanel email address
define('SMTP_PASSWORD', 'YOUR_EMAIL_PASSWORD');         // Your cPanel email password

// Email Addresses
define('FROM_EMAIL', 'noreply@kwcsandiego.com');        // Sender email
define('FROM_NAME', 'KW Commercial San Diego');         // Sender name
define('DEFAULT_RECIPIENT', 'info@kwcsandiego.com');    // Default recipient for forms

// Enable/Disable user confirmation emails
define('SEND_USER_CONFIRMATION', true);  // Set to false to disable confirmation emails to users

// Development/Production Mode
define('DEBUG_MODE', false);  // Set to true for detailed error messages (disable in production!)

// CORS Configuration (if needed)
define('ALLOWED_ORIGIN', 'https://kwcsandiego.com');  // Your React app domain
