import React from 'react'
import Footer from '../../components/footer'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 345,
    },
    title: {
        color: 'black',
        fontSize: '2rem',
        textAlign: 'center',
    },
    flexCol: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        textAlign: "left",
        margin: "0 5%",
    },
    p:{
        fontSize: "1.25rem",
        padding: "1rem",
        margin: "0 8rem",
    },
    list:{

        fontSize: "2rem",
        margin: " 0 8rem",
        padding: "0 0 0 4rem",

    },
    heading:{
        fontSize: "3rem",
        margin: "0 8rem",
        padding: "0rem",
    }
}))

export default function InvestmentAcquisitionAndSales() {
    const classes = useStyles()
    return (
        <div className={classes.flexCol}>
            <div className={classes.flexCol}>
                <section className={classes.heading}>
                    <h2 className={classes.title}>Investment Acquisition & Sales</h2>
                </section>
                <section className={classes.p}>
                    <p>Representing buyers of investment real estate requires local
                    market knowledge, the ability to underwrite and conduct the financial analysis
                    of multiple commercial product types, an understanding of the entitlement
                    process, familiarity with local construction, refurbishment and maintenance
                    costs, and nowledge of financing instruments and capital markets.
                    </p>
                    <p>Representing sellers of investment real estate may require
                    many of the same services, in addition to a thorough understanding of
                    electronic marketing media, a creative approach to packaging, expert sales and
                    negotiating skills, and a strong broker network.
                    </p>
                    <p>In addition to investment brokerage, we offer consulting
                    services in development, financial analysis and finance. Our Investment Services team has over 35
                    years experience, which covers all of the above criteria essential to providing
                    our clients with the highest quality representation available.
                    </p>
                    <p>Nationally, KW Commercial's Investment Property Directors
                    and Associates keep abreast of the latest trends and fluctuations in equity and
                    debt markets, as well as local and national CAP rates and market trends. Our
                    vast network of international, private and institutional investors, allows us
                    to match our clients who are open to investments beyond Southern California, with
                    the investment opportunity that will maximize their returns, factoring in their
                    risk tolerance.
                    </p>
                    <p>Your success is our goal.</p>
                </section>
                <Footer />
            </div>
        </div>
    )
}
