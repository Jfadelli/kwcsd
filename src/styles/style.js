import { makeStyles } from '@mui/styles'
import { colors } from './colors'

export const useStyles = makeStyles((theme) => ({
    app: {
        overflow: 'hidden',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: colors.bg,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        flexGrow: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        '& h2': {
            fontSize: '3rem',
            fontWeight: '400',
            textAlign: 'center',
            margin: '1vh 0 2vh 0',
            padding: '0'
        }
    },

    hero: {
        maxWidth: '1024px',
        margin: '20px auto',
        '& @media (max-width 1024px)': { display: 'none' }
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '2rem',
    },

    title: {
        font: '3rem black',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: 0,
        margin: '5px 0 2vh 0',
        textAlign: 'center',
        width: 'auto'

    },
    motto: {
        font: '2rem darkgray',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '0',
        margin: '-2vh 0 1.5vh',
        textAlign: 'center',
        width: 'auto'

    },

    // content 
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1rem',
    },

    content: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyCntent: 'center',
        alignItems: 'center',
        fontSize: '1.15rem',
        lineHeight: '30px',
        width: '100vw',
        maxWidth: '1024px',
        '& p': {
            margin: 'auto .5rem'
        }
    },

    gallery: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '375px',
        maxWidth: '1024px',
    },

    link: {
        textDecoration: 'none',
        color: colors.dark,
        fontWeight: '500',
        fontSize: '1.5rem',
        textAlign: 'center',
        borderBottom: '1px dotted black',
        lineHeight: '3rem',
        marginBottom: '6px',
        width: '50%',
        '&:hover': {
            color: colors.alt,
            borderBottom: '1px dotted ' + colors.alt
        }
    },

    linkToLoopnet: {
        textDecoration: 'none',
        color: colors.main,
        fontWeight: '400',
        fontSize: '2rem',
        margin: '0 0 2vh 0',
        textAlign: 'center',
        '&:hover': {
            color: colors.alt,
        }
    },

    // decorations
    horizLine: {

        margin: '5vh auto 2vh auto',
        border: `1px solid ${colors.main}`,
        maxWidth: '1024px',
        width: '100%'
    },

    // flex
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

    // font styles
    p: {
        fontSize: "1.25rem",
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
    subHeading: {
        font: '2rem darkgray',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: 0,
        margin: '2rem 0',
        textAlign: 'center',
    },

    // referrals page
    iFrame: {
        margin: '4vh 0 0 0',
        maxWidth: '90%',
        maxHeight: '50vh',
    },

    // nav
    topSpace: {
        padding: '.25vh'
    },

    navBar: {
        // overflow:'hidden',
        display: 'flex',
        flexWrap: 'none',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.main,
        height: '3.5rem',
        margin: '1rem 0 2rem',
        zIndex: ' 500',
        width: '100vw',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 5px',

    },
    navToolbar: {
        display: 'flex',
        // backgroundColor: colors.bg
    },

    // property evaluation form
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: '2px',
        margin: '0 0 5vh 0',
        width: '100%',
        '& input': {
            color: colors.jet,
            margin: '10px 0 20px 0',
            fontSize: '1rem',
            height: '1.75rem',
            width: '350px',
            textAlign: 'left',
            border: '1px solid black',
            borderRadius: '3px',
        },
        '& label': {
            color: 'black',
            margin: '0 0 10px',
            fontWeight: '700',
            fontSize: '1rem',
            width: 'auto',
            height: 'auto',
        },
        '& select': {
            margin: '10px 0 20px 0',
            fontSize: '1rem',
            height: '1.75rem',
            width: '350px',
            textAlign: 'left',
            border: '1px solid black',
            borderRadius: '3px',
        },
    },

    h2: {
        color: colors.dark,
        // textShadow: '-1px 2px 0 #000',
        backgroundColor: 'none',
        margin: '10px 0 4vh 0',
        fontSize: '2em',
        // borderBottom: '2px solid black',
    },

    button: {
        margin: '3vh 0',
        width: '125px',
        height: '50px',
        fontSize: '1.5em',
        fontVariant: 'small-caps',
        color: colors.main,
        backgroundColor: colors.alt,
        border: '2px dotted ' + colors.main,
        borderRadius: '4px',
        '&:hover': {
            color: colors.alt,
            backgroundColor: colors.main,
            border: '2px dotted ' + colors.dark,
            cursor: 'pointer'
        }
    },

    errors: {
        '& e': {
            color: colors.main,
            backgroundColor: 'none',
            fontSize: '1.5rem',
        }
    },

    img: {
        width: 'auto',
        height: '60vh',
        border: '2px solid ' + colors.jet,
        boxShadow: '30px -10px ' + colors.main,
    },
    iFrame: {
        backgroundColor: 'blue',
        width: 'auto',
        height: '75vh'
    }

}));