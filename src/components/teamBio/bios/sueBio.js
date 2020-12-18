import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 345,
    },
    p:{
        fontSize: "1.25rem",
        padding: "1rem",
        margin: "0 8rem",
    },
    list:{
        fontSize: "2rem",
        margin: " 0 8rem",
        padding: "0 0 0 4rem",
    },
    heading:{
        fontSize: "3rem",
        margin: "0 8rem",
        padding: "0rem",
    }
}))

const Bio = () => {
    const classes = useStyles()
    
return (
    <div>
        <section className={classes.p}>
            <p>Sue has always been in the world of sales and the entrepreneur, starting her first sales business at age 14. She has combined 37 years of sales experience and 20 years of real estate experience. Sue is a resident of San Diego for over 30 years and has a great knowledge of the overall San Diego market. </p>
                <li>Strong Negotiation Skills</li>
                <li>Great Sense of Urgency </li>
                <li>Accomplish tasks with quality and effectiveness </li>
                <li>Sought out by others for help and expertise </li>
                <li>Gift clients with clarity, excellence, and movement </li>
                <li>Fluent in Korean and English</li>
      </section>
    </div>
    )
}

export default Bio