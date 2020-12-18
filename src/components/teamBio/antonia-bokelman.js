import React from 'react'
import Headshot from '../../static/images/antonia.jpg'
import Footer from '../footer'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


//Agent Information
const agentName = "Antonia Bokelman"
const agentPhone = "858.720.1900"
const agentEmail = "antonia@kwcommercial.com"
const loopnetLink = "https://www.loopnet.com/brokerdirectory/profile/antonia-bokelman/b11wx38"
const loopnetListingImage = "https://images1.loopnet.com/i2/vrr4DgyNhPKdBj2AOitNdXYg6ja8S0tMCtxbPo3jgkI/112/image.jpg"

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

const AntoniaBio = () => {
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

                    <p>Antonia Bokelman has more than 14 years of experience as a real estate professional representing buyers and sellers in the acquisition and disposition of income producing properties and value-add investments. She earns her client’s trust and loyalty through integrity, diplomacy, and results.  She is fluent in Spanish and English.</p>
                    <p>What sets Antonia apart is her vision and ability to maximize value for her clients. She adds value through the entire ownership cycle from investment strategy, to property positioning, to pricing and negotiation on purchase or sale. In doing so, Antonia avails her clients to an extensive network of buyers, sellers, as well as trades and service providers.</p>
                    <p>Antonia has an unwavering commitment to understanding her client’s needs and a dedication to building long-lasting relationships. She is a great communicator and a knowledgeable resource.  In her advocacy for her clients, Antonia is assertive, effective, and a strong negotiator. At the same time, she is compassionate, friendly, and has a great sense of humor, making otherwise stressful situations both enjoyable and rewarding.</p> 
                    <p>Born and raised in Barcelona (Spain), Antonia moved to San Diego 19 years ago. She has an intimate understanding of what makes each San Diego city and neighborhood so special and unique. Whether you are a high-profile corporate client, or just looking for your first real estate investment, working with Antonia Bokelman will assure you timely service and unsurpassed success. </p>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default AntoniaBio