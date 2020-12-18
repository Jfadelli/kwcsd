import React from 'react'
import Headshot from '../../static/images/van.jpg'
import Footer from '../footer'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


//Agent Information
const agentName = "Van Spears"
const agentPhone = "858.720.1900"
const agentEmail = "van@kwcommercial.com"
const loopnetLink = "https://www.loopnet.com/brokerdirectory/profile/van-spears/y4b86cv"
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

const VanBio = () => {
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

                    <p>Van Spears comes from a deep-rooted background in the construction industry. During his time as a sales operations manager, he negotiated several contracts with national developers on multi-million dollar projects. He built and maintained an effective sales and marketing team with streamlined systems to maximize efficiency. Van brings this breadth of knowledge to his commercial real estate clients to reveal hidden opportunities in commercial and multi-family properties and provide creative solutions that exceed his clients’ goals. </p>
                    <p>Van spends time weekly in the neighborhoods he serves, providing his clients with timely and accurate information. His hands-on approach to brokerage helps him immerse himself in the trends of the marketplace at a level that can’t be achieved from digital sources alone. He also uses his economics background to empower his clients with high-level investment analysis and market insights that helps them make critical real estate decisions when they need to most.</p>
                    <p>Who you do business with matters. When you work with Van, you partner with a professional, dedicated, and loyal ally to negotiate on your behalf with the systems in place to streamline buying or selling your properties, and the backing of the #1 Real Estate company in America, KW Commercial. </p>
                    <p>Whether your plans are to buy, sell or hold, it’s always a great time to talk with Van about your real estate goals. </p>
                    <p>Contact his KW Commercial office today.</p>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default VanBio