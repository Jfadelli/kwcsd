import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextTruncate from 'react-text-truncate'
// import '../style/prop-gallery.css'
// import '../style/index.css'


export default function PropertyGallery() {
    const [listings, setListings] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/listings')
            .then(resp => setListings(resp.data))
    }, [])

    return (
        <div className="content">
            <section className="property-gallery">
                {listings.map(listing => (
                    <div className='content'>
                        <div className='property-card' key={listing.id}>
                            <a href={listing.link}><img src={listing.img} className='prop-photo' alt='Subject Property' /></a>
                            <h5 className='prop-info'>{listing.address} - ${listing.price}</h5>
                            <TextTruncate line={1} className='prop-detail' text={listing.description} />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
