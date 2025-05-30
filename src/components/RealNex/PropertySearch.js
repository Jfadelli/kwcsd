import React from 'react'
// import BuildOut from 'buildout'
import PropGal from '../PropertyGallery'
import { useStyles } from '../../styles/style'


const PropertySearch = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.flexCol}>

                <h1 className={classes.title}>Property Search</h1>
                <div className={classes.contentWrapper}>
                    <div className={classes.content}>
                        <p>Please identify any listed KW Commercial property for Sale or Lease that you are interested in and we will thoroughly research the market and provide you with a report indicating our opinion of the value of the investment, the competitive Sale or Lease values in the market, and alternate market opportunities we identify that meet your criteria. We will represent you in any Sale or Lease opportunity and the Seller or Building Owner will compensate us through their listing agent at no cost to you. We can also search multiple national commercial listing services for you.</p>
                    </div>
                    <br />
                    <hr className={classes.horizLine} />
                    <br />
                </div>
                <div className={classes.iFrame}>
                    <iframe border="0" src="https://mpdirect.realnex.com/?site=kwcommercial" width="100%" data-embed="true" height="100%" />

                </div>
                <br />
                <hr className={classes.horizLine} />
                <br />
            </div>
        </div>




    );
}

export default PropertySearch;

