import React, { Fragment } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import './Layout.scss'

const layout = ( props ) => {
    return (
        <Fragment>
            <Header />
            <main>
                { props.children }
            </main>
            <Footer />
        </Fragment>
    )
}

export default layout
