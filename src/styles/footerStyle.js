import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({    
    wrapper:{
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
            margin: 'auto .5rem',
            display: "flex",
            justifyContent: "center",
        }
    },
    logo:{
        height: '90px',
        width: '150px',
        margin: '4vh 0'
    }
}))