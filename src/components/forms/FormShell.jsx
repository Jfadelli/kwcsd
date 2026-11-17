import { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { preloadRecaptcha, recaptchaEnabled } from '../../lib/recaptcha';

/**
 * Hidden "website" field. People never see or fill it; many bots fill every
 * field, and the server quietly drops any submission where it has a value.
 */
export function Honeypot({ field }) {
  const { name, id, value, onChange } = field('website');
  return (
    <Box
      aria-hidden="true"
      // Pixel strings on purpose: in sx, width: 1 / height: 1 mean 100%, which made this
      // box as tall as the form and let the card scroll its top labels out of view.
      sx={{ position: 'absolute', left: '-10000px', top: 0, width: '1px', height: '1px', overflow: 'hidden' }}
    >
      <label htmlFor={id}>Leave this field empty</label>
      <input type="text" id={id} name={name} value={value} onChange={onChange} tabIndex={-1} autoComplete="off" />
    </Box>
  );
}

/**
 * Layout shared by the contact and property forms: photo on the left (desktop
 * only), fields on the right, then status messages and the submit button.
 */
export default function FormShell({
  image,
  imageAlt,
  form,
  submitLabel = 'Submit',
  successTitle,
  successText,
  children,
}) {
  const { status, serverMessage, handleSubmit, reset } = form;

  useEffect(preloadRecaptcha, []);

  return (
    <Paper
      elevation={2}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' },
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={imageAlt}
        sx={{ display: { xs: 'none', md: 'block' }, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <Box sx={{ p: { xs: 2.5, sm: 4 }, position: 'relative' }}>
        {status === 'success' ? (
          <Box role="status" sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              {successTitle}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              {successText}
            </Typography>
            <Button variant="outlined" onClick={reset}>
              Send another
            </Button>
          </Box>
        ) : (
          <form noValidate onSubmit={handleSubmit}>
            <Honeypot field={form.field} />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                columnGap: 2,
                rowGap: 0.5,
              }}
            >
              {children}
            </Box>

            {status === 'error' && (
              <Alert severity="error" sx={{ mt: 1, mb: 2 }}>
                {serverMessage}
              </Alert>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={status === 'sending'}
                startIcon={status === 'sending' ? <CircularProgress size={18} color="inherit" /> : null}
              >
                {status === 'sending' ? 'Sending…' : submitLabel}
              </Button>
              <Typography variant="body2" color="text.secondary">
                * Required
              </Typography>
            </Box>

            {recaptchaEnabled && (
              <Typography variant="caption" color="text.secondary" component="p" sx={{ mt: 2 }}>
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
              </Typography>
            )}
          </form>
        )}
      </Box>
    </Paper>
  );
}
