import React from 'react'
import { useStyles } from '../style/teamBioStyles'

const Bio = () => {
    const classes = useStyles()
    
return (
    <div>
        <section className={classes.p}>
            <p>Mr. Hughes has over 30 years of experience covering all aspects of commercial real estate brokerage, development, marketing, finance, and  management. He has made extensive development and civic contributions to San Diego County.</p>
            <p>Mr. Hughes is currently the Managing Director of Commercial Services at KW Commercial, Carmel Valley / Del Mar.&nbsp; He previously was a Senior Advisor at Sperry Van Ness, specializing in land, multifamily and investment property.</p>
            <p>Mr. Hughes has extensive experience in investment analysis and the marketing of commercial real estate, utilizing communication skills built upon his education in Journalism and Communication and his military service as a USAF Public Relations Officer. As the Director of Marketing for Century Southwest Corporation, Mr. Hughes built the sales organization, and sold over $35 million of Stock Cooperative units. He also created and implemented the marketing plan for the Carlsbad Airport Centre, and was Vice President at Hubbert Advertising, a Real Estate Advertising and Public Relations Firm.</p>
            <p>Mr. Hughes experience also includes development and asset management.&nbsp; As a developer, Mr. Hughes focused on land acquisition, investment properties, due diligence&nbsp;and the entitlement processing of major real estate projects. His major projects have included:</p>
        </section>
        <section className={classes.list}>
            <li>The 330 acre Carlsbad Airport Centre, an upscale R&D development</li>
            <li>Land acquisition, planning and entitlement of a $120 million mixed use project in Oceanside, California</li>
            <li>The development and management of over 5000 multifamily units in California, Arizona and Virginia</li>
            <li>The development and expansion of over 350,000 sf of neighborhood shopping centers</li>
        </section>
        <section className={classes.p}>
            <p>Complementing his brokerage, development and asset management skills, Mr. Hughes has a depth of financial experience; negotiating and structuring both debt and equity positions. As a Director of Allied Capital, and Center Financial, Mr. Hughes negotiated financing for major real estate developments including shopping centers, apartment complexes, hotels and subdivisions.</p>
            <p>Mr. Hughes maintains a broad network of industry contacts, including acting as a Senior Consultant for the Kosmont Company, (<a href="http://www.kosmont.com/"><font color="#0066cc">www.Kosmont.com</font></a>) providing clients with ;feasibility, entitlement, land planning and project management consulting services.</p>
        </section>
        <section className={classes.heading}>
            <h3>Mr. Hughes' civic contributions include:</h3>
        </section>
        <section className={classes.list}>
            <li>Founder, California State University, San Marcos</li>
            <li>Founding Member, Carlsbad Economic Enhancement Committee</li>
            <li> Former Director, Oceanside Economic Development Committee</li>
            <li> Former Chairman, Oceanside Redevelopment Advisory Committee</li>
            <li> Past President, Oceanside Merchants Association</li>
        </section>
        <section className={classes.p}>
            <p>Mr. Hughes' extensive experience is more valuable than ever in today's dynamic real estate market.</p>
            <p>Contact his KW Commercial office today.</p>
        </section>
    </div>
    )
}

export default Bio