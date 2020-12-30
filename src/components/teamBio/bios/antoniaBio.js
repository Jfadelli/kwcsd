import React from 'react'
import { useStyles } from '../style/teamBioStyles'

const Bio = () => {
    const classes = useStyles()
    
return (
    <div className={classes.content}>
        <section className={classes.p}>
            <p>Antonia Bokelman has more than 14 years of experience as a real estate professional representing buyers and sellers in the acquisition and disposition of income producing properties and value-add investments. She earns her client’s trust and loyalty through integrity, diplomacy, and results.  She is fluent in Spanish and English.</p><br/>
            <p>What sets Antonia apart is her vision and ability to maximize value for her clients. She adds value through the entire ownership cycle from investment strategy, to property positioning, to pricing and negotiation on purchase or sale. In doing so, Antonia avails her clients to an extensive network of buyers, sellers, as well as trades and service providers.</p><br/>
            <p>Antonia has an unwavering commitment to understanding her client’s needs and a dedication to building long-lasting relationships. She is a great communicator and a knowledgeable resource.  In her advocacy for her clients, Antonia is assertive, effective, and a strong negotiator. At the same time, she is compassionate, friendly, and has a great sense of humor, making otherwise stressful situations both enjoyable and rewarding.</p> <br/>
            <p>Born and raised in Barcelona (Spain), Antonia moved to San Diego 19 years ago. She has an intimate understanding of what makes each San Diego city and neighborhood so special and unique. Whether you are a high-profile corporate client, or just looking for your first real estate investment, working with Antonia Bokelman will assure you timely service and unsurpassed success. </p><br/>
        </section>
    </div>
    )
}

export default Bio