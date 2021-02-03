import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../static/images/sdskyline.png';
import PropertyGallery from './PropertyGallery'
import Footer from './footer'
import { useStyles } from '../styles/style'
import { useMediaQuery } from './hooks/mediaQuery'

export default function Home() {
  const classes = useStyles();
  const isHidden = useMediaQuery('(min-width: 1023px)');

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>

        <img style={styles.container(isHidden)} className={classes.hero} src={Hero} alt='cityscape' />
        <div className={classes.header}>
          <h1 className={classes.title}>Pacific Commercial Partners</h1>
          <h4 className={classes.motto}>The KW Commercial team that is ready to serve you</h4><br />
        </div>

        <div className={classes.contentWrapper}>

          <section className={classes.content}>
            <p> With over 100 years of combined experience covering all aspects of commercial real estate brokerage, development, marketing, finance, and management, our team is ready to serve you.</p><br />
            <p>Whether you are leasing, purchasing or selling, let us leverage our extensive experience and network of personal contacts to achieve your goals by providing the most creative and cost effective deal structures available in today's marketplace.</p>
          </section>
          <br/><br/>

          {/* <hr className={classes.horizLine} /> */}

          <h2 className={classes.h2}>Our Services</h2>

          <section className={classes.content}>
            <p> If you are interested in any of the services that we provide, specific information can be found within the links below.</p><br />
            <Link className={classes.link} to='/services/tenant-rep'>Tenant Representation</Link>
            <Link className={classes.link} to='/services/landlord-rep'>Landlord Representation</Link>
            <Link className={classes.link} to='/services/Investment-Acq'>Investment Acquisition & Sales</Link>
            <Link className={classes.link} to='/services/development-services'>Development & Entitlement</Link>
          </section>

          <hr className={classes.horizLine} />

          <section className={classes.content}>
            <a className={classes.linkToLoopnet} href="http://www.loopnet.com/brokerdirectory/profile/Mark%20Hughes/6glpewv">View some of our commercial real estate listings for sale or lease</a>
          </section>

          <section className={classes.gallery}>
            <PropertyGallery />
          </section>

          <hr className={classes.horizLine} />

        </div>
        <Footer className={classes.footer} />
      </div>
    </div>
  );
}

const styles = {
  container: isHidden => ({
    display: isHidden ? 'flex' : 'none',
    justifyContent: 'space-around'
  })
};