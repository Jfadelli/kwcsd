import { makeStyles } from '@material-ui/styles'

const colors = {
    red: '#821E1E',
    timberwolf: '#D1CFC7',
    jet: '#343434',
    lavendarBlush: '#FFEBF0',
    kwRed: 'rgb(180 30 30)'
}

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1rem',
        // backgroundColor: 'pink'
    },

    // flex
    flexRow: {
        alignSelf: 'center',
        display: "flex",
        justifyContent: "center",
        maxWidth: '1024px',
        minWidth: '700px',
        width: '100%',
    },
    flexCol: {
        // backgroundColor: 'blue',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'space-evenly',
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
        fontSize: '1.15rem',
        lineHeight: '30px',
        width: '100vw',
        maxWidth: '1024px',
        '& p': {
            margin: 'auto .5rem'
        }
    },
    formSection: {
        display: "flex",
        // backgroundColor: 'pink',
        alignItems: 'center',
        // alignSelf: 'center',
        // justifyContent: "center",
        // maxWidth: '1024px',
        // minWidth: '600px',
        // width: '100%',
    },

    // form
    form: {
        display: 'flex',
        // backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'space-between',
        borderRadius: '2px',
        margin: '0 0 2vh 0',
        width: '100%',
        '& input': {
            color: colors.jet,
            margin: '10px 0 20px 0',
            fontSize: '1rem',
            height: '1.75rem',
            width: '300px',
            textAlign: 'left',
            border: '1px solid black',
            borderRadius: '3px',
        },
        '& label': {
            flexDirection: 'row',
            color: 'black',
            margin: '0 0 10px',
            fontWeight: '700',
            fontSize: '1rem',
            width: 'auto',
            height: 'auto',
            justifyContent: 'space-between',
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
        color: colors.kwRed,
        textShadow: '-1px 2px 0 #000',
        backgroundColor: 'none',
        margin: '10px 0 4vh 0',
        fontSize: '2em',
        borderBottom: '2px solid black',
    },

    button: {
        margin: '3vh 0',
        width: '125px',
        height: '50px',
        fontSize: '1.5em',
        fontWeight: '500',
        fontVariant: 'small-caps',
        border: '3px solid',
        borderRadius: '3px',
        backgroundColor: 'rgb(180 40 40)'
    },

    errors: {
        '& e': {
            color: colors.red,
            backgroundColor: 'none',
            fontSize: '1.5rem',
        }
    },

    break: {
        backgroundColor: 'white',
        height: '1vh',
    },

    img: {
        width: 'auto',
        height: '60vh',
        border: '2px solid ' + colors.jet,
        boxShadow: '15px -20px ' + colors.kwRed,
    },
}));