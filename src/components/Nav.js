import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import ServicesOffered from './navLinks/ServicesOffered.js'
import TeamBio from './navLinks/TeamBio.js'
import PropertyValuation from './navLinks/PropertyValuation.js'
import Contact from './navLinks/Contact.js'
import Referrals from './navLinks/Referrals.js'

import Logo from '../static/images/logo.jpg'
import StyledVariables from '../styles/StyledVariables.js';

const SV = StyledVariables

export default function Nav() {
  return (
    <SV.NavBar>
      <Toolbar  style={{ margin: "0 5%"}} >
        <a href='/'> <img src={Logo} alt='keller williams commercial' /></a>
        <ServicesOffered />
        <TeamBio style={{ margin: "0 15%", padding:'30px'}}/>
        <PropertyValuation />
        <Contact />
        <Referrals />
      </Toolbar>
    </SV.NavBar>
  );
}
