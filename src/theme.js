import { createTheme } from '@mui/material/styles';

// Brand colors, carried over from v1.
export const brand = {
  red: 'rgb(180, 15, 15)', // KW red: nav bar, accents
  deepRed: '#821E1E',
  orange: 'rgb(230, 70, 1)', // link hover
  charcoal: '#343434',
  page: '#eeeeee',
};

const theme = createTheme({
  palette: {
    primary: { main: brand.red, dark: brand.deepRed, contrastText: '#fff' },
    secondary: { main: brand.charcoal },
    text: { primary: '#222', secondary: '#555' },
    background: { default: brand.page, paper: '#fff' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
    h1: { fontSize: '2.75rem', fontWeight: 400 },
    h2: { fontSize: '2.25rem', fontWeight: 400 },
    h3: { fontSize: '1.6rem', fontWeight: 400 },
    h4: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1.1rem', lineHeight: 1.7 },
  },
  breakpoints: {
    // `md` is where the desktop nav takes over from the hamburger menu.
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        img: { maxWidth: '100%', display: 'block' },
        a: { color: brand.red },
      },
    },
    MuiTextField: {
      defaultProps: { fullWidth: true, size: 'small' },
    },
  },
});

theme.typography.h1[theme.breakpoints.down('sm')] = { fontSize: '2rem' };
theme.typography.h2[theme.breakpoints.down('sm')] = { fontSize: '1.75rem' };

export default theme;
