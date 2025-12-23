/**
 * Email Service Abstraction Layer
 *
 * This service provides a clean interface for sending emails.
 * It can be easily swapped to use different providers:
 * - SendGrid
 * - Resend
 * - AWS SES
 * - Custom backend
 *
 * Current implementation: Ready for provider integration
 */

// Configuration - can be moved to environment variables
const EMAIL_CONFIG = {
  // Provider type: 'sendgrid' | 'resend' | 'ses' | 'custom'
  provider: 'custom',
  // API endpoint (for custom provider)
  apiEndpoint: process.env.REACT_APP_EMAIL_API || 'https://kwcsandiego.com/api/send_email.php',
  // Default recipient
  defaultRecipient: 'info@kwcsandiego.com',
};

/**
 * Send a contact form submission
 * @param {Object} data - Contact form data
 * @param {string} data.type - Type of inquiry (buy/sell/lease/etc)
 * @param {string} data.timeframe - Timeframe for transaction
 * @param {string} data.agent - Selected agent email
 * @param {string} data.fullName - Contact full name
 * @param {string} data.email - Contact email
 * @param {string} data.phone - Contact phone
 * @param {string} data.message - Message content
 */
export async function sendContactForm(data) {
  try {
    const payload = {
      type: 'contact',
      subject: `New Contact Form - ${data.type}`,
      to: data.agent || EMAIL_CONFIG.defaultRecipient,
      ...data,
    };

    const response = await sendEmail(payload);
    return {
      success: true,
      message: 'Message sent successfully',
      data: response,
    };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      error: error.message,
    };
  }
}

/**
 * Send a property valuation request
 * @param {Object} data - Property information
 * @param {string} data.name - Property owner name
 * @param {string} data.email - Property owner email
 * @param {string} data.phone - Property owner phone
 * @param {string} data.street_address - Property address
 * @param {string} data.city - Property city
 * @param {string} data.zip - Property zip code
 * @param {string} data.country - Property country
 * @param {string} data.property_type - Type of property
 * @param {string} data.building_sf - Building square footage
 * @param {string} data.lot_size - Lot size
 */
export async function sendPropertyValuation(data) {
  try {
    const payload = {
      type: 'property_valuation',
      subject: `New Property Valuation Request - ${data.city}`,
      to: EMAIL_CONFIG.defaultRecipient,
      ...data,
    };

    const response = await sendEmail(payload);
    return {
      success: true,
      message: 'Property valuation request sent successfully',
      data: response,
    };
  } catch (error) {
    console.error('Error sending property valuation:', error);
    return {
      success: false,
      message: 'Failed to send request. Please try again.',
      error: error.message,
    };
  }
}

/**
 * Core email sending function
 * This is where you'll integrate with your email provider
 * @private
 */
async function sendEmail(payload) {
  // For future implementation with different providers:
  switch (EMAIL_CONFIG.provider) {
    case 'sendgrid':
      return await sendWithSendGrid(payload);

    case 'resend':
      return await sendWithResend(payload);

    case 'ses':
      return await sendWithSES(payload);

    case 'custom':
    default:
      return await sendWithCustomEndpoint(payload);
  }
}

/**
 * Send email via custom PHP endpoint (current implementation)
 * @private
 */
async function sendWithCustomEndpoint(payload) {
  const response = await fetch(EMAIL_CONFIG.apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.status === 'fail') {
    throw new Error(data.message || 'Email sending failed');
  }

  return data;
}

/**
 * SendGrid implementation (placeholder for future use)
 * @private
 *
 * Setup instructions:
 * 1. npm install @sendgrid/mail
 * 2. Set REACT_APP_SENDGRID_API_KEY in .env
 * 3. Update EMAIL_CONFIG.provider to 'sendgrid'
 */
async function sendWithSendGrid(payload) {
  // TODO: Implement SendGrid integration
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
  // const msg = {
  //   to: payload.to,
  //   from: 'noreply@kwcsandiego.com',
  //   subject: payload.subject,
  //   html: formatEmailHTML(payload),
  // };
  // return await sgMail.send(msg);
  throw new Error('SendGrid not implemented yet');
}

/**
 * Resend implementation (placeholder for future use)
 * @private
 *
 * Setup instructions:
 * 1. npm install resend
 * 2. Set REACT_APP_RESEND_API_KEY in .env
 * 3. Update EMAIL_CONFIG.provider to 'resend'
 */
async function sendWithResend(payload) {
  // TODO: Implement Resend integration
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
  // return await resend.emails.send({
  //   from: 'noreply@kwcsandiego.com',
  //   to: payload.to,
  //   subject: payload.subject,
  //   html: formatEmailHTML(payload),
  // });
  throw new Error('Resend not implemented yet');
}

/**
 * AWS SES implementation (placeholder for future use)
 * @private
 */
async function sendWithSES(payload) {
  // TODO: Implement AWS SES integration
  throw new Error('AWS SES not implemented yet');
}

/**
 * Format email data into HTML (for future use with modern providers)
 * @private
 */
function formatEmailHTML(payload) {
  // TODO: Create nice HTML email templates
  return `
    <h2>${payload.subject}</h2>
    <pre>${JSON.stringify(payload, null, 2)}</pre>
  `;
}

export default {
  sendContactForm,
  sendPropertyValuation,
};
