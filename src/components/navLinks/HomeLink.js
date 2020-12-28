import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NBS from './styledSheetNavButton'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      overflow: "visible !importants",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    navButton: NBS
    ,
    link:{
      color: "black"
    }
  }));

  export default function ServicesOffered() {
    const classes = useStyles();
    const anchorRef = React.useRef(null);
  
    return (
      <div className={classes.root}>
        <div>
            <a style={{textDecoration:'none'}} href='/'>
                <Button
                    ref={anchorRef}
                    className={classes.navButton}
                >
                    Home
                </Button>
            </a>
        </div>
      </div>
    );
  }