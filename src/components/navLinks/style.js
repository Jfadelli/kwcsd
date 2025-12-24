import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      overflow: "visible !importants",
      position:'relative',
      zIndex: 'auto'
    },
    navButton: {
      display: 'flex',
      whiteSpace: 'nowrap',
      width: '100%',
      fontSize: "1.2rem",
      color: "white",
      textShadow: "-1px 2px 0 #000",
      lineHeight: '1.8rem',
      margin: '0 4% 0 4%',
      position:'relative',
      zIndex: '150',
    },
    link:{
        color: "black",
        textDecoration:'none',
    },
    menuList:{
      backgroundColor:'white',
      margin: '10px',
      position:'relative', 
      zIndex: '250',
    },
    popper:{
      position: 'relative',
      zIndex:'200'
    }
}));

  