import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import ServicesOffered from './navLinks/ServicesOffered.js'
import TeamBio from './navLinks/TeamBio.js'
import PropertyValuation from './navLinks/PropertyValuation.js'
import Contact from './navLinks/Contact.js'
import Referrals from './navLinks/Referrals.js'
import Home from './navLinks/HomeLink.js'

import Logo from '../static/images/logo.jpg'
import StyledVariables from '../styles/StyledVariables.js'

import { useMediaQuery } from './hooks/mediaQuery'

const SV = StyledVariables


export default function Nav() {
  const isRow = useMediaQuery('(min-width: 768px)');
  const isSmall = useMediaQuery('(min-width: 768px)');

  return (
  <SV.SpacedDiv>
    <SV.NavBar style={styles.container(isRow)}>
      <Toolbar style={styles.container(isRow)}>
        <a href='/'> <img style={logoStyle.container(isSmall)} src={Logo} alt='keller williams commercial' /></a>
        <Home />
        <ServicesOffered />
        <TeamBio />
        <PropertyValuation />
        <Contact />
        <Referrals />
      </Toolbar>
    </SV.NavBar>
  </SV.SpacedDiv>
  );
}

const styles = {
  container: isRow => ({
    flexDirection: isRow ? 'row' : 'column',
    height: isRow ? '' : 'auto',
    alignContent: isRow ? '' : 'center',
    zIndex:'0'
  }),
};

const logoStyle = {
  container: isSmall => ({
    display: isSmall ? 'flex' : 'none',
    height: isSmall ? '88px': '0',
    width: isSmall ? '150px' : '0',
    margin: isSmall ?  '0 100px 0 auto' : 'auto'
  })
}
