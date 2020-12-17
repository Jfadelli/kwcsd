import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: "1",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  navButton: {
    fontSize: "1.5rem",
    color: "white",
    textShadow: "-1px 2px 0 #000",
    lineHeight: '1.5rem',
    padding: '0 15px 0 15px'
  },
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
    }prevOpen.current = open; }, [open]);

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
          Team Bio
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
                    <Link className={classes.link} style={{textDecoration: 'none'}}  to ='/services/mark-hughes' ><MenuItem onClick={handleClose} >Mark Hughes</MenuItem></Link>
                    <Link className={classes.link} style={{textDecoration: 'none'}}  to = '/services/libby-brignon'><MenuItem onClick={handleClose}className={classes.menuItem}>Libby Brignon</MenuItem></Link>
                    <Link className={classes.link} style={{textDecoration: 'none'}}  to = '/services/will-schnieder'><MenuItem onClick={handleClose}className={classes.menuItem}>Will Schneider</MenuItem></Link>
                    <Link className={classes.link} style={{textDecoration: 'none'}}  to = '/services/development-services'><MenuItem onClick={handleClose}className={classes.menuItem}>Someone Else</MenuItem></Link>
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