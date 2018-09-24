import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
});

ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
        <Router basename={ '/helium' }>
            <App />
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();
