import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    //baseline styles
    wrapper: {
        display: 'flex',
        flexGrow: 1,
        margin: 'auto',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    flexRow: {
        alignSelf: 'center',
        display: "flex",
        justifyContent: "space-evenly",
        maxWidth: '1024px',
        minWidth: '1023px',
        width: '100%',
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "left",
        margin: "2vh 5%",
    },
    content: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyCntent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        maxWidth: '1024px',
        '& p': {
            margin: 'auto .5rem'
        }
    },

    //card styles
    agentInfo: {
        display: 'flex',
        // backgroundColor:'blue',
        position: 'relative',
        top: '5%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',



    },
    agentCard: {
        zIndex: 1,
        margin: 'auto',
        width: 250,
        height: 400,
        position: 'relative',
    },
    headshot: {
        height: 240,
    },
    propertyCard: {
        margin: 10,
        height: "45vh",
        width: "60%",
        position: 'relative',
        zIndex: '-1'
    },
    propertyPhoto: {
        height: "30.6vh",
        width: "38.25vw",
        objectFit: "cover",
        borderRadius: "6px",
        boxShadow: 'rgba(0, 0, .8, 0.74) 0px 5px 10px',

    },
    title: {
        display: 'flex',
        alignItems: ' center',
        color: theme.palette.primary.dark,
        fontSize: "2rem",
        margin: "auto"
    },
    email: {
        display: 'flex',
        textDecoration: 'none',
        fontSize: '1rem',
        color: 'rgb(180 1 1)',
        zIndex: "1000"
    },

    // font styles
    p: {
        fontSize: "1rem",
    },
    list: {
        fontSize: "1.15rem",
        margin: " .5rem 0",
        padding: "0 0 0 .5rem",
        '& li': {
            padding: "0 0 .5rem 1rem",
        }
    },
    heading: {
        display: 'flex',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: "1.5rem",
        margin: "0 8rem",
        padding: "0rem",
    },

    //decorations
    horizLine: {
        margin: '2vh auto 2vh auto',
        border: '1px solid #666666',
        maxWidth: '1024px',
        width: '100%'
    },
}))