import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextTruncate from 'react-text-truncate'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: "column"
    },
    propGal: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    propCard:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        height: '310px',
        boxShadow: '.25rem .25rem .25rem .25rem rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius:'6px',
        margin: '.5rem',
        '&:hover':{
            boxShadow: '.25rem .25rem .25rem .35rem rgba(0,0,0,0.2)',
            transition: '0.3s',
        }
    },
    propPhoto:{
        alignSelf:'center',
        maxWidth: '400px',
        minWidth: '350px',
        minHeight: '225px',
        maxHeight: '300px',
        margin: '30px 30px 5px 30px', 
    },
    propInfo:{
        margin: '0 0 10px 0',
        '&:h5':{
            fontSize: '1rem',
            lineHeight: '.5rem'
        }
    },
    propDetail:{
        fontSize:'.90rem',
        width: '100%',
        minWidth:'400px',
    },
}));

// easiest known way to handle the h5 block within the card
const cardDetailStyle = {
    fontSize:'1rem', lineHeight:'.5rem', textAlign:'center'
}

const PropertyGallery = () => {
    const classes = useStyles()
    const [listings, setListings] = useState([])
    useEffect(() => {
        axios.get('https://kwsd-web-scraper.herokuapp.com/api/listings')
            .then(resp => setListings(resp.data))
    }, [])

    return (
        <div className={classes.root}>
            <section className={classes.propGal}>
                {listings.map(listing => (
                    <div className={classes.root}>
                        <div className={classes.propCard} key={listing.id}>
                            <a href={listing.link}>
                                <img src={listing.img} className={classes.propPhoto} alt='Subject Property' />
                            </a>
                            <h5 style={cardDetailStyle} className={classes.propInfo}>{listing.address} - ${listing.price}</h5>
                            <TextTruncate line={2} className={classes.propDetail} text={listing.description} />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default PropertyGallery