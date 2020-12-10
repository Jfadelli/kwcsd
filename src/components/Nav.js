import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import ServicesOffered from './navLinks/ServicesOffered.js'
import TeamBio from './navLinks/TeamBio.js'
import PropertyValuation from './navLinks/PropertyValuation.js'
import Contact from './navLinks/Contact.js'
import Referrals from './navLinks/Referrals.js'

import Logo from '../static/images/logo.jpg'

export default function Header() {
  return (
    <div>
      <Toolbar >
        <a href='/'> <img src={Logo} alt='keller williams commercial' /></a>
        <ServicesOffered />
        <TeamBio />
        <PropertyValuation />
        <Contact />
        <Referrals />
      </Toolbar>
    </div>
  );
}
