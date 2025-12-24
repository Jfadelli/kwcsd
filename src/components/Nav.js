import React from 'react';
import Toolbar from '@mui/material/Toolbar';

import ServicesOffered from './navLinks/ServicesOffered.js'
import TeamBio from './navLinks/TeamBio.js'
import PropertyValuation from './navLinks/Property.js'
import Contact from './navLinks/Contact.js'
// import Referrals from './navLinks/Referrals.js'
import Home from './navLinks/HomeLink.js'
import MobileMenu from './MobileMenu.js'

import Logo from '../static/images/logo.png'
import { useStyles } from './../styles/style'
import { useMediaQuery } from './hooks/mediaQuery'

export default function Nav() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const classes = useStyles();

  return (
    <div className={classes.spacedDiv}>
      <div className={classes.navBar}>
        {isMobile ? (
          // Mobile: Logo left + Hamburger right
          <Toolbar style={{ width: '100%', justifyContent: 'space-between', padding: '0 10px' }}>
            <a href='/'>
              <img style={mobileLogoStyle} src={Logo} alt='keller williams commercial logo' />
            </a>
            <MobileMenu />
          </Toolbar>
        ) : (
          // Desktop: Current horizontal layout
          <Toolbar className={classes.navToolbar}>
            <a href='/'>
              <img style={desktopLogoStyle} src={Logo} alt='keller williams commercial logo' />
            </a>
            <Home />
            <ServicesOffered />
            <TeamBio />
            <PropertyValuation />
            <Contact />
            {/* <Referrals /> */}
          </Toolbar>
        )}
      </div>
    </div>
  );
}

const mobileLogoStyle = {
  display: 'flex',
  height: '60px',
  width: '102px', // Maintains 150:88 aspect ratio
  margin: '0',
  backgroundColor: 'transparent'
};

const desktopLogoStyle = {
  display: 'flex',
  height: '88px',
  width: '150px',
  margin: '0 100px 0 auto',
  backgroundColor: 'transparent'
};
