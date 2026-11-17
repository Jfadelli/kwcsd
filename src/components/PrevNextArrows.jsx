import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const arrowSx = (side) => ({
  display: { xs: 'none', md: 'inline-flex' },
  position: 'fixed',
  top: '50%',
  [side]: 20,
  transform: 'translateY(-50%)',
  width: 48,
  height: 48,
  color: '#fff',
  bgcolor: 'rgba(180, 15, 15, 0.75)',
  boxShadow: 2,
  zIndex: (theme) => theme.zIndex.appBar - 1,
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  '&:hover': {
    bgcolor: 'rgba(180, 15, 15, 0.95)',
    transform: 'translateY(-50%) scale(1.1)',
  },
});

/**
 * Previous/next navigation. On desktop: fixed round arrows on the screen
 * edges. On phones (where fixed arrows would cover the text) an optional row
 * of named links is shown in place instead.
 * `prev` and `next` are { to, label } or null/undefined.
 */
export default function PrevNextArrows({ prev, next, noun, mobileLinks = false }) {
  return (
    <>
      {prev && (
        <IconButton component={RouterLink} to={prev.to} aria-label={`Previous ${noun}: ${prev.label}`} sx={arrowSx('left')}>
          <ArrowBackIosNewIcon />
        </IconButton>
      )}
      {next && (
        <IconButton component={RouterLink} to={next.to} aria-label={`Next ${noun}: ${next.label}`} sx={arrowSx('right')}>
          <ArrowForwardIosIcon />
        </IconButton>
      )}

      {mobileLinks && (
        <Box
          component="nav"
          aria-label={`More ${noun}s`}
          sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', mb: 2 }}
        >
          {prev ? (
            <Button component={RouterLink} to={prev.to} size="small" startIcon={<ArrowBackIosNewIcon fontSize="small" />}>
              {prev.label}
            </Button>
          ) : (
            <span />
          )}
          {next && (
            <Button component={RouterLink} to={next.to} size="small" endIcon={<ArrowForwardIosIcon fontSize="small" />}>
              {next.label}
            </Button>
          )}
        </Box>
      )}
    </>
  );
}
