import React from 'react';
import Button from '@mui/material/Button';
import { useStyles } from './style';

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