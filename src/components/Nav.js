import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import ServicesOffered from './navLinks/ServicesOffered.js'
import TeamBio from './navLinks/TeamBio.js'
import PropertyValuation from './navLinks/PropertyValuation.js'
import Contact from './navLinks/Contact.js'
import Referrals from './navLinks/Referrals.js'

import Logo from '../static/images/logo.jpg'


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));


export default function Header() {


  return (
    <React.Fragment>
      <Toolbar >
        <a href='/'> <img src={Logo} alt='keller williams commercial' /></a>
        <ServicesOffered />
        <TeamBio />
        <PropertyValuation />
        <Contact />
        <Referrals />
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};