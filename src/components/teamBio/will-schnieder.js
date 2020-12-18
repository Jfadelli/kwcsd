import React from 'react'
import Headshot from '../../static/images/willheadshot.png'
import Footer from '../footer'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

//Agent Information
const agentName = "Will Schnieder"
const agentPhone = "760.450.4100"
const agentEmail = "will@kwcommercial.com"
const loopnetLink = "https://www.loopnet.com/brokerdirectory/profile/will-schneider/wb7jxwl"
const loopnetListingImage = "https://images1.loopnet.com/i2/hU3AOPYluQ3AhAPo1uUnk0NYB4DiVaZaRga8xQr43dM/112/image.jpg"

// mailto util
const mailTo = "mailto:"
const mailtoLink = mailTo+agentEmail

// Styles
const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 345,
    },
    media: {
        height: 140,
    },
    title: {
        color: theme.palette.primary.dark
    },
    flexRow: {
        display: "flex",
        justifyContent: "center",
    },
    flexCol: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        textAlign: "left",
        margin: "0 5%",
    },
    headshot: {
        height: "45vh"
    },
    propertyCard:{
        margin: 10,
        height: "70vh",
        width: "50%",
    },
    propertyPhoto:{
        height: "70vh",
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    p:{
        fontSize: "1.25rem",
        padding: "1rem",
        margin: "0 8rem",
    },
    list:{
        fontSize: "2rem",
        margin: " 0 8rem",
        padding: "0 0 0 4rem",
    },
    heading:{
        fontSize: "3rem",
        margin: "0 8rem",
        padding: "0rem",
    }
}))

const WillBio = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.flexRow}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <a href={mailtoLink}>
                            <CardMedia 
                            className={classes.headshot}
                            image={Headshot}
                            title={agentName + "Headshot"}
                            />
                        </a>
                    </CardActionArea>
  
                    <CardContent>
                        <Typography gutterBottom varient="h5" component="h1" className={classes.title}>
                            {agentName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {agentPhone}
                        <Typography variant="body2" color="textSecondary" component="p">
                            <a href={mailtoLink}>
                                {agentEmail}
                            </a>
                        </Typography>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.propertyCard}>
                    <CardActionArea>
                        <a href={loopnetLink}><CardMedia 
                        className={classes.propertyPhoto}
                        image={loopnetListingImage}
                        title= {agentName + " Loopnet Listing"}
                        />
                        </a>
                    </CardActionArea>
                </Card>
            </div>
            <div className={classes.flexCol}>  
                <section className={classes.p}>
                    <p>William “Will” Schneider, an Advisor for the SVN Asset Advisory Group (“SVNAAG”), specializes in multi-family sales and office sales and leasing. Will brings to SVNAAG a unique background in commercial real estate, finance, and law. Before joining SVNAAG, Will was the Vice President of Investment Sales, Multi-Family Group for a mid-size, boutique commercial real estate firm in San Diego. In this capacity, Will branched out into office sales and leasing. Will has also been a commercial mortgage broker who financed a variety of commercial properties including multi-family, industrial, and office buildings. He began his career as a loan officer for the Bank of America, where he made consumer and commercial loans.</p>
                    <p>In addition to his real estate and finance positions, Will had a successful career for many years as a litigation attorney, judge pro tem, arbitrator, and mediator in Los Angeles and San Diego counties. During this time, Will purchased a series of multi-family properties for his own portfolio by completing 1031 tax-deferred exchanges. Will retired from the practice of law in December 2012 to focus exclusively on commercial real estate brokerage.</p>
                    <p>Will’s transition from attorney to commercial real estate broker was the result of having evaluated numerous multi-family and commercial properties in California and across the nation as an investor and commercial mortgage broker. Will has a passion for the commercial real estate business. He believes that every commercial property has its own unique character which brings excitement and opportunity. Furthermore, with SVN’s talented staff of professionals and its global reach of offices and advisors, SVNAAG provides the ideal platform to deliver the finest local and national commercial real estate services available.</p>
                    <p>Will is a licensed California real estate broker and a member of the National Association of Realtors (“NAR”), the San Diego Association of Realtors (“SDAR”), and the North San Diego County Association of Real Estate-Commercial Division. He is also a member of the Carlsbad Chamber of Commerce and he participates on the planning committee for the Mira Costa College Real Estate Advisory Board. Will graduated from U.C.L.A. with a Bachelor of Science degree in Business Administration, and he received his Juris Doctor degree from Whittier College School of Law.sociation</p>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default WillBio