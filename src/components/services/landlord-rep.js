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
        fontSize: "3rem",
        margin: "0 8rem",
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

export default function LandlordRep() {
    const classes = useStyles()

    return (
        <div className={classes.body}>
            <div className={classes.flexCol}>
                <section className={classes.heading}>
                <h2 className={classes.title}>Landlord Representation</h2>
                </section>
                <section className={classes.p}>
                    <p>There are many options available to tenants in this marketplace. As vacancies have increased in all major markets, Landlords are
                    working hard to keep existing tenants. In this arena of competition between Landlords, it becomes imperative to have an aggressive marketing program tailored to the
                    specific needs of the tenants in the marketplace while also balancing the financial goals of the property owner.</p>
                    <p>Our Southern California advisory team is very selective in taking agency assignments.We recognize the value of our contribution to the assignment and work with
                    landlords that are ready to be positioned for success.</p>
                    <p>Accountability is also an important component of our marketing plan, as we keep Seacrest Building infomed of all activity through
                    regular reporting (see sample report following this section), meetings and discussions to the degree that is most desirable to the Seacrest Building team.</p>
                    <p>It has been confirmed through our experience that tenants are largely located within the "shadow" of a project. We will identify and pursue select
                    tenants whom best fit with each listing thru proactive and coordinated approach. As a more concentrated effort, we chart and develop a relationship with the
                    proper class of tenant within a 5-mile "shadow" radius of every listing. In addition to pursuing local tenants, KW commercial will place significant
                    emphasis on the marketing to the local commercial real estate broker community. By making use of this valued resource there will be a significant
                    amount of exposure to each property that has to date not been utilized.</p>
                    <h2>Market Process</h2>
                    <p>KW Commercial will work with each landlord management team to institute a plan to improve the presentation of all available suites to the marketplace.</p>
                    <p>For each listing, the Marketing Team will formulate an exclusive detailed marketing plan. Each plan will include:</p>

                    <div className={classes.flexCol}>
                        <div className={classes.listRow}>
                            <div className={classes.listItem}>
                                <h4 className={classes.listItem}>BROCHURE</h4><p className={classes.listItem}>We will create a digital and hard copy brochure/flyer to our targeted list of industries that we have identified.</p>
                            </div>
                        </div>
                        <div className={classes.listRow}>
                            <div className={classes.listItem}>
                                <h4 className={classes.listItem}>BROKER COOPERATION</h4><p className={classes.listItem}>We will solicit outside broker cooperation through mass e-mails and specific broker mailings. (We will follow up via email with a sample digital brochure)</p>
                            </div>
                        </div>
                        <div className={classes.listRow}>
                            <div className={classes.listItem}>
                                <h4 className={classes.listItem}>INTERNET/LISTING SERVICES</h4><p className={classes.listItem}>We will offer the propertythrough various multiple listings services including Co-Star and Loopnet.</p>
                            </div>
                        </div>
                        <div className={classes.listRow}>
                            <div className={classes.listItem}>
                                <h4 className={classes.listItem}>MAILINGS</h4><p className={classes.listItem}>We will send out targeted mailings to the users we have identified with our marketing flyers.</p>
                            </div>
                        </div>
                        <div className={classes.listRow}>
                            <div className={classes.listItem}>
                                <h4 className={classes.listItem}>CANVASSING</h4><p className={classes.listItem}>We will hand deliver the brochure to all local companies in the target market</p>
                            </div>
                        </div>
                    </div>
                            
                            
         
                        
                        
                        
                        
                        {/* <h5></h5> 
                        <h5>INTERNET/LISTING SERVICES</h5> We will offer the propertythrough various multiple listings services including Co-Star and Loopnet.
                        <h5>MAILINGS</h5> 
                        <h5>CANVASSING</h5> . */}



                    <p>Our creativity and knowledge of investors and tenants in the marketplace, coupled with a great rapport with the
                    brokerage community, offers a level of saturation and personalization that willenable us to discover and qualify solid prospects for each listing.</p>
                </section>
                <Footer />
            </div>
        </div>
    )
}