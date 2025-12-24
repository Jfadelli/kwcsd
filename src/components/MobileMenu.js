import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import { colors } from '../styles/colors';

import Home from './navLinks/HomeLink';
import ServicesOffered from './navLinks/ServicesOffered';
import TeamBio from './navLinks/TeamBio';
import PropertyValuation from './navLinks/Property';
import Contact from './navLinks/Contact';

const useStyles = makeStyles(() => ({
    menuButton: {
        color: 'white',
        padding: '8px',
        '& svg': {
            fontSize: '2rem',
        }
    },
    drawer: {
        '& .MuiDrawer-paper': {
            backgroundColor: colors.main,
            width: '100vw',
            padding: '60px 20px 20px',
            maxHeight: '80vh',
        }
    },
    drawerContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
        '& > *': {
            width: 'auto',
            textAlign: 'right',
            padding: '12px 0',
        }
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
        zIndex: 1300,
    }
}));

export default function MobileMenu() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <IconButton
                className={classes.menuButton}
                onClick={handleDrawerToggle}
                aria-label="open menu"
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                className={classes.drawer}
            >
                <IconButton
                    className={classes.closeButton}
                    onClick={handleDrawerToggle}
                    aria-label="close menu"
                >
                    <CloseIcon />
                </IconButton>
                <div className={classes.drawerContent}>
                    <Home />
                    <ServicesOffered />
                    <TeamBio />
                    <PropertyValuation />
                    <Contact />
                </div>
            </Drawer>
        </>
    );
}
