import React from 'react'
import Headshot from '../../static/images/willheadshot.png'
import Footer from '../footer'
import Bio from './bios/willBio'
import { Agent } from './agentInfo/agentInfoList'
import { useStyles } from './style/teamBioStyles'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'

// mailto util
const mailTo = "mailto:"
const mailtoLink = mailTo+Agent.WillSchnieder.email

const WillBio = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.flexRow}>
                <Card className={classes.agentCard}>
                    <CardActionArea>
                        <a href={mailtoLink}>
                            <CardMedia 
                                className={classes.headshot}
                                image={Headshot}
                                title={Agent.WillSchnieder.name + " Headshot"}
                                />
                       </a>
                    </CardActionArea>
               
                    <CardContent>
                        <Typography gutterBottom varient="h5" component="h1" className={classes.title}>
                            {Agent.WillSchnieder.name}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            {Agent.WillSchnieder.phone}
                            </Typography>
                        <Typography variant="h6">
                            <a className={classes.email} href={mailtoLink}>
                                {Agent.WillSchnieder.email}
                            </a>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.propertyCard}>
                    <CardActionArea>
                        <a href={Agent.WillSchnieder.loopnetLink}><CardMedia 
                        className={classes.propertyPhoto}
                        image={Agent.WillSchnieder.loopnetListingImage}
                        title= {Agent.WillSchnieder.name + " Loopnet Listing"}
                        />
                        </a>
                    </CardActionArea>
                </Card>
            </div>
            <div className={classes.flexCol}> 
                <section className={classes.p}>
                    <Bio />
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default WillBio