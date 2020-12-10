import React from 'react'
import { Link } from 'react-router-dom'
// import StyleVariables from '../utils/StyleVariables'
// import '../style/app.css'

export default function ThankYou() {

    return (
        <div className='App'>
            {/* <StyleVariables.H2>Thank You</StyleVariables.H2>
            <StyleVariables.H3> One of our experts will follow up with you within 24 hours.</StyleVariables.H3>
            <StyleVariables.H3> If you have an immidiate question, plese don't hesitate to contact us at 714.614.7357</StyleVariables.H3> */}
            <Link className='link' to='/'>Home</Link>

        </div>
    )
}