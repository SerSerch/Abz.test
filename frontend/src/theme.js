import { createMuiTheme } from '@material-ui/core/styles';

export const themeAbzTest = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#ef6c00',
            dark: '#fc831f',
        },
        secondary: {
            main: '#283593',
        },
            disabled: {
                color: '#ff0000',
                backgroundColor: '#00ff00',
            },
    },
    themeName: 'Abz Test',
});