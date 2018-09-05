import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero'
import Content from '../../components/Content/Content'

import './App.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFlask, faLightbulb, faBook } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faFlask, faLightbulb, faBook, fab)


class App extends Component {
    render() {
        return (
            <Layout>
                <Hero />
                <Content />
            </Layout>
        );
    }
}

export default App;
