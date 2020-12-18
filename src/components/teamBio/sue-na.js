import React from 'react'
import Headshot from '../../static/images/sue.png'
import Footer from '../footer'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


//Agent Information
const agentName = "Sue Na"
const agentPhone = "858.720.1900"
const agentEmail = "suena@kwcommercial.com"
const loopnetLink = "https://www.loopnet.com/brokerdirectory/profile/sue-na/24tjdh8"
const loopnetListingImage = "https://images1.loopnet.com/i2/u37ityMv-NapjHy-R_EznK7_EEFYTjChthYICMUTMYQ/115/image.jpg"

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

const SueBio = () => {
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
                        image= {loopnetListingImage}
                        title= {agentName + " Loopnet Listing"}
                        />
                        </a>
                    </CardActionArea>
                </Card>
            </div>
            <div className={classes.flexCol}>  
                <section className={classes.p}>
                <p>Sue has always been in the world of sales and the entrepreneur, starting her first sales business at age 14. She has combined 37 years of sales experience and 20 years of real estate experience. Sue is a resident of San Diego for over 30 years and has a great knowledge of the overall San Diego market. </p>
                <li>Strong Negotiation Skills</li>
                <li>Great Sense of Urgency </li>
                <li>Accomplish tasks with quality and effectiveness </li>
                <li>Sought out by others for help and expertise </li>
                <li>Gift clients with clarity, excellence, and movement </li>
                <li>Fluent in Korean and English</li>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default SueBio