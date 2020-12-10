import React from 'react'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'
// import '../../style/services.css'
// import '../../style/index.css'

export default function TenantRep() {

    return (
        <div className="content">
            <section className="body">
                <h2>Tenant Representation:</h2>

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
                <section className="list">
                    <h3>Benefits of Tenant Representation:</h3>
                    <li>If you are not represented by your own agent, the Landlord knows this and
                        negotiates to their benefit, not yours.</li>
                    <li>Knowledge is power. A sophisticated Landlord negotiates with a depth of market knowledge.
                    To achieve knowledge parity, the Tenant must also gain a similar depth of knowledge.  Working with
                    a tenant representative allows the Tenant to understand and utilize this
                        knowledge and power.</li>
                    <li>Lease Expiration is the only reasonable time for most companies to enter the
                    market, and it only happens, on average, once every 5 years.  Whether you intend
                    to move, or not, allow yourself to be “in the market” every time your lease expires.
                    This will enable you to achieve a competitive market real estate lease even if you
                        don’t move.</li>
                    <li>If a Landlord knows you are not considering (even if just for negotiating purposes)
                    alternative locations, you are considered a Captive Tenant, and this status will be
                    reflected in your renewal negotiations. Tenant representation gives you the benefit
                    of in-depth knowledge of lease clauses which can be onerous to lessees.
                        (This is the time to correct any past mistakes).</li>
                    <li>Representation offers the opportunity to lower your effective rent through superior
                        market knowledge.</li>
                    <li>Knowledge regarding operating expenses, renewal/expansion and give-back options.</li>
                    <li>Skilled tenant representation give you an edge in obtaining necessary tenant improvements
                        or other concessions. (Knowing what to ask for and when to ask is the key!)</li>
                    <li>Landlords may try to intimidate the Tenant into not using their own representation by
                    promising lower rents if the broker is left out.  These savings are seldom, if ever,
                        passed onto the Tenant.</li>
                    <li>By using a 3rd party agent, you can be more aggressive in your efforts to negotiate a
                        market lease without compromising your relationship with your landlord.</li>
                </section>
                <section className="list">
                    <h3>We work with tenants to help…</h3>

                    <li>Negotiate a lease</li>
                    <li>Find new space</li>
                    <li>Renegotiate at renewal</li>
                    <li>Buy buildings (own vs. rent)</li>
                    <li>Plan and budget tenant improvements</li>
                    <li>Analyze and negotiate build to suit opportunities</li>
                    <li>Plan for the future (e.g. avoid costly surprises)</li>
                </section>
                <section className="dl">
                    <p>If you are prepared to purchase, we’ll provide a comprehensive market evaluation, negotiate
                    your acquisition price, analyze your investment financially and negotiate your contract.
                    We’ve got you covered from start to finish.</p>
                    <p>By <Link to='/contact'>contacting us today</Link>,
                    you can avoid costly mistakes and surprises.  Remember, the Landlord pays our fees!</p>
                </section>
            </section>

            <Footer />
        </div>

    )
}
