import React from 'react'
import Headshot from '../../static/images/tommy-short.jpeg'
import Footer from '../footer'
import Bio from './bios/tommyShortBio'
import { Agent } from './agentInfo/agentInfoList'
import { useStyles } from './style/teamBioStyles'
import { useMediaQuery } from '../hooks/mediaQuery'
import LoopnetListingImageOverride from '../../static/images/mediteraneo.JPG'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'

// mailto util
const mailTo = "mailto:"
const mailtoLink = mailTo+Agent.TommyShort.email

export default function TommyShortBio() {
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
                                title={Agent.TommyShort.name + " Headshot"}
                                />
                       </a>
                    </CardActionArea>
               
                    <CardContent>
                        <Typography gutterBottom varient="h5" component="h1" className={classes.title}>
                            {Agent.TommyShort.name}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            {Agent.TommyShort.phone}
                            </Typography>
                        <Typography variant="h6">
                            <a className={classes.email} href={mailtoLink}>
                                {Agent.TommyShort.email}
                            </a>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={propCardStyle.container(isRow)} className={classes.propertyCard}>
                    <CardActionArea>
                        <a href={Agent.TommyShort.loopnetLink}>
                            <CardMedia 
                                style={propPhotoStyle.container(isRow)}
                                className={classes.propertyPhoto}
                                image={LoopnetListingImageOverride}
                                title= {Agent.TommyShort.name + " Loopnet Listing"}
                            />
                        </a>
                    </CardActionArea>
                </Card>
            </div>
            <div className={classes.horizLine} />
            <div className={classes.flexCol}> 

                    <Bio />

                <Footer/>
            </div>
        </div>
    )
}

const rowStyle = {
    container: isRow => ({
      flexDirection: isRow ? 'row' : 'column',
      justifyContent: isRow ? 'space-evenly': 'center',
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

