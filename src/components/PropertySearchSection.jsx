import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Prose } from './Page';

export const PROPERTY_SEARCH_INTRO =
  'Please identify any listed KW Commercial property for Sale or Lease that you are interested in and we will thoroughly research the market and provide you with a report indicating our opinion of the value of the investment, the competitive Sale or Lease values in the market, and alternate market opportunities we identify that meet your criteria. We will represent you in any Sale or Lease opportunity and the Seller or Building Owner will compensate us through their listing agent at no cost to you. We can also search multiple national commercial listing services for you.';

/** RealNex listing search, shown on the home page and the Property Search page. */
export default function PropertySearchSection({ headingLevel = 'h1' }) {
  return (
    <section>
      <Typography
        variant={headingLevel === 'h1' ? 'h1' : 'h2'}
        component={headingLevel}
        align="center"
        gutterBottom
      >
        Property Search
      </Typography>
      <Prose>
        <p>{PROPERTY_SEARCH_INTRO}</p>
      </Prose>
      <Box
        component="iframe"
        title="KW Commercial property listings (RealNex)"
        src="https://mpdirect.realnex.com/?site=kwcommercial"
        loading="lazy"
        sx={{
          display: 'block',
          width: '100%',
          height: { xs: '80vh', md: '75vh' },
          minHeight: 500,
          border: 0,
          bgcolor: '#fff',
          borderRadius: 1,
          boxShadow: 1,
        }}
      />
    </section>
  );
}
