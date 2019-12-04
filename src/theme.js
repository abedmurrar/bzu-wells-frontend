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
    },
});

export default theme;
