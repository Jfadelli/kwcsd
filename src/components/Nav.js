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

const SV = StyledVariables

const toolBarStyle = {
  margin: "0 5%", 
}

const logoStyle = {
  height:'75px',
  width:'125px',
}


export default function Nav() {
  return (
  <SV.SpacedDiv>
    <SV.NavBar>
      <Toolbar  style={toolBarStyle} >
        <Home />
        <ServicesOffered />
        <TeamBio />
        <PropertyValuation />
        <Contact />
        <Referrals />
      </Toolbar>
    </SV.NavBar>
    <a href='/'> <img style={logoStyle}src={Logo} alt='keller williams commercial' /></a>
  </SV.SpacedDiv>
  );
}
