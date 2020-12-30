import React from 'react'
import Headshot from '../../static/images/van.jpg'
import Footer from '../footer'
import Bio from './bios/vanBio'
import { Agent } from './agentInfo/agentInfoList'
import { useStyles } from './style/teamBioStyles'
import { useMediaQuery } from '../hooks/mediaQuery'

import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core'

// mailto util
const mailTo = "mailto:"
const mailtoLink = mailTo+Agent.VanSpears.email

export default function VanBio() {
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
                <Card style={propCardStyle.container(isRow)} className={classes.propertyCard}>
                    <CardActionArea>
                        <a href={Agent.VanSpears.loopnetLink}>
                            <CardMedia 
                                style={propPhotoStyle.container(isRow)}
                                className={classes.propertyPhoto}
                                image={Agent.VanSpears.loopnetListingImage}
                                title= {Agent.VanSpears.name + " Loopnet Listing"}
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