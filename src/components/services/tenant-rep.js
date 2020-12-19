import React from 'react'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'
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
    body: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        margin: "0 auto",
        maxWidth: '80%'
    },
    flexCol: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        textAlign: "left",
        margin: "0 auto",
        width: 'auto'
    },
    p:{
        fontSize: "1.25rem",
        padding: "1rem",
        margin: "0 auto",
    },
    listRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'space-around',
        margin: '2vh 0 2vh',
        height: 'auto',
        width: '80%'
    },
    listItem:{
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '10px',
        width: '100%'

    },
    heading:{
        fontSize: "1.5rem",
        margin: "0 2rem 4vh",
        padding: "0rem",
    },
    h5:{
        display: 'flex',
        backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        margin: '10px'
    }
}))

export default function TenantRep() {
    const classes = useStyles()

    return (
        <div className={classes.body}>
            <section className={classes.flexCol}>
                <h2 className={classes.title}>Tenant Representation:</h2>
                    <section className={classes.p}>
                        <p>Tenant Representation allows our clients to focus on operating their business,
                        while leveraging our expertise to work with developers and landlords to find
                        the best possible location for their business at the most economic cost.  Our
                        tenant representation services include a strategic planning meeting, followed
                        by a market survey, a comparison of available properties, tours of the
                        properties, preparation of offers and counter offers, and finally, the lease
                        negotiation.  While most brokers consider the job finished at lease signing,
                        we continue to maintain a relationship with our clients to assist in their
                        future needs such as expansion, renewals and other lease related issues.</p>
                        <p>While some brokers work for both Landlords and Tenants in a transaction, we
                        will fight for just one side: the Tenant.</p>
                    </section>
                    <section className={classes.p}>
                        <h3 className={classes.heading}>Benefits of Tenant Representation:</h3>
                        
                        <li>If you are not represented by your own agent, the Landlord knows this and
                            negotiates to their benefit, not yours.</li>
                        <br />
                        <li>Knowledge is power. A sophisticated Landlord negotiates with a depth of market knowledge.
                            To achieve knowledge parity, the Tenant must also gain a similar depth of knowledge.  Working with
                            a tenant representative allows the Tenant to understand and utilize this
                            knowledge and power.</li>
                        <br />
                        <li>Lease Expiration is the only reasonable time for most companies to enter the
                        market, and it only happens, on average, once every 5 years.  Whether you intend
                        to move, or not, allow yourself to be “in the market” every time your lease expires.
                        This will enable you to achieve a competitive market real estate lease even if you
                            don’t move.</li>
                        <br />
                        <li>If a Landlord knows you are not considering (even if just for negotiating purposes)
                        alternative locations, you are considered a Captive Tenant, and this status will be
                        reflected in your renewal negotiations. Tenant representation gives you the benefit
                        of in-depth knowledge of lease clauses which can be onerous to lessees.
                            (This is the time to correct any past mistakes).</li>
                        <br />
                        <li>Representation offers the opportunity to lower your effective rent through superior
                            market knowledge.</li>
                        <br />
                        <li>Knowledge regarding operating expenses, renewal/expansion and give-back options.</li>
                        <br />
                        <li>Skilled tenant representation give you an edge in obtaining necessary tenant improvements
                            or other concessions. (Knowing what to ask for and when to ask is the key!)</li>
                        <br />
                        <li>Landlords may try to intimidate the Tenant into not using their own representation by
                        promising lower rents if the broker is left out.  These savings are seldom, if ever,
                            passed onto the Tenant.</li>
                        <br />
                        <li>By using a 3rd party agent, you can be more aggressive in your efforts to negotiate a
                            market lease without compromising your relationship with your landlord.</li>

                        <section className={classes.p}>
                            <h3>We work with tenants to help…</h3>

                            <li>Negotiate a lease</li>
                            <li>Find new space</li>
                            <li>Renegotiate at renewal</li>
                            <li>Buy buildings (own vs. rent)</li>
                            <li>Plan and budget tenant improvements</li>
                            <li>Analyze and negotiate build to suit opportunities</li>
                            <li>Plan for the future (e.g. avoid costly surprises)</li>
                        </section>
                    </section>
                <section className={classes.p}>
                    <p>If you are prepared to purchase, we’ll provide a comprehensive market evaluation, negotiate
                    your acquisition price, analyze your investment financially and negotiate your contract.
                    We’ve got you covered from start to finish.</p>
                    <p>By <Link to='/contact/contact-form'>contacting us today</Link>,
                    you can avoid costly mistakes and surprises.  Remember, the Landlord pays our fees!</p>
                </section>
            </section>
            <Footer />
        </div>

    )
}
