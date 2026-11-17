import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import MobileNav from './MobileNav';
import { navigation } from '../../data/navigation';
import logo from '../../assets/images/logo.webp';

const navButtonSx = {
  color: '#fff',
  fontSize: '1.05rem',
  whiteSpace: 'nowrap',
  textShadow: '-1px 2px 0 rgba(0,0,0,0.6)',
  px: 1.5,
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)' },
};

function NavDropdown({ entry }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const menuId = `nav-menu-${entry.label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <>
      <Button
        sx={navButtonSx}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {entry.label}
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        disableScrollLock
      >
        {entry.items.map((item) => (
          <MenuItem
            key={item.to}
            component={RouterLink}
            to={item.to}
            onClick={() => setAnchorEl(null)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default function Nav() {
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 5px', mb: 4 }}
    >
      <Toolbar
        component="nav"
        aria-label="Main"
        sx={{
          minHeight: { xs: 72, md: 96 },
          maxWidth: 1280,
          width: '100%',
          mx: 'auto',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <RouterLink to="/" aria-label="Pacific Commercial Partners home">
          <Box
            component="img"
            src={logo}
            alt="KW Commercial"
            sx={{ height: { xs: 56, md: 80 }, width: 'auto' }}
          />
        </RouterLink>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
          {navigation.map((entry) =>
            entry.items ? (
              <NavDropdown key={entry.label} entry={entry} />
            ) : (
              <Button key={entry.label} sx={navButtonSx} component={RouterLink} to={entry.to}>
                {entry.label}
              </Button>
            ),
          )}
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <MobileNav />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
