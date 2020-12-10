import React from 'react'
import Logo from '../components/static/images/logo.jpg'
// import '../style/footer.css'
// import '../style/index.css'

export default function Footer() {

    return (
        <div class="footer">
            <a href='/'><img src={Logo} alt='keller williams commercial' /></a>
            <p>An Equal Opportunity Company. Equal Housing Opportunity.</p>
            <p>All rights reserved.</p>
        </div>


    )
}