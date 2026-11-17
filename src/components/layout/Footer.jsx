import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import logo from '../../assets/images/logo.webp';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 4,
        px: 2,
        borderTop: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
      }}
    >
      <RouterLink to="/" aria-label="Home">
        <Box component="img" src={logo} alt="KW Commercial" sx={{ width: 150, height: 'auto' }} />
      </RouterLink>
      <Typography variant="body2" color="text.secondary">
        An Equal Opportunity Company. Equal Housing Opportunity.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        All rights reserved.
      </Typography>
    </Box>
  );
}
