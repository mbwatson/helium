import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

const layout = ( props ) => {
    const menuLinks = [
        { href: '/home', text: 'Home', },
        { href: '/about', text: 'About', },
        { href: '/workstream', text: 'Workstream', },
        { href: '/demos', text: 'Demos', },
        { href: '/contact', text: 'Contact', },
    ]

    return (
        <Fragment>
            <Header menuLinks={ menuLinks }/>
            <main style={{ zIndex: 1 }}>
                { props.children }
            </main>
            <Footer />
        </Fragment>
    )
}

export default layout
