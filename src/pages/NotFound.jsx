import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Page } from '../components/Page';

export default function NotFound() {
  return (
    <Page title="Page not found">
      <Typography align="center" sx={{ mb: 3 }}>
        We couldn’t find that page. It may have moved.
      </Typography>
      <Typography align="center">
        <Button variant="contained" component={RouterLink} to="/">
          Back to home
        </Button>
      </Typography>
    </Page>
  );
}
