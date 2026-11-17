import { getRecaptchaToken } from './recaptcha';

// Same-origin by default, so it works on both www.kwcsandiego.com and
// kwcsandiego.com without any CORS setup.
const ENDPOINT = import.meta.env.VITE_EMAIL_API || '/api/send_email.php';

export class SubmitError extends Error {
  constructor(message, fieldErrors = {}) {
    super(message);
    this.fieldErrors = fieldErrors;
  }
}

/**
 * Send a form to the PHP mailer.
 * @param {'contact'|'property_valuation'} formType
 * @param {object} fields  form values (including the `website` honeypot)
 */
export async function submitForm(formType, fields) {
  const recaptchaToken = await getRecaptchaToken(formType);

  let response;
  try {
    response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...fields, formType, recaptchaToken }),
    });
  } catch {
    throw new SubmitError(
      'We couldn’t reach the server. Please check your connection and try again.',
    );
  }

  let data = {};
  try {
    data = await response.json();
  } catch {
    // Non-JSON reply (e.g. a server error page); handled below.
  }

  if (!response.ok || data.status !== 'success') {
    throw new SubmitError(
      data.message || 'Something went wrong sending your message. Please try again, or call us.',
      data.errors,
    );
  }
  return data;
}
