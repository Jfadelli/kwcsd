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
  display: 'flex',
  justifyContent: 'space-evenly',
}

const logoStyle = {
  display: 'flex',
  height:'88px',
  width:'150px',
  margin: "0 100px 0 auto "
}

const links = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}


export default function Nav() {
  return (
  <SV.SpacedDiv>
    <SV.NavBar>
      <Toolbar  style={toolBarStyle} >
        <div>
        <a href='/'> <img style={logoStyle}src={Logo} alt='keller williams commercial' /></a>
        </div>
        <div style={links}>
        <Home />
        <ServicesOffered />
        <TeamBio />
        <PropertyValuation />
        <Contact />
        <Referrals />
        </div>
      </Toolbar>
    </SV.NavBar>

  </SV.SpacedDiv>
  );
}
