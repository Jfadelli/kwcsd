import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
    IconButton,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function Bio() {
    const classes = useStyles()
    const isRow = useMediaQuery('(min-width: 768px)');
    const navigate = useNavigate()

    let Agents = Object.values(Agent)
    var pageName = useLocation().pathname.slice(10)
    let currAgent = Agents.filter(el => el.pageLocation === pageName)

    // Find current agent index for navigation
    const currentIndex = Agents.findIndex(el => el.pageLocation === pageName)
    const prevAgent = currentIndex > 0 ? Agents[currentIndex - 1] : null
    const nextAgent = currentIndex < Agents.length - 1 ? Agents[currentIndex + 1] : null

    const handleNavigation = (pageLocation) => {
        navigate(`/team-bio/${pageLocation}`)
        window.scrollTo(0, 0)
    }

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
                        {/* Navigation Buttons */}
                        {prevAgent && (
                            <IconButton
                                className={classes.navButtonLeft}
                                onClick={() => handleNavigation(prevAgent.pageLocation)}
                                aria-label={`Previous agent: ${prevAgent.name}`}
                            >
                                <ArrowBackIosNewIcon />
                            </IconButton>
                        )}
                        {nextAgent && (
                            <IconButton
                                className={classes.navButtonRight}
                                onClick={() => handleNavigation(nextAgent.pageLocation)}
                                aria-label={`Next agent: ${nextAgent.name}`}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        )}

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
                                    <Typography
                                        variant="body1"
                                        color="textSecondary"
                                        component="p"
                                        style={{
                                            fontSize: '1rem',
                                            margin: '5px 0',
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {el.phone}
                                    </Typography>
                                    <Typography
                                        className={classes.email}
                                        variant="body2"
                                        component="a"
                                        href={mailtoLink}
                                        target="_blank"

                                    >
                                        {el.email}
                                    </Typography>
                                </div>
                                {/* </Link> */}
                            </Card>

                            <img className={classes.propertyPhoto} src={el.loopnetListingImage || defaultLoopnetListingPhoto} alt={`${el.name} featured property`} />

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