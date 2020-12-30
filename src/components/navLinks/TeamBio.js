import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useStyles } from './style';
import { Link } from 'react-router-dom'

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
        <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={classes.menuList} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link className={classes.link} to = '/team-bio/antonia-bokelman'><MenuItem onClick={handleClose}>Antonia Bokelman</MenuItem></Link>
                    <Link className={classes.link} to = '/team-bio/libby-brignon'><MenuItem onClick={handleClose}>Libby Brignon</MenuItem></Link>
                    <Link className={classes.link} to = '/team-bio/mark-hughes' ><MenuItem onClick={handleClose} >Mark Hughes</MenuItem></Link>
                    <Link className={classes.link} to = '/team-bio/sue-na'><MenuItem onClick={handleClose}>Sue Na</MenuItem></Link>
                    <Link className={classes.link} to = '/team-bio/van-spears'><MenuItem onClick={handleClose}>Van Spears</MenuItem></Link>
                    <Link className={classes.link} to = '/team-bio/will-schnieder'><MenuItem onClick={handleClose}>Will Schneider</MenuItem></Link>
                    {/* <Link className={classes.link} to = '/team-bio/someone-else'><MenuItem onClick={handleClose}>Someone Else</MenuItem></Link> */}
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