import React from 'react'
import Footer from '../../components/footer'
import { makeStyles } from '@material-ui/styles'
import { useStyles } from '../../styles/style'

const customListStyles = makeStyles(theme => ({
    listRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'space-around',
        margin: '0 auto 0',
        padding: '10px',
        height: 'auto',
        width: '90%',
        borderBottom: '1px dashed rgb(210 1 1)'
    },
    listItem:{
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '10px auto',
        width: '100%',
        
    },
}))

export default function LandlordRep() {
    const customListClasses = customListStyles()
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <div className={classes.flexCol}>
                <h2 className={classes.title}>Landlord Representation</h2>
                <div className={classes.content}>
                <section className={classes.p}>
                    <p>There are many options available to tenants in this marketplace. As vacancies have increased in all major markets, Landlords are working hard to keep existing tenants. In this arena of competition between Landlords, it becomes imperative to have an aggressive marketing program tailored to the specific needs of the tenants in the marketplace while also balancing the financial goals of the property owner.</p><br/>

                    <p>Our Southern California advisory team is very selective in taking agency assignments.We recognize the value of our contribution to the assignment and work with landlords that are ready to be positioned for success.</p><br/>

                    <p>Accountability is also an important component of our marketing plan, as we keep Seacrest Building infomed of all activity through regular reporting (see sample report following this section), meetings and discussions to the degree that is most desirable to the Seacrest Building team.</p><br/>

                    <p>It has been confirmed through our experience that tenants are largely located within the "shadow" of a project. We will identify and pursue select tenants whom best fit with each listing thru proactive and coordinated approach. As a more concentrated effort, we chart and develop a relationship with the proper class of tenant within a 5-mile "shadow" radius of every listing. In addition to pursuing local tenants, KW commercial will place significant emphasis on the marketing to the local commercial real estate broker community. By making use of this valued resource there will be a significant amount of exposure to each property that has to date not been utilized.</p><br/>

                    <h2 className={classes.subHeading}>Market Process</h2>

                    <p>KW Commercial will work with each landlord management team to institute a plan to improve the presentation of all available suites to the marketplace.</p><br/>

                    <p>For each listing, the Marketing Team will formulate an exclusive detailed marketing plan. Each plan will include:</p>

                    <div className={classes.flexCol}>

                        <div className={customListClasses.listRow}>
                            <div className={customListClasses.listItem}>
                                <h4 className={customListClasses.listItem}>BROCHURE</h4>
                                <p className={customListClasses.listItem}>We will create a digital and hard copy brochure/flyer to our targeted list of industries that we have identified.</p>
                            </div>
                        </div>

                        <div className={customListClasses.listRow}>
                            <div className={customListClasses.listItem}>
                                <h4 className={customListClasses.listItem}>BROKER COOPERATION</h4>
                                <p className={customListClasses.listItem}>We will solicit outside broker cooperation through mass e-mails and specific broker mailings. (We will follow up via email with a sample digital brochure)</p>
                            </div>
                        </div>

                        <div className={customListClasses.listRow}>
                            <div className={customListClasses.listItem}>
                                <h4 className={customListClasses.listItem}>INTERNET/LISTING SERVICES</h4><p className={customListClasses.listItem}>We will offer the propertythrough various multiple listings services including Co-Star and Loopnet.</p>
                            </div>
                        </div>

                        <div className={customListClasses.listRow}>
                            <div className={customListClasses.listItem}>
                                <h4 className={customListClasses.listItem}>MAILINGS</h4><p className={customListClasses.listItem}>We will send out targeted mailings to the users we have identified with our marketing flyers.</p>
                            </div>
                        </div>

                        <div className={customListClasses.listRow}>
                            <div className={customListClasses.listItem}>
                                <h4 className={customListClasses.listItem}>CANVASSING</h4><p className={customListClasses.listItem}>We will hand deliver the brochure to all local companies in the target market</p>
                            </div>
                        </div>
                    </div>

                    <p>Our creativity and knowledge of investors and tenants in the marketplace, coupled with a great rapport with the
                    brokerage community, offers a level of saturation and personalization that willenable us to discover and qualify solid prospects for each listing.</p>
                </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}