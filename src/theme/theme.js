import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1a1a1a"
        },
        secondary: {
            main: "#555555"
        },
        accent: {
            main: "#c89666"
        },
        background: {
            default: "#ffffff"
        },
        text: {
            primary: "#1a1a1a",
            secondary: "#555555",
            white: "#ffffff"
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h1: {fontWeight : 600},
        h3: {fontWeight : 600},
        h4: {fontWeight : 600},
        body1: {fontSize: "1rem"}
    }
});

export default theme;