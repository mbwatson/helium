import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import DemosPage from './pages/Demos'
import TeamPage from './pages/Team'
import ContactPage from './pages/Contact'

import './App.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faFlask, faUsers } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faRocket, faFlask, faUsers, fab)

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={ () => <Redirect to="/home" /> }/>
                <Route path='/home' component={ HomePage }/>
                <Route path='/about' component={ AboutPage }/>
                <Route path='/demos' component={ DemosPage }/>
                <Route path='/team' component={ TeamPage }/>
                <Route path='/contact' component={ ContactPage }/>
                <Route component={ HomePage } />
            </Switch>
        );
    }
}

export default App;
