import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Page, Prose, SectionRule } from '../components/Page';
import PropertySearchSection from '../components/PropertySearchSection';
import { services } from '../data/services';
import { brand } from '../theme';
import hero from '../assets/images/hero-skyline.webp';

export default function Home() {
  return (
    <Page>
      <Box
        component="img"
        src={hero}
        alt="San Diego skyline"
        width={2048}
        height={349}
        fetchPriority="high"
        sx={{ display: { xs: 'none', md: 'block' }, width: '100%', height: 'auto', mb: 3 }}
      />

      <Typography variant="h1" align="center">
        Pacific Commercial Partners
      </Typography>
      <Typography variant="h3" component="p" align="center" color="text.secondary" sx={{ mb: 4 }}>
        The KW Commercial team that is ready to serve you
      </Typography>

      <Prose>
        <p>
          With over 100 years of combined experience covering all aspects of commercial real estate
          brokerage, development, marketing, finance, and management, our team is ready to serve
          you.
        </p>
        <p>
          Whether you are leasing, purchasing or selling, let us leverage our extensive experience
          and network of personal contacts to achieve your goals by providing the most creative and
          cost effective deal structures available in today’s marketplace.
        </p>
      </Prose>

      <SectionRule />

      <Typography variant="h2" align="center" gutterBottom>
        Our Services
      </Typography>
      <Prose>
        <p style={{ textAlign: 'center' }}>
          If you are interested in any of the services that we provide, specific information can be
          found within the links below.
        </p>
      </Prose>
      <Stack component="ul" sx={{ listStyle: 'none', p: 0, m: 0, alignItems: 'center' }}>
        {services.map((s) => (
          <Box component="li" key={s.path} sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Link
              component={RouterLink}
              to={s.path}
              underline="none"
              sx={{
                display: 'block',
                textAlign: 'center',
                fontSize: '1.4rem',
                fontWeight: 500,
                lineHeight: '3rem',
                color: brand.charcoal,
                borderBottom: `1px dotted ${brand.charcoal}`,
                mb: 0.75,
                '&:hover': { color: brand.orange, borderBottomColor: brand.orange },
              }}
            >
              {s.homeLabel ?? s.name}
            </Link>
          </Box>
        ))}
      </Stack>

      <SectionRule />

      <PropertySearchSection headingLevel="h2" />
    </Page>
  );
}
