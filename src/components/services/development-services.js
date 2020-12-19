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
    flexCol: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        textAlign: "left",
        margin: "0 5%",
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
export default function DevelopmentServices() {
    const classes = useStyles()

    return (
        <div className={classes.flexCol}>
            <div className={classes.flexCol}>
                <section className={classes.heading}>
                <h2 className={classes.title}>Entitlement Services</h2>
            </section>
            <section className={classes.p}>
                <p>Our Team Leader, Mark Hughes, has extensive experience in the development, and the entitlement of multiple product types, in multiple cities. He previously owned Hughes and Associates, Inc. an entitlement consulting company in Carlsbad, CA. His clients included Huntington Beach Co.,The Koll Co., Union Pacific, California Communities and many others. He has entitled and/or developed single family, multifamily, condo, mixed use, industrial and office projects.</p>
                <p>He is available for consulting work to perform feasibility analysis, site analysis, and project management for the development of multifamily housing, office, industrial, single family tract development, and retail projects. He also has extensive experience in the management of multifamily property, as well as in the conversion of apartments to condos.</p>
                <h4>Compensation structure is negotiable.</h4>
            </section>
            <Footer />
            </div>
        </div>
    )
}
