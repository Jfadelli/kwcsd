import React from 'react'
import Footer from '../../components/footer'

export default function Referrals4You() {
    return (
        <div className='App'>
            <div className='iframe'>
                < iframe
                    title='Referrals4You | Create a Commercial Pipeline'
                    width="840"
                    height="475.5"
                    src="https://www.youtube.com/embed/PB3Wwc0nV2Q"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe >
            </div >
            <div className='iframe-link'>
                <h2><a href='https://www.referrals4you.com'>Register at Referrals4You.com</a></h2>
            </div>
            <Footer />
        </div>
    )
}