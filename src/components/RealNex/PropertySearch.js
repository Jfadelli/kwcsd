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
                <div className={classes.iFrame}>
                    <iframe border="0" src="https://mpdirect.realnex.com/?site=kwcommercial" width="100%" data-embed="true" height="100%" />

                </div>
            </div>
        </div>




    );
}

export default PropertySearch;

