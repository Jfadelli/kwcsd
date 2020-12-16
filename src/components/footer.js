import React from 'react'
import Logo from '../static/images/logo.jpg'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 345,
    },

    footer: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        textAlign: "left",
        margin: "0 5%",
    },

    el:{
        display: "flex",
        justifyContent: "center",
        margin: 0,
        padding: ".5rem",
    }
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <div className={classes.footer}>
            <a className={classes.el} href='/'><img src={Logo} alt='keller williams commercial' /></a>
            <p className={classes.el}>An Equal Opportunity Company. Equal Housing Opportunity.</p>
            <p className={classes.el}>All rights reserved.</p>
        </div>
    )
}