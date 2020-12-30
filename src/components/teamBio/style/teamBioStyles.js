import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 345,
    },
    //card
    agentCard:{
        margin: theme.spacing(2),
        width: 250,
        height: 400,  
    },
    media: {
        height: 100,
    },
    title: {
        color: theme.palette.primary.dark,
        fontSize: "1.25rem"
    },
    email:{
        textDecoration:'none',
        fontSize:'1rem',
        color:'rgb(180 1 1)',

    },
    flexRow: {
        display: "flex",
        justifyContent: "center",
    },
    flexCol: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        textAlign: "left",
        margin: "0 5%",
    },
    headshot: {
        height: 240, 
    },
    propertyCard:{
        margin: 10,
        height: "45vh",
        width: "40%",
    },
    propertyPhoto:{
        height: "70vh",
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    p:{
        fontSize: "1.25rem",
        margin: "0 5%",
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