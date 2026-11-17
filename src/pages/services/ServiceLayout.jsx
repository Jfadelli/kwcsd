import { Link as RouterLink, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { Page, Prose } from '../../components/Page';
import PrevNextArrows from '../../components/PrevNextArrows';
import { services } from '../../data/services';

function ServiceTabs({ currentPath }) {
  return (
    <Box
      component="nav"
      aria-label="Services"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: { xs: 1, sm: 2 },
        mb: 4,
      }}
    >
      {services.map((s) =>
        s.path === currentPath ? (
          <Box
            key={s.path}
            component="span"
            aria-current="page"
            sx={{
              color: 'primary.dark',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            {s.name}
          </Box>
        ) : (
          <Link
            key={s.path}
            component={RouterLink}
            to={s.path}
            underline="none"
            sx={{ color: 'secondary.main', fontWeight: 500, '&:hover': { color: 'primary.main' } }}
          >
            {s.name}
          </Link>
        ),
      )}
    </Box>
  );
}

/** Shared frame for the four service pages: tabs, wrap-around arrows, title. */
export default function ServiceLayout({ children }) {
  const { pathname } = useLocation();
  const i = services.findIndex((s) => s.path === pathname);
  const service = services[i];
  const prev = services[(i - 1 + services.length) % services.length];
  const next = services[(i + 1) % services.length];

  return (
    <Page>
      <PrevNextArrows
        noun="service"
        prev={{ to: prev.path, label: prev.name }}
        next={{ to: next.path, label: next.name }}
      />
      <ServiceTabs currentPath={pathname} />
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <Typography variant="h1" align="center" sx={{ mb: 3 }}>
          {service.name}
        </Typography>
        <Prose>{children}</Prose>
      </Box>
    </Page>
  );
}
