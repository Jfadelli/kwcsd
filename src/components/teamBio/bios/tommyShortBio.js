import React from 'react'
import { useStyles } from '../style/teamBioStyles'

const Bio = () => {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <section className={classes.p}>
                <p>This agent has not submited a biography.</p>
                <p>Please check back soon for an updated biography page.</p>
            </section>
        </div>
    )
}

export default Bio