# Complete Email Server Setup Guide for KWCSD

**Read this when you're ready to set up the email system. Everything you need is explained below.**

---

## Table of Contents
1. [What We Built](#what-we-built)
2. [How It Works](#how-it-works)
3. [What is PHPMailer?](#what-is-phpmailer)
4. [Prerequisites](#prerequisites)
5. [Setup Instructions](#setup-instructions)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

---

## What We Built

You now have a complete email backend for your React website that handles:

- **Contact Form Submissions** - Users can contact your agents
- **Property Valuation Requests** - Users can request property valuations
- **Automatic Confirmations** - Users receive confirmation emails
- **Professional HTML Emails** - Nicely formatted emails to agents/team

Your React app is already configured to use this backend - you just need to set it up in cPanel.

---

## How It Works

### The Architecture:

```
User fills out form on React website
         ↓
React sends data to PHP backend
         ↓
PHP receives data at: https://kwcsandiego.com/api/send_email.php
         ↓
PHP validates the data
         ↓
PHPMailer sends email via your cPanel SMTP
         ↓
Two emails are sent:
  1. To agent/team with form data
  2. To user as confirmation
         ↓
PHP responds to React with success/error
         ↓
User sees success message
```

### Key Points:

- **Your React app** (frontend) runs in the browser
- **The PHP backend** (server) runs on your cPanel server
- **Emails are sent** using your cPanel email account via SMTP
- **PHPMailer** is the library that handles the email sending
- **No third-party services** needed (no monthly costs!)

---

## What is PHPMailer?

### PHPMailer Explained:

**PHPMailer is NOT a web service.** It's a free, open-source PHP library (code package) that makes sending emails easier and more reliable.

Think of it like this:
- **PHP's built-in `mail()` function** = Using the postal service without a return address (often ends up in spam)
- **PHPMailer** = Using the postal service with proper authentication and return address (reliable delivery)

### Why PHPMailer instead of PHP's `mail()`?

| Feature | PHP `mail()` | PHPMailer |
|---------|--------------|-----------|
| Easy to use | ✅ | ✅ |
| Reliable delivery | ❌ (often goes to spam) | ✅ |
| HTML emails | Difficult | Easy |
| SMTP authentication | No | Yes |
| Attachments | Difficult | Easy |
| Error handling | Poor | Excellent |
| Free | ✅ | ✅ |

### Where does PHPMailer come from?

- It's open source on GitHub: https://github.com/PHPMailer/PHPMailer
- It's been around since 2001 and is extremely popular
- It's just PHP code files you include in your project
- Completely free, no strings attached

### How does it use your cPanel email?

PHPMailer connects to your cPanel's SMTP server (like `mail.kwcsandiego.com`) using:
- Your email address (e.g., `noreply@kwcsandiego.com`)
- Your email password
- SMTP settings (host, port, encryption)

It's like setting up an email client (Outlook, Thunderbird) but in code.

---

## Prerequisites

Before you start, make sure you have:

- [ ] Access to your cPanel account
- [ ] FTP access or File Manager access in cPanel
- [ ] Your domain: `kwcsandiego.com`
- [ ] Ability to create/access email accounts in cPanel
- [ ] 15-30 minutes of uninterrupted time

---

## Setup Instructions

### STEP 1: Create Email Account in cPanel

**Why:** You need an email account that PHP will use to send emails.

1. Log into cPanel at `https://kwcsandiego.com/cpanel` (or your cPanel URL)

2. Find the **"Email"** section and click **"Email Accounts"**

3. **Option A: Use existing email**
   - If you already have an email like `info@kwcsandiego.com`, you can use it
   - Just need to know its password

4. **Option B: Create new email** (Recommended)
   - Click **"Create"**
   - Email: `noreply@kwcsandiego.com` (or any name you prefer)
   - Password: Generate a strong password (write it down!)
   - Storage: 250 MB is fine
   - Click **"Create"**

5. **Find your SMTP settings:**
   - Next to your email account, click **"Configure Email Client"**
   - Look for **"Manual Settings"** section
   - Write down these values:

   ```
   Username: _________________________________ (full email address)
   Password: _________________________________ (the password you created)

   Incoming Server: __________________________ (e.g., mail.kwcsandiego.com)
   IMAP Port: _____ (usually 993)
   POP3 Port: _____ (usually 995)

   Outgoing Server: __________________________ (same as incoming, e.g., mail.kwcsandiego.com)
   SMTP Port: _____ (usually 587 or 465)

   SMTP Encryption: __________________________ (usually TLS or SSL)
   ```

   **Important:** You need the **Outgoing Server** settings (SMTP) for the PHP config!

---

### STEP 2: Download PHPMailer

**Why:** PHPMailer doesn't come pre-installed, you need to download it.

1. **Go to GitHub releases:**
   - Open this link: https://github.com/PHPMailer/PHPMailer/releases
   - Or search Google for "PHPMailer releases"

2. **Download the latest version:**
   - Look for the latest release (e.g., "6.9.1" or whatever is newest)
   - Click on the **`.zip`** file to download it
   - Example: `PHPMailer-6.9.1.zip`

3. **Extract the files:**
   - Unzip the downloaded file
   - You'll see folders like: `src`, `language`, `extras`, etc.

4. **Rename the `src` folder:**
   - Find the `src` folder
   - Rename it to **`PHPMailer`** (case matters!)

5. **Move it to your project:**
   - On your computer, navigate to: `C:\Users\Jason\projects\KWCSD\api\`
   - Move/copy the `PHPMailer` folder here

   Your local directory should now look like:
   ```
   KWCSD/
   ├── api/
   │   ├── config.php
   │   ├── config.example.php
   │   ├── send_email.php
   │   ├── PHPMailer/          ← NEW!
   │   │   ├── PHPMailer.php
   │   │   ├── SMTP.php
   │   │   ├── Exception.php
   │   │   └── ... (other files)
   │   ├── README.md
   │   └── DEPLOYMENT_CHECKLIST.md
   └── src/ (your React app)
   ```

---

### STEP 3: Configure Your Email Settings

**Why:** The PHP script needs to know your SMTP credentials to send emails.

1. **Navigate to your `api` folder:**
   ```
   C:\Users\Jason\projects\KWCSD\api\
   ```

2. **Open `config.php` in a text editor** (Notepad, VS Code, etc.)

3. **Fill in your SMTP settings** from Step 1:

   ```php
   <?php
   // SMTP Configuration
   define('SMTP_HOST', 'mail.kwcsandiego.com');  // ← Use your Outgoing Server from Step 1
   define('SMTP_PORT', 587);                      // ← Use your SMTP Port (usually 587)
   define('SMTP_ENCRYPTION', 'tls');              // ← 'tls' if port 587, 'ssl' if port 465
   define('SMTP_USERNAME', 'noreply@kwcsandiego.com');  // ← Your full email address
   define('SMTP_PASSWORD', 'YourActualPassword');       // ← Your email password from Step 1

   // Email Addresses
   define('FROM_EMAIL', 'noreply@kwcsandiego.com');     // ← Same as SMTP_USERNAME
   define('FROM_NAME', 'KW Commercial San Diego');      // ← Your company name
   define('DEFAULT_RECIPIENT', 'info@kwcsandiego.com'); // ← Where forms go by default
   ```

4. **Common SMTP Settings by Host Type:**

   Most cPanel hosts use these settings:
   - **Host:** `mail.yourdomain.com` (e.g., `mail.kwcsandiego.com`)
   - **Port:** `587` (TLS) or `465` (SSL)
   - **Encryption:** `tls` (for port 587) or `ssl` (for port 465)

5. **Save the file**

6. **Security Note:**
   - This file now contains your email password
   - It's already in `.gitignore` so it won't be committed to Git
   - Never share this file or commit it to GitHub!

---

### STEP 4: Upload Everything to cPanel

**Why:** Your PHP files need to be on the server for the website to use them.

#### Option A: Using cPanel File Manager (Easier)

1. **Log into cPanel**
   - Go to your cPanel URL
   - Log in with your credentials

2. **Open File Manager**
   - Find "Files" section
   - Click **"File Manager"**
   - A new window/tab will open

3. **Navigate to your website root**
   - In the left sidebar, click **`public_html`**
   - (Or whatever folder contains your website files)

4. **Create the `api` folder**
   - Click **"+ Folder"** button at the top
   - Name it: `api`
   - Click **"Create New Folder"**
   - Double-click the `api` folder to enter it

5. **Upload PHP files**
   - Click **"Upload"** button at the top
   - A new tab/window will open
   - Drag and drop these files:
     - `config.php` (the one with your real password!)
     - `send_email.php`
   - Wait for upload to complete
   - Close the upload tab

6. **Upload PHPMailer folder**
   - Back in File Manager (in the `api` folder)
   - You need to upload the entire `PHPMailer` folder
   - **Option 1:** Zip it first
     - On your computer, right-click the `PHPMailer` folder
     - Choose "Send to > Compressed (zipped) folder"
     - Upload `PHPMailer.zip` via File Manager
     - In cPanel File Manager, right-click `PHPMailer.zip`
     - Choose **"Extract"**
     - Delete the `.zip` file after extraction
   - **Option 2:** Upload files individually
     - Use the Upload function
     - Select all files inside `PHPMailer` folder
     - Upload them (may take a minute)

7. **Verify your structure**
   - You should see in `public_html/api/`:
     ```
     config.php
     send_email.php
     PHPMailer/
       ├── PHPMailer.php
       ├── SMTP.php
       ├── Exception.php
       └── ... (other files)
     ```

#### Option B: Using FTP (FileZilla, Cyberduck, etc.)

1. **Connect to FTP**
   - Host: `ftp.kwcsandiego.com` (or your FTP host)
   - Username: (your cPanel username)
   - Password: (your cPanel password)
   - Port: 21

2. **Navigate to `public_html`**

3. **Create `api` folder**

4. **Upload files:**
   - `config.php`
   - `send_email.php`
   - The entire `PHPMailer` folder

---

### STEP 5: Set File Permissions (Important!)

**Why:** PHP files need the correct permissions to execute.

1. **In cPanel File Manager:**
   - Navigate to `public_html/api/`
   - Right-click on `send_email.php`
   - Choose **"Change Permissions"** or **"Permissions"**

2. **Set permissions to 644:**
   - Check these boxes:
     - Owner: ✅ Read, ✅ Write
     - Group: ✅ Read
     - World: ✅ Read
   - Or enter `644` in the numeric value box
   - Click **"Change Permissions"**

3. **Repeat for `config.php`** (set to 644)

4. **For the PHPMailer folder and files:** (usually fine as default, but if issues occur, set to 644)

---

### STEP 6: Test the API

**Why:** Make sure emails are sending before deploying your React app.

#### Quick Test Using Browser Console:

1. **Go to your website:** `https://kwcsandiego.com`

2. **Open browser console:**
   - Press `F12` on keyboard
   - Or right-click → "Inspect" → "Console" tab

3. **Paste this code and press Enter:**

   ```javascript
   fetch('https://kwcsandiego.com/api/send_email.php', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       type: 'contact',
       fullName: 'Test User',
       email: 'YOUR_EMAIL@gmail.com',  // ← PUT YOUR EMAIL HERE!
       phone: '555-1234',
       message: 'This is a test message from the API',
       type: 'consult',
       timeframe: 'lessThan3Months',
       agent: 'info@kwcsandiego.com'
     })
   })
   .then(r => r.json())
   .then(data => console.log('Response:', data))
   .catch(err => console.error('Error:', err));
   ```

4. **Check the response:**
   - You should see: `Response: {status: "success", message: "Contact form submitted successfully", ...}`
   - If you see an error, skip to Troubleshooting section below

5. **Check your emails:**
   - Check **YOUR_EMAIL@gmail.com** (the one you put in the test) - you should have a confirmation email
   - Check **info@kwcsandiego.com** - you should have the form submission

6. **Success?** You're done! Move to Step 7 to deploy your React app.

---

### STEP 7: Deploy Your React App

**Why:** Get your updated React app live with the working contact forms.

1. **Build your React app:**
   - Open terminal/command prompt
   - Navigate to your project: `cd C:\Users\Jason\projects\KWCSD`
   - Run: `npm run build`
   - Wait for build to complete

2. **Upload to cPanel:**
   - In cPanel File Manager, go to `public_html`
   - Upload all files from your local `build` folder
   - Overwrite existing files if prompted

3. **Test the live forms:**
   - Go to `https://kwcsandiego.com`
   - Navigate to the Contact page
   - Fill out the form and submit
   - You should get a success message
   - Check your email for confirmation
   - Check info@kwcsandiego.com for the submission

4. **Test Property Valuation form:**
   - Do the same test for the property valuation page

---

## Testing

### What to Test:

1. **Contact Form:**
   - Fill out with real data
   - Submit
   - Check for success message on website
   - Check your email for confirmation
   - Check agent's email for submission

2. **Property Valuation Form:**
   - Fill out property details
   - Submit
   - Check for success message
   - Check your email for confirmation
   - Check info@kwcsandiego.com for submission

3. **Agent Selection:**
   - Try selecting different agents
   - Verify email goes to the right agent email

### Expected Behavior:

✅ User sees success message
✅ User receives confirmation email within 1-2 minutes
✅ Agent/team receives form data email within 1-2 minutes
✅ Emails are properly formatted (not plain text)
✅ No errors in browser console

---

## Troubleshooting

### Problem: 500 Internal Server Error

**Possible Causes:**
1. File permissions are wrong
2. PHPMailer files not uploaded correctly
3. Syntax error in config.php

**Solutions:**
1. Check file permissions (should be 644 for PHP files)
2. Verify PHPMailer folder structure:
   ```
   api/PHPMailer/
   ├── PHPMailer.php  ← Must exist
   ├── SMTP.php       ← Must exist
   ├── Exception.php  ← Must exist
   ```
3. Check for syntax errors in `config.php` (missing semicolons, quotes, etc.)
4. Enable debug mode:
   - Edit `config.php`
   - Change: `define('DEBUG_MODE', true);`
   - Try again and check error message
   - **Change back to `false` when done!**

---

### Problem: SMTP Authentication Failed

**Error message:** "SMTP Error: Could not authenticate"

**Possible Causes:**
1. Wrong email password
2. Wrong username (must be full email address)
3. Wrong SMTP host

**Solutions:**
1. Double-check email password in cPanel
2. Try logging into webmail with the same credentials
3. Verify `SMTP_USERNAME` is the FULL email (e.g., `noreply@kwcsandiego.com`, not just `noreply`)
4. Verify `SMTP_HOST` matches cPanel settings (usually `mail.yourdomain.com`)
5. Try switching between port 587 (TLS) and 465 (SSL)

---

### Problem: Connection Timeout

**Error message:** "SMTP Error: Could not connect to SMTP host"

**Possible Causes:**
1. Your hosting provider blocks SMTP ports
2. Wrong port number
3. Firewall blocking connection

**Solutions:**
1. Try port 587 with TLS:
   ```php
   define('SMTP_PORT', 587);
   define('SMTP_ENCRYPTION', 'tls');
   ```
2. Try port 465 with SSL:
   ```php
   define('SMTP_PORT', 465);
   define('SMTP_ENCRYPTION', 'ssl');
   ```
3. Contact your hosting provider and ask: "Are SMTP ports 587 and 465 open for outgoing connections?"

---

### Problem: Emails Go to Spam

**Possible Causes:**
1. Your domain doesn't have SPF records
2. Your domain doesn't have DKIM enabled
3. Using a generic email like gmail in FROM field

**Solutions:**
1. In cPanel, go to **Email Deliverability**
2. Check if SPF and DKIM are valid (should be green checkmarks)
3. If not, click **"Manage"** and follow instructions
4. Use a domain email for FROM (not @gmail.com):
   ```php
   define('FROM_EMAIL', 'noreply@kwcsandiego.com');
   ```

---

### Problem: CORS Error in Browser

**Error message:** "Access to fetch blocked by CORS policy"

**Solutions:**
1. Check `config.php`:
   ```php
   define('ALLOWED_ORIGIN', 'https://kwcsandiego.com');
   ```
2. Make sure it matches your domain exactly (with https://)
3. Try setting to `*` temporarily for testing:
   ```php
   define('ALLOWED_ORIGIN', '*');
   ```
   (Change back to your domain after testing!)

---

### Problem: No Emails Being Sent (No Errors)

**Possible Causes:**
1. Emails are sending but going to spam
2. Email account is suspended/over quota
3. Silent failure in mail server

**Solutions:**
1. Check spam folders
2. In cPanel, go to **Email Accounts**
   - Make sure the email account isn't suspended
   - Check if it's over quota
3. Check cPanel error logs:
   - cPanel → **Errors**
   - Look for recent errors
4. Enable debug mode and try again
5. Try sending a test email from webmail to confirm the account works

---

### Problem: User Confirmation Emails Not Sending

**Possible Causes:**
1. Confirmation emails disabled in config
2. User email is invalid

**Solutions:**
1. Check `config.php`:
   ```php
   define('SEND_USER_CONFIRMATION', true);  // ← Should be true
   ```
2. Make sure the email address in the form is valid

---

### Getting More Help:

1. **Check PHP Error Logs:**
   - cPanel → **Errors** section
   - Look for recent errors with timestamps

2. **Enable Debug Mode:**
   - Edit `api/config.php`
   - Set: `define('DEBUG_MODE', true);`
   - Submit form again
   - Check the error response
   - **IMPORTANT:** Set back to `false` when done!

3. **Test SMTP Connection Manually:**
   - You can use an online SMTP tester
   - Or use an email client (Outlook, Thunderbird) with the same settings

4. **Contact Your Hosting Provider:**
   - Ask about: "SMTP outgoing email settings and any restrictions"
   - Confirm ports 587 or 465 are open

---

## Security Reminders

- **Never commit `config.php` to Git** (it has your password!)
- **Keep `DEBUG_MODE` disabled** in production (set to `false`)
- **Use a strong password** for your email account
- **Consider rate limiting** if you start getting spam submissions
- **Keep PHPMailer updated** (check GitHub for updates periodically)

---

## Summary

You now have a complete, free email backend that:

✅ Sends professional HTML emails
✅ Uses your cPanel SMTP (no third-party services needed)
✅ Sends confirmations to users
✅ Handles both contact forms and property valuations
✅ Is secure and reliable

The React app is already configured - you just needed the backend set up!

**Total cost: $0/month** (just uses your existing cPanel hosting)

---

## Quick Reference

### File Locations:

**Local (your computer):**
```
C:\Users\Jason\projects\KWCSD\api\
├── config.php (with your credentials)
├── send_email.php
└── PHPMailer/
```

**cPanel (server):**
```
public_html/api/
├── config.php
├── send_email.php
└── PHPMailer/
```

### API Endpoint:

```
https://kwcsandiego.com/api/send_email.php
```

### Configuration File:

```
public_html/api/config.php
```

---

**Questions?** Re-read the relevant section above or check the Troubleshooting section.

**Good luck!** 🚀
