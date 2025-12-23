import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import TextTruncate from 'react-text-truncate'


import { makeStyles } from '@mui/styles'

const darkText = 'rgba(20, 20, 20, .8)'

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
    propCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        height: '370px',
        boxShadow: '.25rem .25rem .25rem .25rem rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '6px',
        margin: '.5rem',
        '&:hover': {
            boxShadow: '.25rem .25rem .25rem .35rem rgba(0,0,0,0.2)',
            transition: '0.3s',
        }
    },
    propPhoto: {
        alignSelf: 'center',
        objectFit: 'cover',
        width:'380px',
        height: '230px',
        margin: '15px 15px 5px 15px',
        borderRadius:'3px'
    },
    propTitle: {
        color: darkText,
        margin: '0 0 0px 0',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        lineHeight: '.9rem',
        Overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    propPrice: {
        margin: '',
        fontSize: '1rem',
        lineHeight: '.5rem',
        color: darkText,
        fontWeight:'bold',

    },
    propDetail: {
    margin:'-10px 0 0 0',
    padding: '0 20px',
    lineHeight: '1rem',
    fontSize: '.90rem',
    width: '100%',
    minWidth: '400px',
    textAlign: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(10,10,10, .7)'
    }
}));


function truncateString(str, num) {
    if (num > str.length) {
        return str;
    } else {
        str = str.substring(0, num);
        return str + "...";
    }
}

const PropertyGallery = () => {
    const classes = useStyles()
    const [listings, setListings] = useState([])
    useEffect(() => {
        axios.get('https://kwsd-web-scraper.herokuapp.com/api/listings')
        // axios.get('http://localhost:5000/api/listings/')
            .then(resp => setListings(resp.data))
    }, [])

    return (
        <div className={classes.root}>
            <section className={classes.propGal}>

                {listings.map(listing => (
                    <div>
                        <a className={classes.link} href={listing.link}>
                            <div className={classes.propCard} key={listing.id}>
                                <img src={listing.img} className={classes.propPhoto} alt='Subject Property' />
                                <p className={classes.propTitle}>{truncateString(listing.address, 35)}</p>
                                <p className={classes.propPrice}>{listing.price}</p>
                                <p className={classes.propDetail}> {truncateString(listing.description, 180)} </p>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default PropertyGallery