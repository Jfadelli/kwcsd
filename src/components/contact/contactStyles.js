import { makeStyles } from '@mui/styles'

const colors = {
    red: '#821E1E',
    timberwolf: '#D1CFC7',
    jet: '#343434',
    lavendarBlush: '#FFEBF0',
    kwRed: 'rgb(180 30 30)'
}

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1rem',
    },

    // flex
    flexRow: {
        alignSelf: 'center',
        display: "flex",
        justifyContent: "center",
        maxWidth: '1024px',
        minWidth: '700px',
        width: '100%',
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'space-evenly',
        textAlign: "left",
        margin: "2vh 5%",
    },
    title: {
        color: colors.jet,
        fontSize: '2.5rem',
        fontWeight: '700',
        letterSpacing: '-1px',
        margin: '30px 0 20px 0',
        textAlign: 'center',
    },

    content: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.05rem',
        lineHeight: '1.7',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px',
        '& p': {
            margin: '0 auto 20px',
            color: '#555',
            maxWidth: '100%',
        }
    },
    p: {
        color: '#555',
        lineHeight: '1.7',
    },

    // form
    form: {
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px',
    },
    formContainer: {
        display: 'flex',
        gap: '50px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '20px',
        }
    },
    formImageSection: {
        flex: '0 0 auto',
        '@media (max-width: 768px)': {
            width: '100%',
        }
    },
    formFieldsSection: {
        flex: '1',
        width: '100%',
    },
    formGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        marginBottom: '20px',
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            gap: '20px',
        }
    },
    formField: {
        display: 'flex',
        flexDirection: 'column',
    },
    formFieldFullWidth: {
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '1 / -1', // Spans all columns
    },
    fieldLabel: {
        color: colors.jet,
        fontWeight: '600',
        fontSize: '0.95rem',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    },
    required: {
        color: colors.red,
        marginLeft: '4px',
        flexShrink: 0,
    },
    input: {
        color: colors.jet,
        fontSize: '0.95rem',
        height: '44px',
        padding: '10px 14px',
        width: '100%',
        border: '1.5px solid #d0d0d0',
        borderRadius: '6px',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease',
        backgroundColor: 'white',
        '&:focus': {
            outline: 'none',
            borderColor: colors.kwRed,
            boxShadow: '0 0 0 3px rgba(180, 30, 30, 0.08)',
        },
        '&::placeholder': {
            color: '#aaa',
        }
    },
    textarea: {
        color: colors.jet,
        fontSize: '0.95rem',
        minHeight: '120px',
        padding: '10px 14px',
        width: '100%',
        border: '1.5px solid #d0d0d0',
        borderRadius: '6px',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease',
        backgroundColor: 'white',
        resize: 'vertical',
        fontFamily: 'inherit',
        lineHeight: '1.5',
        '&:focus': {
            outline: 'none',
            borderColor: colors.kwRed,
            boxShadow: '0 0 0 3px rgba(180, 30, 30, 0.08)',
        },
        '&::placeholder': {
            color: '#aaa',
        }
    },
    select: {
        color: colors.jet,
        fontSize: '0.95rem',
        height: '44px',
        padding: '10px 14px',
        width: '100%',
        border: '1.5px solid #d0d0d0',
        borderRadius: '6px',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:focus': {
            outline: 'none',
            borderColor: colors.kwRed,
            boxShadow: '0 0 0 3px rgba(180, 30, 30, 0.08)',
        }
    },
    error: {
        color: colors.red,
        fontSize: '0.85rem',
        marginTop: '4px',
        display: 'block',
    },

    h2: {
        color: colors.jet,
        backgroundColor: 'none',
        margin: '40px 0 30px 0',
        fontSize: '2rem',
        fontWeight: '700',
        letterSpacing: '-0.5px',
        position: 'relative',
        paddingBottom: '15px',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '3px',
            backgroundColor: colors.kwRed,
            borderRadius: '2px',
        }
    },

    button: {
        marginTop: '30px',
        padding: '14px 0',
        fontSize: '0.95rem',
        fontWeight: '600',
        letterSpacing: '1px',
        color: 'white',
        backgroundColor: colors.kwRed,
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(180, 30, 30, 0.3)',
        textTransform: 'uppercase',
        textAlign: 'center',
        width: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: '#a01e1e',
            boxShadow: '0 4px 12px rgba(180, 30, 30, 0.4)',
            transform: 'translateY(-2px)',
        },
        '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 2px 4px rgba(180, 30, 30, 0.3)',
        }
    },

    imageWrapper: {
        display: 'inline-block',
    },
    img: {
        width: 'auto',
        maxWidth: '380px',
        height: 'auto',
        maxHeight: '500px',
        borderRadius: '12px',
        display: 'block',
        '@media (max-width: 768px)': {
            maxWidth: '100%',
            maxHeight: '300px',
        }
    },
}));
