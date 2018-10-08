import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import { HomePage, DemosPage, WorkstreamPage, ContactPage } from './pages/Pages'
import AboutPage from './pages/About/About'
import PlusPage from './pages/Plus/Plus'

import './App.scss'

class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' render={ () => <Redirect to="/home" /> }/>
                    <Route path='/home' component={ HomePage } />
                    <Route path='/about' component={ AboutPage } />
                    <Route path='/workstream' component={ WorkstreamPage } />
                    <Route path='/plus' component={ PlusPage } />
                    <Route path='/demos' component={ DemosPage } />
                    <Route path='/contact' component={ ContactPage } />
                    <Route component={ HomePage } />
                </Switch>
            </Layout>
        );
    }
}

export default App;
