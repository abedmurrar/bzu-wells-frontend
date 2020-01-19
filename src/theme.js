import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#167000',
            dark: '#010203',
            light: '#ffffff',
        },
        secondary: {
            main: '#0d4000',
            dark: '#e8d96e',
            light: '#f0e8c4',
        },
        success: {
            main: '#00C851',
            dark: '#007E33',
            light: '#d4edda',
        },
        error: {
            main: '#ff4444',
            dark: '#CC0000',
            light: '#f8d7da',
        },
        info: {
            main: '#33b5e5',
            dark: '#0099CC',
            light: '#cce5ff',
        },
        warning: {
            main: '#ffbb33',
            dark: '#ff8800',
            light: '#fff3cd',
        },
    },
});

export default theme;
