import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        margin: 'auto',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        '& h2':{
            fontSize:'3rem',
            fontWeight:'400',
            textAlign: 'center',
            margin: '1vh 0 2vh 0',
            padding: '0'  
        }
    },

    hero:{
        maxWidth: '1024px',
        margin: '20px auto',
        '& @media (max-width 1024px)':{ display: 'none'}
    } ,
    header:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        fontSize: '2rem',
    },

    title:{
        font: '4rem black',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: 0,
        margin: '5px 0',
        textAlign: 'center',

    },
    motto:{
        font: '2rem darkgray',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: 0,
        margin: '5px 0',
        textAlign: 'center',
    },

    // content 
    contentWrapper:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        fontSize: '2rem',
    },

    content:{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyCntent: 'center',
        alignItems:'center',
        fontSize: '1rem', 
        maxWidth: '1024px',
        '& p':{ 
            margin: 'auto .5rem'
        }
    },

    gallery:{
        alignSelf:'center',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '375px',
        maxWidth: '1024px',
    },

    link:{
        textDecoration: 'none',
        color: 'rgb(200 1 1)',
        fontWeight: '500',
        fontSize: '1.5rem',
        textAlign:'center',
        borderBottom: 'dotted black 1px',
        lineHeight: '3rem',
        width: '50%',
        '&:hover':{
            color: 'rgb(230 70 1)',
            borderBottom: 'dotted rgb(230 70 1) 1px'
        }
      },

      linkToLoopnet:{
        textDecoration: 'none',
        color: 'rgb(200 1 1)',
        fontWeight: '400',
        fontSize: '2rem', 
        margin: '0 0 2vh 0',
        textAlign:'center',
        '&:hover':{
            color: 'rgb(230 70 1)',
        }
    },

// decorations
    horizLine:{
        margin: '5vh auto 2vh auto',
        border: '1px solid #666666',
        maxWidth: '1024px',
        width: '100%'
    },
  }));