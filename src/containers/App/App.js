import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import DemosPage from './pages/Demos'
import TeamPage from './pages/Team'
import ContactPage from './pages/Contact'
import { Route } from 'react-router-dom'

import './App.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faFlask, faUsers } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faRocket, faFlask, faUsers, fab)

class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={ HomePage }/>
                <Route exact path='/about' component={ AboutPage }/>
                <Route exact path='/demos' component={ DemosPage }/>
                <Route exact path='/team' component={ TeamPage }/>
                <Route exact path='/contact' component={ ContactPage }/>
            </Layout>
        );
    }
}

export default App;
