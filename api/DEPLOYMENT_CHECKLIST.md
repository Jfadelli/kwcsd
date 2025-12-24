# Deployment Checklist for cPanel

Follow these steps in order to get your email system working:

## Before You Start

- [ ] Have your cPanel login credentials ready
- [ ] Know your domain: `kwcsandiego.com`
- [ ] Have FTP/File Manager access to cPanel

## Step 1: Set Up Email Account in cPanel

1. - [ ] Log into cPanel at `https://kwcsandiego.com/cpanel`
2. - [ ] Go to **Email Accounts**
3. - [ ] Create a new email account (or use existing):
   - Suggested: `noreply@kwcsandiego.com`
   - Choose a strong password
   - Write down the password (you'll need it for config.php)
4. - [ ] Click **"Configure Email Client"** next to your email
5. - [ ] Write down these SMTP settings:
   - **Mail Server:** `_____________________`
   - **Port:** `_____________________` (usually 587)
   - **Username:** `_____________________` (full email address)
   - **Password:** `_____________________` (the one you just created)

## Step 2: Download PHPMailer

1. - [ ] Go to: https://github.com/PHPMailer/PHPMailer/releases
2. - [ ] Download the latest release (e.g., `PHPMailer-6.x.x.zip`)
3. - [ ] Extract the zip file
4. - [ ] Find the `src` folder inside
5. - [ ] Rename `src` to `PHPMailer`
6. - [ ] Move it into your `api` directory locally

## Step 3: Configure Your Settings

1. - [ ] In your `api` folder, copy `config.example.php` to `config.php`
2. - [ ] Open `config.php` in a text editor
3. - [ ] Fill in your SMTP settings from Step 1:
   ```php
   define('SMTP_HOST', 'mail.kwcsandiego.com');  // From Step 1
   define('SMTP_PORT', 587);                      // From Step 1
   define('SMTP_USERNAME', 'noreply@kwcsandiego.com');  // From Step 1
   define('SMTP_PASSWORD', 'YourActualPassword');       // From Step 1
   ```
4. - [ ] Set the recipient email:
   ```php
   define('DEFAULT_RECIPIENT', 'info@kwcsandiego.com');
   ```
5. - [ ] Save `config.php`

## Step 4: Upload to cPanel

### Option A: Using cPanel File Manager

1. - [ ] Log into cPanel
2. - [ ] Click **File Manager**
3. - [ ] Navigate to `public_html` (or your site's root directory)
4. - [ ] Create a new folder called `api`
5. - [ ] Enter the `api` folder
6. - [ ] Click **Upload** button
7. - [ ] Upload these files:
   - `send_email.php`
   - `config.php` (the one with your real credentials)
   - The entire `PHPMailer` folder (drag and drop)

### Option B: Using FTP (FileZilla, Cyberduck, etc.)

1. - [ ] Connect to your FTP server:
   - **Host:** ftp.kwcsandiego.com
   - **Username:** (your cPanel username)
   - **Password:** (your cPanel password)
2. - [ ] Navigate to `public_html`
3. - [ ] Create folder `api`
4. - [ ] Upload files as listed above

## Step 5: Verify Upload

Your cPanel file structure should look like this:

```
public_html/
├── api/
│   ├── config.php           ✓ (with your real credentials)
│   ├── send_email.php       ✓
│   └── PHPMailer/           ✓
│       ├── PHPMailer.php    ✓
│       ├── SMTP.php         ✓
│       ├── Exception.php    ✓
│       └── ... (other files)
├── index.html (your React app)
└── static/
    └── ... (React files)
```

- [ ] Verify all files are uploaded
- [ ] Verify `PHPMailer` folder has all the necessary files

## Step 6: Set File Permissions

1. - [ ] In cPanel File Manager, right-click `send_email.php`
2. - [ ] Select **"Change Permissions"**
3. - [ ] Set to **644**
   - Or check: Owner (Read+Write), Group (Read), World (Read)
4. - [ ] Click **Change Permissions**

## Step 7: Test the API

### Quick Test with cURL (from your computer terminal):

```bash
curl -X POST https://kwcsandiego.com/api/send_email.php \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact",
    "fullName": "Test User",
    "email": "YOUR_EMAIL@example.com",
    "phone": "555-1234",
    "message": "This is a test message",
    "type": "consult",
    "timeframe": "lessThan3Months",
    "agent": "info@kwcsandiego.com"
  }'
```

**Replace `YOUR_EMAIL@example.com` with your real email to receive the confirmation!**

- [ ] Run the test command
- [ ] Check if you got a success response
- [ ] Check your email inbox for confirmation email
- [ ] Check info@kwcsandiego.com for the form submission

### Or Test from Browser Console:

1. - [ ] Go to https://kwcsandiego.com
2. - [ ] Open browser console (F12)
3. - [ ] Paste this:
```javascript
fetch('https://kwcsandiego.com/api/send_email.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'contact',
    fullName: 'Test User',
    email: 'YOUR_EMAIL@example.com',
    phone: '555-1234',
    message: 'Test from console',
    type: 'consult',
    timeframe: 'lessThan3Months',
    agent: 'info@kwcsandiego.com'
  })
})
.then(r => r.json())
.then(data => console.log(data))
```
4. - [ ] Check the response in console
5. - [ ] Check your email

## Step 8: Deploy React App

1. - [ ] In your project directory, run: `npm run build`
2. - [ ] Upload the contents of the `build` folder to cPanel's `public_html`
3. - [ ] Test the contact form on your live site!

## Step 9: Final Testing

- [ ] Visit your live site: https://kwcsandiego.com
- [ ] Go to the Contact page
- [ ] Fill out the form and submit
- [ ] Verify you receive:
  1. A success message on the website
  2. A confirmation email to your email
  3. The form submission email to info@kwcsandiego.com

- [ ] Test the Property Valuation form
- [ ] Verify same success flow

## Troubleshooting

If something doesn't work:

### Enable Debug Mode
1. - [ ] Open `api/config.php` on cPanel
2. - [ ] Change: `define('DEBUG_MODE', true);`
3. - [ ] Try submitting the form again
4. - [ ] Check the error message in the response
5. - [ ] **IMPORTANT:** Set back to `false` when done!

### Check PHP Error Logs
1. - [ ] In cPanel, go to **Errors**
2. - [ ] Look for recent errors related to `send_email.php`

### Common Issues:
- **500 Error:** Check file permissions and PHPMailer folder
- **SMTP Auth Failed:** Verify email credentials in config.php
- **Connection Timeout:** Your host might block SMTP ports - contact support
- **Emails going to spam:** Set up SPF/DKIM records in cPanel DNS settings

## Security Reminder

- [ ] **NEVER** commit `config.php` with real passwords to Git!
- [ ] Keep `DEBUG_MODE` set to `false` in production
- [ ] Use a dedicated email account (like noreply@kwcsandiego.com)
- [ ] Consider enabling reCAPTCHA to prevent spam (future enhancement)

---

## You're Done! 🎉

Your email system should now be working. Users can submit contact forms and property valuations, and you'll receive emails for each submission.

If you need help, check the README.md or the troubleshooting section above.
