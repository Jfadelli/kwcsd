import { useParams, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { Page, Prose } from '../components/Page';
import PrevNextArrows from '../components/PrevNextArrows';
import NotFound from './NotFound';
import { agents } from '../data/agents';
import defaultListingPhoto from '../assets/images/high-rise.webp';

function BioBlock({ block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  return (
    <>
      <p>{block.heading}</p>
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function TeamBio() {
  const { agentId } = useParams();
  const i = agents.findIndex((a) => a.id === agentId);
  if (i === -1) return <NotFound />;

  const agent = agents[i];
  const prev = agents[i - 1];
  const next = agents[i + 1];

  return (
    <Page>
      <PrevNextArrows
        noun="agent"
        mobileLinks
        prev={prev && { to: `/team-bio/${prev.id}`, label: prev.name }}
        next={next && { to: `/team-bio/${next.id}`, label: next.name }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: 4,
        }}
      >
        <Card sx={{ width: 260, flexShrink: 0 }}>
          <CardMedia
            component="img"
            image={agent.headshot}
            alt={`${agent.name} headshot`}
            sx={{ height: 260, objectFit: 'cover', objectPosition: agent.headshotPosition || 'center top' }}
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h1" sx={{ fontSize: '1.5rem', mb: 0.5 }}>
              {agent.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {agent.specialization || 'Generalist'}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <Link href={`tel:${agent.phone.replace(/\D/g, '')}`} color="inherit" underline="hover">
                {agent.phone}
              </Link>
            </Typography>
            <Link href={`mailto:${agent.email}`} variant="body2" sx={{ wordBreak: 'break-all' }}>
              {agent.email}
            </Link>
          </CardContent>
        </Card>

        <Box
          component="img"
          src={agent.listingImage || defaultListingPhoto}
          alt={agent.listingAlt || `Property represented by ${agent.name}`}
          loading="lazy"
          sx={{
            width: { xs: '100%', md: '55%' },
            maxWidth: 600,
            aspectRatio: '5 / 4',
            objectFit: 'cover',
            borderRadius: 1.5,
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 10px',
          }}
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Prose sx={{ maxWidth: 900, mx: 'auto' }}>
        {agent.bio.map((block, n) => (
          <BioBlock key={n} block={block} />
        ))}
        <p>
          <Link component={RouterLink} to={`/contact/contact-form?agent=${agent.id}`}>
            Contact {agent.name.split(' ')[0]}
          </Link>
        </p>
      </Prose>
    </Page>
  );
}
