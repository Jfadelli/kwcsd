import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import ServicesOffered from './navLinks/ServicesOffered.js'
import TeamBio from './navLinks/TeamBio.js'
import PropertyValuation from './navLinks/Property.js'
import Contact from './navLinks/Contact.js'
// import Referrals from './navLinks/Referrals.js'
import Home from './navLinks/HomeLink.js'

import Logo from '../static/images/logo.png'
import { useStyles } from './../styles/style'
import { useMediaQuery } from './hooks/mediaQuery'

export default function Nav() {
  const isRow = useMediaQuery('(min-width: 769px)');
  const isSmall = useMediaQuery('(min-width: 769px)');
  const classes = useStyles();

  return (
    <div className={classes.spacedDiv}>
      <div className={classes.navBar} style={styles.container(isRow)}>
        <Toolbar className={classes.navToolbar} style={styles.container(isRow)}>
          <a href='/'> <img style={logoStyle.container(isSmall)} src={Logo} alt='keller williams commercial logo' /></a>
          <Home />
          <ServicesOffered />
          <TeamBio />
          <PropertyValuation />
          <Contact />
          {/* <Referrals /> */}
        </Toolbar>
      </div>
    </div>
  );
}

const styles = {
  container: isRow => ({
    flexDirection: isRow ? 'row' : 'column',
    height: isRow ? '' : 'auto',
    alignContent: isRow ? '' : 'center',
    zIndex: '0'
  }),
};

const logoStyle = {
  container: isSmall => ({
    display: isSmall ? 'flex' : 'none',
    height: isSmall ? '88px' : '0',
    width: isSmall ? '150px' : '0',
    margin: isSmall ? '0 100px 0 auto' : 'auto',
    backgroundColor: isSmall ? 'transparent' : 'transparent'
  })
}
