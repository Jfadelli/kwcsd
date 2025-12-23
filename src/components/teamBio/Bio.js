import React from 'react'
import { useLocation } from 'react-router-dom'

import Footer from '../footer'

import { Agent } from './agentInfo/agentInfoList'

import { useStyles } from './style/teamBioStyles'
import { useMediaQuery } from '../hooks/mediaQuery'

import defaultLoopnetListingPhoto from '../../static/images/hi-rise-bldg.jpg'

import {
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    // Link
} from '@mui/material'

export default function Bio() {
    const classes = useStyles()
    const isRow = useMediaQuery('(min-width: 768px)');

    let Agents = Object.values(Agent)
    var pageName = useLocation().pathname.slice(10)
    let currAgent = Agents.filter(el => el.pageLocation === pageName)

    // const handleMailto = () => {
    //     console.log("click")
    // }

    return (
        <div>
            {currAgent.map((el, index) => {
                const mailtoLink = "mailto:" + el.email;
                let currBio = [];
                var brk = el.bio.split('~');
                currBio.push(brk);

                return (
                    <div className={classes.wrapper} key={el.email || el.name || index}>

                        <div className={classes.flexRow} style={rowStyle.container(isRow)}>
                            <Card className={classes.agentCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.headshot}
                                        image={el.headshot}
                                        title={el.name + " Headshot"}
                                    />
                                </CardActionArea>

                                <div className={classes.agentInfo}>
                                    <p className={classes.title}>
                                        {el.name}
                                    </p>
                                    <Typography variant="h5" color="textSecondary" component="p">
                                        {el.phone}
                                    </Typography>
                                    <Typography
                                        className={classes.email}
                                        variant="h6"
                                        component="a"
                                        href={mailtoLink}
                                        target="_blank"

                                    >
                                        {el.email}
                                    </Typography>
                                </div>
                                {/* </Link> */}
                            </Card>

                            <img className={classes.propertyPhoto} src={el.loopnetListingImage || defaultLoopnetListingPhoto} />

                        </div>
                        <div className={classes.horizLine} />
                        <div className={classes.flexCol}>
                            {brk.map((line, idx) => (
                                <div className={classes.content} key={idx}>
                                    <div className={classes.p}>
                                        {line}
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            ))}

                        </div>
                        <Footer />
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
        display: isRow ? 'flex' : 'flex'
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