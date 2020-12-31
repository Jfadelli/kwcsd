import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
    app:{
        width: '100vw',
        overflow: 'hidden',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
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
        font: '3rem black',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: 0,
        margin: '5px 0 2vh 0',
        textAlign: 'center',
        width: 'auto'

    },
    motto:{
        font: '2rem darkgray',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '0',
        margin: '-2vh 0 1.5vh',
        textAlign: 'center',
        width: 'auto'

    },

    // content 
    contentWrapper:{
        width:'100vw',
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
        width:'100vw',
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

    // flex
    flexRow: {
        alignSelf:'center',
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
    p:{
        fontSize: "1rem",
    },
    list:{
        fontSize: "1.15rem",
        margin: " .5rem 0",
        padding: "0 0 0 .5rem",
        '& li':{
            padding: "0 0 .5rem 1rem",
        }
    },
    heading:{
        display: 'flex',
        alignSelf: 'center',
        textAlign:'center',
        fontSize: "1.5rem",
        margin: "0 8rem",
        padding: "0rem",
    },
    subHeading:{
        font: '2rem darkgray',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: 0,
        margin: '2rem 0',
        textAlign: 'center',
    },

    // referrals page
    iFrame:{
        margin: '4vh 0 0 0',
        maxWidth: '90%',
        maxHeight: '50vh',
    },

    // nav
    vwHelper:{
        width: '100%'
    }
}));