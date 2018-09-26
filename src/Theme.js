import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#349ed3',
        },
        secondary: {
            main: '#54cef3',
        },
        error: {
            main: '#ff0000',
        }
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
        body1: {
            fontFamily: 'Open Sans',
            lineSpacing: '1.5',
        }
    },
})

export default theme