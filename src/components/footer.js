import React from 'react'
import Logo from '../static/images/logo.jpg'
import { useStyles } from '../styles/footerStyle'

export default function Footer() {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <a href='/'><img className={classes.logo} src={Logo} alt='keller williams commercial' /></a>
                <p className={classes.el}>An Equal Opportunity Company. Equal Housing Opportunity.</p>
                <p className={classes.el}>All rights reserved.</p>
            </div>
        </div>
    )
}
