import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Services } from './servicesConfig';
import { colors } from '../../styles/colors';

const useStyles = makeStyles(() => ({
    breadcrumbContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1024px',
        margin: '0 auto 2rem auto',
        padding: '0 20px',
        flexWrap: 'wrap',
        gap: '10px',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '8px',
            margin: '0 auto 1rem auto',
        }
    },
    breadcrumbLink: {
        textDecoration: 'none',
        color: colors.dark,
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'color 0.2s ease',
        '&:hover': {
            color: colors.main,
        },
        '@media (max-width: 768px)': {
            fontSize: '0.9rem',
        }
    },
    breadcrumbCurrent: {
        color: colors.red,
        fontSize: '1rem',
        fontWeight: '600',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        '@media (max-width: 768px)': {
            fontSize: '0.9rem',
        }
    }
}));

export default function ServiceBreadcrumb() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <nav className={classes.breadcrumbContainer} aria-label="Service navigation">
            {Services.map((service) => {
                const isActive = location.pathname === service.path;

                if (isActive) {
                    return (
                        <span
                            key={service.path}
                            className={classes.breadcrumbCurrent}
                            aria-current="page"
                        >
                            {service.name}
                        </span>
                    );
                }

                return (
                    <Link
                        key={service.path}
                        to={service.path}
                        className={classes.breadcrumbLink}
                    >
                        {service.name}
                    </Link>
                );
            })}
        </nav>
    );
}
