/*
 * Google reCAPTCHA v3 (invisible). Turned on by setting VITE_RECAPTCHA_SITE_KEY
 * in .env.local before building. With no key, forms still work and rely on the
 * honeypot and server-side rate limit instead.
 */
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

let loading = null;

function loadScript() {
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
      script.async = true;
      script.onload = () => window.grecaptcha.ready(resolve);
      script.onerror = () => {
        loading = null; // allow a retry on the next submit
        reject(new Error('reCAPTCHA failed to load'));
      };
      document.head.appendChild(script);
    });
  }
  return loading;
}

export const recaptchaEnabled = Boolean(SITE_KEY);

/** Start loading early (when a form page opens) so submitting isn't delayed. */
export function preloadRecaptcha() {
  if (recaptchaEnabled) loadScript().catch(() => {});
}

/** Returns a token for this action, or null when reCAPTCHA is off or blocked. */
export async function getRecaptchaToken(action) {
  if (!recaptchaEnabled) return null;
  try {
    await loadScript();
    return await window.grecaptcha.execute(SITE_KEY, { action });
  } catch {
    return null; // the server decides whether a missing token is acceptable
  }
}
