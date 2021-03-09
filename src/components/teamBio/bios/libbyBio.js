import React from 'react'
import { useStyles } from '../style/teamBioStyles'

const Bio = () => {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <section className={classes.p}>
                <p>Elizabeth Brignon (Libby) is an Associate Broker at KW Commercial Carmel Valley/ Del Mar and a member of the Pacific Commercial Partners Team focusing on investment acquisition and sales, primarily in the land and multifamily sectors, as well as commercial leasing across Southern California.  She is a third-generation real estate professional having been involved in various sectors of commercial real estate for over 15 years with professional experience ranging from development and construction to finance and acquisitions.</p><br />

                <p>Elizabeth is a licensed CA Real Estate Broker who holds a Master’s degree in Business Administration (MBA) with a focus on finance and management as well as a Master of Science in Real Estate (MSRE) from the University of San Diego. She is a Certified Commercial Investment Member (CCIM) as well as member of the National Association of Realtors (NAR) and Urban Land Institute San Diego/Tijuana Chapter (ULI).  Her experience and educational background facilitate seamless real estate transactions and add depth to the buying and selling process.</p><br/>

                <p>Prior to joining KW Commercial, Elizabeth worked as an investment analyst for a developer of multi- family apartment projects and has been party to several mid to large scale land development deals.  She oversaw numerous projects throughout Southern California and Texas with her greatest project involving hands on support from acquisition to completion, in the development of a 226-unit garden style multifamily development in Arlington, Texas.  Other skills include in depth property valuation, entitlement processing, contract management, as well as market and financial analysis.</p><br/>
            </section>
        </div>
    )
}

export default Bio