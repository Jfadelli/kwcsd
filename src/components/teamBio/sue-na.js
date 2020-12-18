import React from 'react'
import Headshot from '../../static/images/sue.png'
import Footer from '../footer'
import Bio from './bios/sueBio'

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
        color: theme.palette.primary.dark,
        fontSize: '2rem'
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
                        <Typography variant="h4" color="textSecondary" component="p">
                            {agentPhone}
                        <Typography variant="h5" color="textSecondary" component="p">
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
                    <Bio/>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default SueBio