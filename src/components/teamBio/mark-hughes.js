import React from 'react'
import Headshot from '../../static/images/markheadshot.png'
import Footer from '../footer'
import Bio from './bios/markBio'
import { Agent } from './agentInfo/agentInfoList'
import { useStyles } from './style/teamBioStyles'
import { useMediaQuery } from '../hooks/mediaQuery'
import LoopnetListingImageOverride from '../../static/images/NCV.jpg'

import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core'

// mailto util
const mailTo = "mailto:"
const mailtoLink = mailTo + Agent.MarkHughes.email

export default function MarkBio() {
    const classes = useStyles()
    const isRow = useMediaQuery('(min-width: 768px)');


    return (
        <div className={classes.wrapper}>
            <div className={classes.flexRow} style={rowStyle.container(isRow)}>
                <Card className={classes.agentCard}>
                    <CardActionArea>
                        <a href={mailtoLink}>
                            <CardMedia
                                className={classes.headshot}
                                image={Headshot}
                                title={Agent.MarkHughes.name + " Headshot"}
                            />
                        </a>
                    </CardActionArea>

                    <div className={classes.agentInfo}>
                        <p gutterBottom varient="h5" component="h1" className={classes.title}>
                            {Agent.MarkHughes.name}
                        </p>

                        <Typography variant="h5" color="textSecondary" component="p">
                            {Agent.MarkHughes.phone}
                        </Typography>
                        <Typography variant="h6">
                            <a className={classes.email} href={mailtoLink}>
                                {Agent.MarkHughes.email}
                            </a>
                        </Typography>
                    </div>
                </Card>
                <Card style={propCardStyle.container(isRow)} className={classes.propertyCard}>
                    <CardActionArea>
                        <a href={Agent.MarkHughes.loopnetLink}>
                            <CardMedia
                                style={propPhotoStyle.container(isRow)}
                                className={classes.propertyPhoto}
                                image={LoopnetListingImageOverride}
                                title={Agent.MarkHughes.name + " Loopnet Listing"}
                            />
                        </a>
                    </CardActionArea>
                </Card>
            </div>
            <div className={classes.horizLine} />
            <div className={classes.flexCol}>

                <Bio />

                <Footer />
            </div>
        </div>
    )
}

const rowStyle = {
    container: isRow => ({
        flexDirection: isRow ? 'row' : 'column',
        justifyContent: isRow ? 'space-evenly' : 'center',
        alignItems: isRow ? 'center' : 'center',
        maxWidth: isRow ? '1024px' : '500px',
    })
};

const propCardStyle = {
    container: isRow => ({
        maxHeight: isRow ? '45vh' : '30vh',
        padding: isRow ? '0' : '10px',
    })
};

const propPhotoStyle = {
    container: isRow => ({
        maxHeight: isRow ? '50vh' : '30vh',
        padding: isRow ? '0' : '10px',
    })
};