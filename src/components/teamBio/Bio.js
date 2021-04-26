import React from 'react'
import { useLocation } from 'react-router-dom'

import Footer from '../footer'

import { Agent } from './agentInfo/agentInfoList'

import { useStyles } from './style/teamBioStyles'
import { useMediaQuery } from '../hooks/mediaQuery'

import {
    Card,
    CardActionArea,
    CardMedia,
    Typography
} from '@material-ui/core'


export default function Bio() {
    const classes = useStyles()
    const isRow = useMediaQuery('(min-width: 768px)');

    let Agents = Object.values(Agent)
    var pageName = useLocation().pathname.slice(10)
    let currAgent = Agents.filter(el => el.pageLocation === pageName)

    const mailTo = "mailto:"


    return (
        <div>
            {currAgent.map(el => {
                let currBio = []
                var brk = el.bio.split('~'); // must add ~ to bio array on line desired line breaks
                currBio.push(brk)
                // if(pageName === 'libby-birgnon'){
                //     let Headshot = Libby} else {
                //         return
                //     }

                const mailtoLink = mailTo + el.email
                return (
                    <div className={classes.wrapper}>
                        <div className={classes.flexRow} style={rowStyle.container(isRow)}>
                            <Card className={classes.agentCard}>
                                <CardActionArea>
                                    <a href={mailtoLink}>
                                        <CardMedia
                                            className={classes.headshot}
                                            
                                            image={el.headshot}
                                            title={el.name + " Headshot"}
                                        />
                                    </a>
                                </CardActionArea>

                                <div className={classes.agentInfo}>
                                    <p className={classes.title}>
                                        {el.name}
                                    </p>
                                    <Typography variant="h5" color="textSecondary" component="p">
                                        {el.phone}
                                    </Typography>

                                    <Typography variant="h6">
                                        <a className={classes.email} href={mailtoLink}>
                                            {el.email}
                                        </a>
                                    </Typography>
                                </div>

                            </Card>
                            <Card style={propCardStyle.container(isRow)} className={classes.propertyCard}>
                                <CardActionArea>
                                    <a href={el.loopnetLink}>
                                        <CardMedia
                                            style={propPhotoStyle.container(isRow)}
                                            className={classes.propertyPhoto}
                                            image={el.loopnetListingImage}
                                            title={el.name + " Loopnet Listing"}
                                        />
                                    </a>
                                </CardActionArea>
                            </Card>

                        </div>
                        <div className={classes.horizLine} />
                        <div className={classes.flexCol}>
                            {currBio[0].map(el => {
                                return (
                                    <div className={classes.content}>
                                        <div className={classes.p}>
                                            {el}
                                            <br />
                                            <br />
                                        </div>
                                    </div>)
                            })}
                        </div>
                        <Footer/>
                    </div>
                )
            })
            }
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