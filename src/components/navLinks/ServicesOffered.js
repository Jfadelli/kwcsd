import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import NBS from './styledSheetNavButton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: "1"

  },
  paper: {
    marginRight: theme.spacing(2),
    backgroundColor:"orange"
  },
  navButton: NBS
  ,
  link:{
    color: "black"
  }
}));

export default function ServicesOffered() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.navButton}
        >
          Services Offered
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link className={classes.link} style={{textDecoration: 'none'}} to ='/services/tenant-rep' ><MenuItem onClick={handleClose} >Tenant Representation</MenuItem></Link>
                    <Link className={classes.link} style={{textDecoration: 'none'}} to = '/services/landlord-rep'><MenuItem onClick={handleClose}>Landlord Representation</MenuItem></Link>
                    <Link className={classes.link} style={{textDecoration: 'none'}} to = '/services/Investment-Acq'><MenuItem onClick={handleClose}>Investment Acquisition</MenuItem></Link>
                    <Link className={classes.link} style={{textDecoration: 'none'}} to = '/services/development-services'><MenuItem onClick={handleClose}>Development Services</MenuItem></Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        
      </div>
    </div>
  );
}