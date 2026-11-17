import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

/** Standard page wrapper: centered column, max 1024px wide like v1. */
export function Page({ title, subtitle, children, maxWidth = 1024 }) {
  return (
    <Container sx={{ maxWidth: `${maxWidth}px !important`, px: { xs: 2, sm: 3 } }}>
      {title && (
        <Typography variant="h1" component="h1" align="center" sx={{ mb: subtitle ? 1 : 3 }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="h3" component="p" align="center" color="text.secondary" sx={{ mb: 3 }}>
          {subtitle}
        </Typography>
      )}
      {children}
    </Container>
  );
}

/** Red horizontal rule used between home page sections. */
export function SectionRule() {
  return <Divider sx={{ my: 5, borderColor: 'primary.main', borderBottomWidth: 2 }} />;
}

/** Body copy block with comfortable paragraph spacing. */
export function Prose({ children, sx }) {
  return (
    <Box
      sx={{
        '& p': { mb: 2.5, fontSize: '1.1rem', lineHeight: 1.75 },
        '& ul': { pl: 3, mb: 2.5 },
        '& li': { mb: 1, fontSize: '1.1rem', lineHeight: 1.6 },
        '& h2, & h3': { mt: 4, mb: 2, textAlign: 'center', color: 'text.secondary' },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
