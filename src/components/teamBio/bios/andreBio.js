import React from 'react'
import { useStyles } from '../style/teamBioStyles'

const Bio = () => {
    const classes = useStyles()
    
return (
    <div className={classes.content}>
        <section className={classes.p}>
            <p>Commercial Real Estate Investors and Business Owners can benefit from working with Andre because of his uniquely developed network. Capital gains tax can be deferred in ways best suited for the seller’s situation. By using unique tax deferral methods, you will notice a higher ROI. The funds can be reinvested into real estate or specific to the individuals risk tolerance.</p><br/>
            <p>Companies of all sizes have increased their cash flow realizing savings in many areas missed by CPAs. Smaller companies affected from COVID-19 can also receive increases. Stop giving more to Uncle Sam, stop leaving money on the table and start working with me. </p><br/>
            <p>On top of the cash flow increase and tax deferral possibilities, you will get precise underwriting, current market data and clean deal analysis reports. Ask for a complementary ProForma on your property today.</p><br/>
            
        </section>
    </div>
    )
}

export default Bio