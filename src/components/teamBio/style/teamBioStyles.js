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
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    flexRow: {
        alignSelf: 'center',
        display: "flex",
        justifyContent: "space-evenly",
        maxWidth: '1024px',
        width: '100%',
        '@media (max-width: 768px)': {
            width: '95%',
            maxWidth: '100%',
        }
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
        width: '100%',
        boxSizing: 'border-box',
        '& p': {
            margin: 'auto .5rem'
        },
        '@media (max-width: 768px)': {
            width: '95%',
            padding: '0 10px',
        }
    },

    //card styles
    agentInfo: {
        display: 'flex',
        position: 'relative',
        height: 160,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 5px',
        boxSizing: 'border-box',
    },
    agentCard: {
        zIndex: 1,
        margin: 'auto',
        width: 250,
        height: 400,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    headshot: {
        height: 240,
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',
        flexShrink: 0,
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
        '@media (max-width: 768px)': {
            minWidth: '280px',
            minHeight: '200px',
            maxWidth: '100%',
        }
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.dark,
        fontSize: "1.5rem",
        margin: "5px 0",
        lineHeight: 1.2,
        textAlign: 'center',
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    email: {
        display: 'flex',
        textDecoration: 'none',
        fontSize: '0.9rem',
        color: 'rgb(180 1 1)',
        zIndex: "1000",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
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

    // navigation buttons
    navButtonLeft: {
        position: 'fixed',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(180, 30, 30, 0.7)',
        color: 'white',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(180, 30, 30, 0.9)',
            transform: 'translateY(-50%) scale(1.1)',
        },
        '@media (max-width: 768px)': {
            left: '10px',
            width: '40px',
            height: '40px',
        }
    },
    navButtonRight: {
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(180, 30, 30, 0.7)',
        color: 'white',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(180, 30, 30, 0.9)',
            transform: 'translateY(-50%) scale(1.1)',
        },
        '@media (max-width: 768px)': {
            right: '10px',
            width: '40px',
            height: '40px',
        }
    },
}))