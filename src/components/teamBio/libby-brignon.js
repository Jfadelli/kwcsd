import React from 'react'
import Libby from '../../static/images/libbyheadshot.jpg'
import Footer from '../footer'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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

const LibbyBio = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.flexRow}>
            
                <Card className={classes.root}>
                    <CardActionArea>
                        <a href="mailto:ebrignon@kwcommercial.com">
                            <CardMedia 
                            className={classes.headshot}
                            image={Libby}
                            title="Libby Brignon Headshot"
                            />
                        </a>
                    </CardActionArea>
  
                    <CardContent>
                        <Typography gutterBottom varient="h5" component="h1" className={classes.title}>
                            Libby Brignon
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            619.540.4208
                        <Typography variant="body2" color="textSecondary" component="p">
                            <a href="mailto:ebrignon@kwcommercial.com">
                            ebrignon@kwcommercial.com
                            </a>
                        </Typography>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.propertyCard}>
                    <CardActionArea>
                        <a href="https://www.loopnet.com/brokerdirectory/profile/elizabeth-brignon/3jgrjrd"><CardMedia 
                        className={classes.propertyPhoto}
                        image="https://images1.loopnet.com/i2/vrr4DgyNhPKdBj2AOitNdXYg6ja8S0tMCtxbPo3jgkI/112/image.jpg"
                        title="Libby Brignon Loopnet Listing"
                        />
                        </a>
                    </CardActionArea>
                </Card>
            </div>
            <div className={classes.flexCol}>  
                <section className={classes.p}>

                    <p>Elizabeth Brignon (Libby) is an Associate Broker at KW Commercial Carmel Valley/ Del Mar and a member of the Pacific Commercial Partners Team focusing on investment acquisition and sales, as well as tenant representation primarily in the San Diego area. She is a third generation real estate professional having been involved in various sectors of commercial real estate for over 10 years, with professional experience ranging from development and construction to finance and acquisitions.</p>
                    <p>Prior to joining KW Commercial, Elizabeth worked as an investment analyst for a developer of multi- family apartment projects and has been party to several mid to large scale land development deals. She oversaw the acquisition and/or disposition of numerous apartment communities throughout Southern California and Texas, with her greatest project involving hands on support, from acquisition to completion, in the development of a 226 unit garden style apartment development in Arlington, Texas. Other projects include condominium and student housing developments, as well as, single family rehabilitations. Additionally, Elizabeth has worked with REO acquisitions, entitlement processing, contract management, and market forecasting.</p>
                    <p>Elizabeth is a licensed CA Real Estate Broker who holds a Masters degree in Business Administration (MBA), with a focus on finance and management, as well as a Master of Science in Real Estate (MSRE) from the University of San Diego. She is a member of the National Association of Realtors, Urban Land Institute San Diego/Tijuana Chapter, National Association of Office and Industrial Properties (NAIOP), and the Real Estate Alumni Association, as well as, a candidate for Certified Commercial Investment Member (CCIM) designation. </p>
                    <p>She brings a wide range of skills and energy to a seasoned team of real estate professionals. Her experience and educational background add depth to facilitate the analysis, management and transactional processes of investment and tenant representation brokerage, while helping clients to understand market alternatives, and select the options which best meet their criteria and objectives.</p>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default LibbyBio