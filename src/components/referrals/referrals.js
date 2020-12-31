import React from 'react'
import Footer from '../../components/footer'
import { useStyles } from '../../styles/style'

export default function Referrals4You() {
    const classes = useStyles()
    return (
        <div className={classes.contentWrapper}>
            <h2 className={classes.title} >Referrals 4 You</h2>
            <div className={classes.content}> 
                <section className={classes.p}> 
                    <p>Residential agents can empower their existing websites to generate even more referrals. Once the residential agents register with you, they will receive a link to their commercial real estate inquiry form which they can add to their website, email directly to their client, or fill out on behalf of their client. Upon submitting the form, the client's information is added to the commercial agent's client referral list. Both you and the residential agent will receive an email confirming the source and receipt of the referral, along with the agreed upon referral fee percentage. The residential agent can use this as confirmation that he or she is entitled to a referral fee from you. You can update the status of the referral on this website, which the residential agents can check on this site, or on their mobile app.</p>
                </section>
                    <iframe 
                    className={classes.iFrame}
                    title='Referrals4You | Create a Commercial Pipeline'
                    width="1024"
                    height="576"
                    src="https://www.youtube.com/embed/PB3Wwc0nV2Q"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    >
                    </iframe >
                <div className='iframe-link'>
                    <h2><a href='https://www.referrals4you.com'>Register at Referrals4You.com</a></h2>
                </div>
                <Footer />
            </div>
        </div>
    )
}