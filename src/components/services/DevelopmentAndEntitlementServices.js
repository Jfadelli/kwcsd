import React from 'react'
import Footer from '../footer'
import ServiceNavigation from './ServiceNavigation'
import ServiceBreadcrumb from './ServiceBreadcrumb'
import { useStyles } from '../../styles/style'

export default function DevlopmentAndEntitlementServices() {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <ServiceNavigation />
            <ServiceBreadcrumb />
            <div className={classes.flexCol}>
                <h2 className={classes.title}>Development & Entitlement Services</h2>
                <div className={classes.content}>
                    <section className={classes.p}>
                        <p>Our Team Leader, Mark Hughes, has extensive experience in the development, and the
                            entitlement of multiple product types, in multiple cities. He previously owned Hughes
                            and Associates, Inc. an entitlement consulting company in Carlsbad, CA. His clients
                            included Huntington Beach Co.,The Koll Co., Union Pacific, California Communities
                            and many others. He has entitled and/or developed single family, multifamily, condo,
                            mixed use, retail, industrial and office projects.

                        </p><br />
                        <p>Mr. Hughes is available for consulting work to perform feasibility analysis, site
                            analysis, and project management for the development of multifamily housing, office,
                            industrial, single family tract development, and retail projects. He also has extensive
                            experience in the management of multifamily property, as well as in the conversion of
                            apartments to condos.</p>
                        <h4 className={classes.subHeading}>Compensation structure is negotiable.</h4>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}
