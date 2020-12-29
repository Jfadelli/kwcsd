import React from 'react'
import Headshot from '../../static/images/van.jpg'
import Footer from '../footer'
import Bio from './bios/vanBio'
import { Agent } from './agentInfo/agentInfoList'
import { useStyles } from './style/teamBioStyles'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'

// mailto util
const mailTo = "mailto:"
const mailtoLink = mailTo+Agent.VanSpears.email

const VanBio = () => {
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
                                title={Agent.VanSpears.name + " Headshot"}
                                />
                       </a>
                    </CardActionArea>
               
                    <CardContent>
                        <Typography gutterBottom varient="h5" component="h1" className={classes.title}>
                            {Agent.VanSpears.name}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            {Agent.VanSpears.phone}
                            </Typography>
                        <Typography variant="h6">
                            <a className={classes.email} href={mailtoLink}>
                                {Agent.VanSpears.email}
                            </a>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.propertyCard}>
                    <CardActionArea>
                        <a href={Agent.VanSpears.loopnetLink}><CardMedia 
                        className={classes.propertyPhoto}
                        image={Agent.VanSpears.loopnetListingImage}
                        title= {Agent.VanSpears.name + " Loopnet Listing"}
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

export default VanBio