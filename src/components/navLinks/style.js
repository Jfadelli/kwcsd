import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      overflow: "visible !importants",
      zIndex: "1"
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    navButton: {
        display: 'inline',
        whiteSpace: 'nowrap',
        width: '100%',
        fontSize: "1rem",
        color: "white",
        textShadow: "-1px 2px 0 #000",
        lineHeight: '1.5rem',
        margin: '0 4% 0 4%',
    },
    link:{
        color: "black",
        textDecoration:'none'
      }
}));

  