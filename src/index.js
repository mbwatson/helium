import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './colors.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import Theme from './Theme'
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
    <MuiThemeProvider theme={ Theme }>
        <Router basename={ '/helium' }>
            <App />
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();
