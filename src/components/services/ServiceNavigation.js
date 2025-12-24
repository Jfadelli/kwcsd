import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';
import { Services } from './servicesConfig';

const useStyles = makeStyles(() => ({
    navButtonLeft: {
        position: 'fixed',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(180, 30, 30, 0.7)',
        color: 'white',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(180, 30, 30, 0.9)',
            transform: 'translateY(-50%) scale(1.1)',
        },
        '@media (max-width: 768px)': {
            left: '10px',
            width: '40px',
            height: '40px',
        }
    },
    navButtonRight: {
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(180, 30, 30, 0.7)',
        color: 'white',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(180, 30, 30, 0.9)',
            transform: 'translateY(-50%) scale(1.1)',
        },
        '@media (max-width: 768px)': {
            right: '10px',
            width: '40px',
            height: '40px',
        }
    },
}));

export default function ServiceNavigation() {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const currentIndex = Services.findIndex(service => service.path === location.pathname);

    // Loop navigation: if at start, previous = last; if at end, next = first
    const prevService = currentIndex > 0
        ? Services[currentIndex - 1]
        : Services[Services.length - 1];
    const nextService = currentIndex < Services.length - 1
        ? Services[currentIndex + 1]
        : Services[0];

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <IconButton
                className={classes.navButtonLeft}
                onClick={() => handleNavigation(prevService.path)}
                aria-label={`Previous service: ${prevService.name}`}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
                className={classes.navButtonRight}
                onClick={() => handleNavigation(nextService.path)}
                aria-label={`Next service: ${nextService.name}`}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </>
    );
}
