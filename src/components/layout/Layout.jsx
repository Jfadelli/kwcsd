import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { keyframes } from '@mui/material/styles';

import Nav from './Nav';
import Footer from './Footer';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export default function Layout() {
  const { pathname } = useLocation();

  // Start each new page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <Box
        component="main"
        key={pathname}
        sx={{
          flex: 1,
          animation: `${fadeIn} 400ms ease-out`,
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        <Suspense fallback={<LinearProgress aria-label="Loading page" />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}
