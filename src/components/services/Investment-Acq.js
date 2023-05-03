import React from 'react'
import Footer from '../../components/footer'
import { useStyles } from '../../styles/style'

export default function InvestmentAcquisitionAndSales() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.flexCol}>
                <h2 className={classes.title}>Investment Acquisition & Sales</h2>
                <div className={classes.content}>
                    <section className={classes.p}>
                        <p>Representing buyers of investment real estate requires local market knowledge, the ability to underwrite and conduct the financial analysis of multiple commercial product types, an understanding of the entitlement process, familiarity with local construction, refurbishment and maintenance costs, and knowledge of financing instruments and capital markets. </p><br/>
                        <p>Representing sellers of investment real estate may require many of the same services, in addition to a thorough understanding of electronic marketing media, a creative approach to packaging, expert sales and negotiating skills, and a strong broker network.</p><br/>
                        <p>In addition to investment brokerage, we offer consulting services in development, financial analysis and finance. Our Investment Services team has over 50 years experience, which covers all of the above criteria essential to providing our clients with the highest quality representation available. </p><br/>
                        <p>Nationally, KW Commercial's Investment Property Directors and Associates keep abreast of the latest trends and fluctuations in equity and debt markets, as well as local and national CAP rates and market trends. Our vast network of international, private and institutional investors, allows us to match our clients who are open to investments beyond Southern California, with the investment opportunities that will maximize their returns, factoring in their risk tolerance. </p><br/>
                        <p>Your success is our goal.</p>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}
