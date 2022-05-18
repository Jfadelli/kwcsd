import React, { useEffect } from 'react'
// import BuildOut from 'buildout'
import PropGal from '../PropertyGallery'
import { useStyles } from '../../styles/style'


const PropertySearch = () => {
    const classes = useStyles();
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.type = "text/javascript"
        script1.src = "https://buildout.com/api.js?v8s";
        script1.async = true;


        document.body.appendChild(script1);

        return () => {
            document.body.removeChild(script1);
        }
    }, []);
    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
        <div id="buildout" style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent:"center"}}>
        <h1 className={classes.title}>Property Search</h1>
        <div className={classes.heading} style={{color:'red', fontVariant:'small-caps', margin:'-20px 0 0 0' }}> feature is currently under development</div>

        <div className={classes.subHeading} style={{textAlign:'justify'}}>We understand that you want to see all of the listings that the Pacific Commercial Parnters Team currently has. For the time being please view a small selection of available properties below. Be sure to check back soon for the full search feature.</div>
   


        <hr />
        <PropGal/>
        </div>
        </div>
        </div>
        </div>
        

    );
}

export default PropertySearch;

