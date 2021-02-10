import React from 'react'
import { useStyles } from '../style/teamBioStyles'

const Bio = () => {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <section className={classes.p}>
                <p>Tommy Short is a licensed commercial real estate agent at KW Pacific Commercial Partners in Carmel Valley/Del Mar. He has spent over 40 years in all aspects of commercial real estate including sales, leasing, investment, development, property management, and building, designing, and remodeling buildings, breweries and restaurants. </p>
                <br/>
                <p>He brings a background of hundreds of business transactions in retail, manufacturing and service industries. He is an expert in buying and selling commercial buildings and leasing commercial space, specializing in retail, business, and restaurants, bars, microbreweries, and cafes.</p>
                <br/>
                <p>He has built multiple breweries for owners internationally, including the US, Japan, New Caledonia, and Brazil, as well as a brewing and bottling manufacturing plant and school producing multiple award-winning ales and lagers. He has developed and owned several restaurants, including a popular live-music venue for 20 years, in Colorado, two micro-breweries, and a high-end Mediterranean tapas-style restaurant in Hermosa Beach for 23 years, and a restaurant in Bocas del Toro, Panama which was awarded the Top Ten in Fodor’s Restaurant Guide in 2008</p>
                <br/>
                <p>He has designed, built, bought, and sold custom homes and commercial properties throughout California, Colorado, and Panama, including three multimillion-dollar award-winning custom homes, and a Sonoma County winery, production facility and tasting room.</p>
                <br/>
                <p>Whether starting a new business or expanding to new locations, when you work with Tommy you get more than an agent. You will benefit from experience and a keen eye that can work with you from start to finish to help you succeed. Having lived in San Diego for over 20 years along with his international background brings him a deep respect and appreciation for the multiple cultural roots of each unique neighborhood and niche throughout San Diego County and beyond. His passion is bringing great locales, real estate, food, beverage and entertainment together to create new opportunities for individuals and communities, and leveraging assets to achieve their highest potential. Integrity, honesty, dedication to quality, and care for people and planet are his guiding principles.</p>
            </section>
        </div>
    )
}

export default Bio