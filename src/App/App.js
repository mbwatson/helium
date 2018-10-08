import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import { HomePage, WorkstreamPage, ContactPage } from './pages/Pages'
import AboutPage from './pages/About/About'

import './App.scss'

class App extends Component {
    
    menuLinks = [
        { href: '/home',        text: 'Home', },
        { href: '/about',       text: 'About', },
        { href: '/workstream',  text: 'Workstream', },
        { href: '/contact',     text: 'Contact', },
    ]

    render() {
        return (
            <Layout menuLinks={ this.menuLinks }>
                <Switch>
                    <Route exact path='/' render={ () => <Redirect to="/home" /> }/>
                    <Route path='/home' component={ HomePage } />
                    <Route path='/about' component={ AboutPage } />
                    <Route path='/workstream' component={ WorkstreamPage } />
                    <Route path='/contact' component={ ContactPage } />
                    <Route component={ HomePage } />
                </Switch>
            </Layout>
        );
    }
}

export default App;
