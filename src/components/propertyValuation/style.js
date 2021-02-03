import { makeStyles } from '@material-ui/styles'

const colors = {
    red: '#821E1E',
    timberwolf: '#D1CFC7',
    jet: '#343434',
    lavendarBlush: '#FFEBF0',
    kwRed: 'rgb(180 30 30)'
}

export const useStyles = makeStyles((theme) => ({
    form: {
        display:'flex',
        backgroundColor:'pink',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: '2px',
        margin: '0 0 5vh 0',
        width:'100%',
        '& input':{
            color: colors.jet,
            margin: '10px 0 20px 0',
            fontSize: '1rem',
            height: '1.75rem',
            width: '350px',
            textAlign: 'left',
            border: '1px solid black',
            borderRadius: '3px',
        },
        '& label':{
        color: 'black',
        margin: '0 0 10px',
        fontWeight: '700',
        fontSize: '1rem',
        width: 'auto',
        height: 'auto',
        },
        '& select':{
            margin: '10px 0 20px 0',
            fontSize: '1rem',
            height: '1.75rem',
            width: '350px',
            textAlign: 'left',
            border: '1px solid black',
            borderRadius: '3px',
        },
    },

    h2 : {
        color: colors.kwRed,
        textShadow: '-1px 2px 0 #000',
        backgroundColor: 'none',
        margin: '10px 0 4vh 0',
        fontSize: '2em',
        borderBottom: '2px solid black',
    },

    button : { 
        margin: '3vh 0',
        width: '125px',
        height: '50px',
        fontSize: '1.5em',
        fontVariant: 'small-caps',
        border: '3px solid',
        borderRadius: '3px',
    },

    errors : {
        '& e':{         
    color: colors.red,
    backgroundColor: 'none',
    fontSize: '1.5rem',}
    },

    break : {
        backgroundColor: 'white',
        height: '1vh',
    },

    img: {
        width: 'auto',
        height: '60vh',
        border: '2px solid ' + colors.jet,
        boxShadow: '30px -10px ' + colors.faluRed,
    },
}));