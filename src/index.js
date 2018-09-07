import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router basename={ '/helium' }>
        <App />
    </Router>,
    document.getElementById('root'));

registerServiceWorker();
