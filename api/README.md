# Email API Backend Setup Guide

This directory contains the PHP backend for handling email submissions from your React contact and property valuation forms.

## Files in this directory:

- `config.php` - SMTP and email configuration (YOU NEED TO EDIT THIS!)
- `send_email.php` - Main API endpoint that handles form submissions
- `README.md` - This file

## Setup Instructions

### Step 1: Download PHPMailer

You need to download PHPMailer and place it in this directory.

**Option A: Download from GitHub (Recommended)**

1. Go to: https://github.com/PHPMailer/PHPMailer/releases
2. Download the latest release (e.g., `PHPMailer-6.x.x.zip`)
3. Extract the zip file
4. Copy the `src` folder from the extracted files
5. Rename it to `PHPMailer`
6. Place it in this `api` directory

Your directory structure should look like:
```
api/
├── config.php
├── send_email.php
├── README.md
└── PHPMailer/
    ├── PHPMailer.php
    ├── SMTP.php
    ├── Exception.php
    └── ... (other files)
```

**Option B: Download via Composer (if you have it installed)**

```bash
cd api
composer require phpmailer/phpmailer
```

Then update the require paths in `send_email.php` to:
```php
require_once 'vendor/autoload.php';
```

### Step 2: Configure Your Email Settings

1. Open `config.php`
2. Fill in your actual cPanel email credentials

**To find your SMTP settings in cPanel:**

1. Log into your cPanel at `https://kwcsandiego.com/cpanel`
2. Scroll to "Email" section
3. Click "Email Accounts"
4. Find or create an email account (e.g., `noreply@kwcsandiego.com`)
5. Click "Configure Email Client" next to the email account
6. Use the "Manual Settings" shown there

**Typical cPanel SMTP settings:**
- **SMTP Host:** `mail.kwcsandiego.com` (or check your cPanel)
- **SMTP Port:** `587` (TLS) or `465` (SSL)
- **SMTP Encryption:** `tls` or `ssl`
- **Username:** Your full email address (e.g., `noreply@kwcsandiego.com`)
- **Password:** Your email password

**Example config.php (with real values):**
```php
define('SMTP_HOST', 'mail.kwcsandiego.com');
define('SMTP_PORT', 587);
define('SMTP_ENCRYPTION', 'tls');
define('SMTP_USERNAME', 'noreply@kwcsandiego.com');
define('SMTP_PASSWORD', 'YourActualPassword123');

define('FROM_EMAIL', 'noreply@kwcsandiego.com');
define('FROM_NAME', 'KW Commercial San Diego');
define('DEFAULT_RECIPIENT', 'info@kwcsandiego.com');
```

### Step 3: Upload to cPanel

1. **Connect to cPanel via File Manager or FTP**
   - Log into cPanel
   - Open "File Manager"
   - Navigate to `public_html` (or wherever your site is hosted)

2. **Create the api directory**
   - Create a folder called `api` in your `public_html` directory

3. **Upload all files**
   - Upload `config.php`
   - Upload `send_email.php`
   - Upload the entire `PHPMailer` folder

Your cPanel directory should look like:
```
public_html/
├── api/
│   ├── config.php
│   ├── send_email.php
│   └── PHPMailer/
│       ├── PHPMailer.php
│       ├── SMTP.php
│       └── Exception.php
├── index.html (your React build files)
├── static/
└── ... (other React build files)
```

### Step 4: Set File Permissions

In cPanel File Manager:
1. Right-click on `send_email.php`
2. Select "Change Permissions"
3. Set to `644` (or check: Owner Read+Write, Group Read, World Read)

### Step 5: Test the API

**Test with cURL or Postman:**

```bash
curl -X POST https://kwcsandiego.com/api/send_email.php \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact",
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "555-1234",
    "message": "This is a test message",
    "type": "consult",
    "timeframe": "lessThan3Months",
    "agent": "info@kwcsandiego.com"
  }'
```

**Expected response:**
```json
{
  "status": "success",
  "message": "Contact form submitted successfully",
  "data": {
    "message": "Contact form submitted successfully",
    "sent_to": "info@kwcsandiego.com"
  }
}
```

### Step 6: Test from Your React App

Your React app is already configured to use this endpoint! Just:

1. Build your React app: `npm run build`
2. Upload the `build` folder contents to cPanel
3. Try submitting the contact form on your live site

## Troubleshooting

### Emails not sending?

1. **Check PHP error logs in cPanel**
   - cPanel > Errors
   - Look for any PHPMailer errors

2. **Enable debug mode temporarily**
   - In `config.php`, set: `define('DEBUG_MODE', true);`
   - Try sending an email again
   - Check the error response
   - **IMPORTANT:** Set back to `false` when done!

3. **Verify SMTP credentials**
   - Try logging into your email account with the same credentials
   - Make sure the password is correct

4. **Check cPanel email account isn't suspended**
   - cPanel > Email Accounts
   - Make sure the email account is active

5. **Test SMTP connection**
   - cPanel might have outgoing email restrictions
   - Contact your hosting provider if port 587 or 465 is blocked

### CORS errors?

If your React app shows CORS errors:

1. Check `config.php` - make sure `ALLOWED_ORIGIN` matches your domain
2. Try setting it to `*` temporarily for testing (not recommended for production):
   ```php
   define('ALLOWED_ORIGIN', '*');
   ```

### 500 Internal Server Error?

1. Check file permissions (should be 644 for PHP files)
2. Make sure PHPMailer files are uploaded correctly
3. Check PHP error logs in cPanel

## Security Notes

1. **Never commit config.php with real passwords to Git!**
   - Add `api/config.php` to your `.gitignore`

2. **Use a dedicated email account**
   - Create something like `noreply@kwcsandiego.com`
   - Don't use your personal email credentials

3. **Keep DEBUG_MODE off in production**
   - Only enable for troubleshooting

4. **Consider rate limiting**
   - If you get spam, add rate limiting to `send_email.php`

## Need Help?

Common issues:
- Emails going to spam? Make sure your domain has SPF/DKIM records set up in cPanel
- SMTP authentication failing? Double-check username and password
- Connection timeout? Your hosting might block SMTP ports - contact support

## What This Does

When a user submits a form on your React app:

1. React sends form data to `https://kwcsandiego.com/api/send_email.php`
2. PHP validates the data
3. PHPMailer sends an email to the agent/team
4. PHPMailer sends a confirmation email to the user (if enabled)
5. PHP returns success/failure response to React
6. React shows a success message or error to the user

You're all set! Just upload and configure!
