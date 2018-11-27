import { createMuiTheme } from '@material-ui/core/styles';

export const themeAbzTest = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily:['Source Sans Pro', 'sans-serif'],
        h1: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '3.125rem',
            fontWeight: 600,
            '@media (min-width: 768px) and (max-width: 1024px)': {
                fontSize: '2.625rem',
            },
            '@media (max-width: 767px)': {
                fontSize: '1.875rem',
            },
        },
        h2: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '2.625rem',
            fontWeight: 600,
            '@media (max-width: 767px)': {
                fontSize: '1.625rem',
            },
        },
        h2: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '2.625rem',
            fontWeight: 600,
            '@media (max-width: 767px)': {
                fontSize: '1.625rem',
            },
        },
        h3: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '1.625rem',
            fontWeight: 600,
            '@media (max-width: 767px)': {
                fontSize: '1.375rem',
            },
        },
        h4: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '1.375rem',
            fontWeight: 600,
        },
        h5: {
            fontSize: '1.125rem',
            fontWeight: 400,
            '@media (max-width: 767px)': {
                fontSize: '1rem',
            },
        },
        body1: {
            fontSize: '1.25rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        button: {
            fontSize: "1.25rem",
            fontWeight: 700,
            color: '#fefefe',
            textTransform: 'none',
        },
    },
    palette: {
        primary: {
            main: '#ef6c00',
            contrastText: "#fefefe",
        },
        secondary: {
            main: '#283593',
            "contrastText": "#fefefe",
        },
        background: {
            paper: "#fff",
            default: "#fff",
        },
        text: {
            primary: "#393939",
            secondary: "#010000",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
        divider: "#e1e1e1",
        action: {
            disabled: "#8d8c8c",
            disabledBackground: "#d7d7d7",
        }
    },
    'themeName': 'Abz Test',
});