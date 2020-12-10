import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Hero from '../static/images/sdskyline.png';

import PropertyGallery from './PropertyGallery'
import Footer from './footer'

import '../App.css'
import '../styles/body.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    height:'100vh',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
  },
  paper: {
    alignItems: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'black' ,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <img id='hero' src={Hero} alt='cityscape'/>
        <Grid item xs={12}>
          <div className="content">
            <div className="home">
              <h1 className="title">Pacific Commercial Partners</h1>
              <h4 className="motto">The KW Commercial Team is ready to serve you</h4>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="content">
            <div className="home">
                <section className="home-content">
                  <hr className="h-line" />
                  <p> With over 100 years of combined experience covering all aspects of commercial real estate brokerage, development, marketing, finance, and management, our team is ready to serve you.</p>
                  <p>Whether you are leasing, purchasing or selling, let us leverage our extensive experience and network of personal contacts to achieve your goals by providing the most creative and cost effective deal structures available in today's marketplace.</p>
                  <h2>Our Services</h2>
                </section>
                <section className="services">
                  <Link to='/services/tenant-rep'>Tenant Representation</Link>
                  <Link to='/services/landlord-rep'>Landlord Representation</Link>
                  <Link to='/services/Investment-Acq'>Investment Acquisition & Sales</Link>
                  <Link to='/services/development-services'>Development & Entitlement</Link>
                </section>
                <section className="home-link-to-loopnet">
                  <a href="http://www.loopnet.com/brokerdirectory/profile/Mark%20Hughes/6glpewv">View all of my commercial real estate listings for sale or lease</a>
                </section>
                <hr className="h-line" />
                <section className="real-estate-news">
                <PropertyGallery/>
                </section>
            </div>
        </div >
        </Grid>
        <Grid item xs={4}/>
        <Grid item xs={3} >
            <Footer className="footer" />
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>

    </div>
  );
}
