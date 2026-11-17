# KWC San Diego: Pacific Commercial Partners

Website for the Pacific Commercial Partners team at KW Commercial San Diego
(kwcsandiego.com).

- **Front end:** React 19, Vite, Material UI 7 (all styling via MUI `sx`), React Router 7
- **Forms backend:** one PHP file (`api/send_email.php`) that sends mail through the
  host's cPanel SMTP with PHPMailer
- **Hosting:** shared cPanel hosting (Apache). Nothing deploys automatically; see
  [Deploying](#deploying).

Created by Jason Fadelli and Dang Lu.

## Project layout

```
index.html                 page shell (Vite entry)
public/                    copied as-is into the build (.htaccess, favicon, manifest)
src/
  main.jsx, App.jsx        app setup and routes
  theme.js                 brand colors, fonts, MUI theme
  data/
    agents.js              team roster and bios  ← edit to change team members
    services.js            service pages list
    navigation.js          top menu
  pages/                   one file per page (services in pages/services/)
  components/              layout (nav, footer), shared page pieces, form shell
  lib/                     form validation (schemas.js), submit + reCAPTCHA helpers
  assets/images/           web-optimized .webp images (generated, see below)
  test/                    Vitest tests
api/
  send_email.php           form endpoint
  config.example.php       template for config.php (real credentials, server only)
  PHPMailer/               PHPMailer 6.12 (LGPL), included so deploys are a plain upload
scripts/optimize_images.py turns full-size photos into small .webp files
docs/client-requests.md    log of change requests from the team
```

## Local development

Requires Node 20.19+ (or 22.12+).

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # unit + page tests
npm run build      # production build into dist/
```

To test the forms locally end to end, also run the PHP endpoint (needs PHP 7.4+):

```bash
cp api/config.example.php api/config.php   # then point SMTP at a test mailbox
php -S localhost:8000                      # from the repo root
```

The Vite dev server forwards `/api/*` to `localhost:8000`.

## Common edits

**Change a bio, phone or email:** edit `src/data/agents.js`. If you change an
agent's email, change it in `api/config.php` on the server too (the `AGENTS` list),
because that's where the contact form gets its recipients.

**Add or remove a team member:** add or remove their entry in `src/data/agents.js`
and in `AGENTS` in the server's `api/config.php`. The menu, bio page and contact-form
dropdown update automatically.

**Add or replace a photo:** keep the original, full-size photo outside the repo,
add it to the `SIZES` list in `scripts/optimize_images.py`, and run
`python3 scripts/optimize_images.py <folder-with-originals>` (requires `pip install pillow`).
Import the resulting `.webp` from `src/assets/images/`. Don't commit multi-megabyte photos.

## Forms and email

Both forms post JSON to `/api/send_email.php` on the same domain (so it works on
both `www.` and the bare domain with no CORS setup).

- **Contact Us** goes to the chosen agent (with a copy to `DEFAULT_RECIPIENT`), or to
  `DEFAULT_RECIPIENT` when no agent is picked.
- **Property Valuation** goes to `DEFAULT_RECIPIENT`.
- Reply-To is set to the visitor, so recipients can just hit Reply.
- The visitor gets a short confirmation email (turn off with `SEND_USER_CONFIRMATION`).

Spam and abuse protection:

1. **Recipients are fixed on the server.** The browser sends an agent *id*; the
   email address comes from `AGENTS` in `config.php`. The form can't be used to
   email arbitrary addresses, and the confirmation email contains none of the visitor's text.
2. **Honeypot:** a hidden field bots tend to fill; those submissions are dropped silently.
3. **Rate limit:** 5 submissions per IP per 10 minutes (configurable).
4. **reCAPTCHA v3 (optional, free):** invisible. To turn it on, create a v3 key pair at
   <https://www.google.com/recaptcha/admin> for `kwcsandiego.com` and
   `www.kwcsandiego.com`, then:
   - put the **site key** in `.env.local` as `VITE_RECAPTCHA_SITE_KEY=...` and rebuild;
   - put the **secret key** in the server's `api/config.php` as `RECAPTCHA_SECRET`.

   With no keys, the forms still work using 1 to 3 above.

## Deploying

Nothing is automated. GitHub pushes do **not** change the live site. The live site
only changes when files are uploaded to the host.

1. `npm run build`
2. In cPanel's File Manager (or FTP), back up the current `public_html` first
   (compress it and download the zip).
3. Upload **the contents of `dist/`** into `public_html` (this includes `.htaccess`;
   make sure hidden files are shown/uploaded).
4. Upload the **`api/` folder** into `public_html/api/` (`send_email.php`,
   `.htaccess`, `PHPMailer/`).
5. First time only: in `public_html/api/`, copy `config.example.php` to `config.php`
   and fill in the SMTP mailbox password and recipients. In cPanel, create the
   sending mailbox first (e.g. `noreply@kwcsandiego.com`) under **Email Accounts**;
   its "Connect Devices" page shows the SMTP host and port.
6. Test: submit both forms on the live site and confirm the emails arrive (check spam).
   If something fails, `public_html/api/error_log` will have the reason.

Old builds' leftover files in `public_html/static/` can be deleted after the new
site is confirmed working (the new build uses `assets/`).
