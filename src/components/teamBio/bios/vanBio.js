import React from 'react'
import { useStyles } from '../style/teamBioStyles'

const Bio = () => {
    const classes = useStyles()
    
return (
    <div className={classes.content}>
        <section className={classes.p}>
            <p>Van Spears comes from a deep-rooted background in the construction industry. During his time as a sales operations manager, he negotiated several contracts with national developers on multi-million dollar projects. He built and maintained an effective sales and marketing team with streamlined systems to maximize efficiency. Van brings this breadth of knowledge to his commercial real estate clients to reveal hidden opportunities in commercial and multi-family properties and provide creative solutions that exceed his clients’ goals. </p><br/>
            <p>Van spends time weekly in the neighborhoods he serves, providing his clients with timely and accurate information. His hands-on approach to brokerage helps him immerse himself in the trends of the marketplace at a level that can’t be achieved from digital sources alone. He also uses his economics background to empower his clients with high-level investment analysis and market insights that helps them make critical real estate decisions when they need to most.</p><br/>
            <p>Who you do business with matters. When you work with Van, you partner with a professional, dedicated, and loyal ally to negotiate on your behalf with the systems in place to streamline buying or selling your properties, and the backing of the #1 Real Estate company in America, KW Commercial. </p><br/>
            <p>Whether your plans are to buy, sell or hold, it’s always a great time to talk with Van about your real estate goals. </p><br/>
            <p>Contact his KW Commercial office today.</p>
        </section>
    </div>
    )
}

export default Bio