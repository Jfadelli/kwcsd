import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: 'auto',
      height:'100vh',
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center'
    },
    paper: {
      alignItems: 'center',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'black' ,
    },
    hero:{
      maxWidth: '1024px',
      margin: '20px auto',
      '& @media (max-width 1024px)':{ display: 'none'}
    } ,
    content:{
      display: 'flex',
      flexDirection:'column',
      fontSize: '2rem',
    },
    home:{
      display: 'flex',
      flexDirection:' column',
      justifyContent: 'center',
      maxWidth: '1024px',
      margin: '0 auto',
    },
    homeContent:{
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyCntent: 'space-evenly',
      fontSize: '1rem',
    },
    horizLine:{
      margin: '5vh 0 2vh 0',
      border: '1px solid #666666',
      width: '90%',
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
    services:{
      fontSize: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 0 2vh 0',
    },
    servicesLink:{
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
      h2:{
        fontSize:'3rem',
        fontWeight:'400',
        textAlign: 'center',
        margin: '2vh 0 0 0',
        padding: '0'
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
  
  }));