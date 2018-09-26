import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#349ed3',
        },
        secondary: {
            main: '#54cef3',
        },
    },
    typography: {
        htmlFontSize: 14,
        display1: {
            fontFamily: 'Nunito',
        },
        display2: {
            fontFamily: 'Nunito',
        },
        display3: {
            fontFamily: 'Nunito',
        },
        display4: {
            fontFamily: 'Nunito',
        },
        body1: {
            fontFamily: 'Open Sans',
        },
        body2: {
            fontFamily: 'Open Sans',
        },
    },
})

export default theme