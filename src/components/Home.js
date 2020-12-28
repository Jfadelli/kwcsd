import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Hero from '../static/images/sdskyline.png';

import PropertyGallery from './PropertyGallery'
import Footer from './footer'

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
  hero:{
    width: '100%',
    margin: '20px 0 0',
  },
  content:{
    display: 'flex',
    flexDirection:'column',
    fontSize: '2rem',
  },
  home:{
    display: 'flex',
    flexDirection:' column',
    justifyContent: 'center',
    maxWidth: '1024px',
    margin: '0 auto',
  },
  homeContent:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyCntent: 'space-evenly',
    fontSize: '1rem',
  },
  horizLine:{
    margin: '5vh 0 2vh 0',
    border: '1px solid #666666',
    width: '90%',
  },
  title:{
    font: '4rem black',
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: 0,
    margin: '5px 0',
    textAlign: 'center',
  },
  motto:{
    font: '2rem darkgray',
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: 0,
    margin: '5px 0',
    textAlign: 'center',
  },
  services:{
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0 2vh 0',
  },
  servicesLink:{
    textDecoration: 'none',
    color: 'rgb(200 1 1)',
    fontWeight: '500',
    fontSize: '1.5rem',
    textAlign:'center',
    borderBottom: 'dotted black 1px',
    lineHeight: '3rem',
    width: '50%',
    '&:hover':{
      color: 'rgb(230 70 1)',
      borderBottom: 'dotted rgb(230 70 1) 1px'
      }
    },
    h2:{
      fontSize:'3rem',
      fontWeight:'400',
      textAlign: 'center',
      margin: '2vh 0 0 0',
      padding: '0'
  },
  linkToLoopnet:{
    textDecoration: 'none',
    color: 'rgb(200 1 1)',
    fontWeight: '400',
    fontSize: '2rem', 
    margin: '0 0 2vh 0',
    textAlign:'center',
    '&:hover':{
      color: 'rgb(230 70 1)',
      }
  },

}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <img className={classes.hero} src={Hero} alt='cityscape'/>
        <Grid item xs={12}>
          <div className={classes.content}>
            <div className={classes.home}>
              <h1 className={classes.title}>Pacific Commercial Partners</h1>
              <h4 className={classes.motto}>~ The KW Commercial team that is ready to serve you ~</h4>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.content}>
            <div className={classes.home}>
                <section className={classes.homeContent}>
                  {/* <hr className={classes.horizLine} /> */}
                  <p> With over 100 years of combined experience covering all aspects of commercial real estate brokerage, development, marketing, finance, and management, our team is ready to serve you.</p>
                  <p>Whether you are leasing, purchasing or selling, let us leverage our extensive experience and network of personal contacts to achieve your goals by providing the most creative and cost effective deal structures available in today's marketplace.</p>
                  <hr className={classes.horizLine} />
                  <h2 className={classes.h2}>Our Services</h2>
                </section>
                <section className={classes.services}>
                  <p> If you are interested in any of the services that we provide, specific information can be found within the links below.</p>
                  <Link className={classes.servicesLink} to='/services/tenant-rep'>Tenant Representation</Link>
                  <Link className={classes.servicesLink} to='/services/landlord-rep'>Landlord Representation</Link>
                  <Link className={classes.servicesLink} to='/services/Investment-Acq'>Investment Acquisition & Sales</Link>
                  <Link className={classes.servicesLink} to='/services/development-services'>Development & Entitlement</Link>
                </section>
                <hr className={classes.horizLine} />
                <section className={classes.homeContent}>
                  <a  className={classes.linkToLoopnet} href="http://www.loopnet.com/brokerdirectory/profile/Mark%20Hughes/6glpewv">View some of our commercial real estate listings for sale or lease</a>
                </section>

                <section >
                <PropertyGallery/>
                </section>
                <hr className={classes.horizLine} />
            </div>
            <Footer className={classes.footer} />
        </div >
        </Grid>
      </Grid>
    </div>
  );
}
