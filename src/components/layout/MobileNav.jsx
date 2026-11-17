import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { navigation } from '../../data/navigation';

const linkSx = { color: '#fff', py: 1, '& .MuiListItemText-primary': { fontSize: '1.1rem' } };

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        sx={{ color: '#fff', '& svg': { fontSize: '2rem' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={close}
        slotProps={{ paper: { sx: { bgcolor: 'primary.main', width: 'min(320px, 85vw)' } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton aria-label="Close menu" onClick={close} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List component="nav" aria-label="Main" sx={{ pt: 0 }}>
          {navigation.map((entry) =>
            entry.items ? (
              <li key={entry.label}>
                <List disablePadding>
                  <ListSubheader
                    sx={{
                      bgcolor: 'primary.dark',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: '36px',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    }}
                  >
                    {entry.label}
                  </ListSubheader>
                  {entry.items.map((item) => (
                    <ListItemButton
                      key={item.to}
                      component={RouterLink}
                      to={item.to}
                      onClick={close}
                      sx={{ ...linkSx, pl: 3 }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  ))}
                </List>
              </li>
            ) : (
              <ListItemButton
                key={entry.label}
                component={RouterLink}
                to={entry.to}
                onClick={close}
                sx={linkSx}
              >
                <ListItemText primary={entry.label} />
              </ListItemButton>
            ),
          )}
        </List>
      </Drawer>
    </>
  );
}
