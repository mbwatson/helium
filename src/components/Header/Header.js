import React from 'react'
import Menu from './Menu/Menu'
import Brand from './Brand/Brand'
import './Header.scss'

const header = ( props ) => {
    return (
        <header>
            <Menu />
            <div className="spacer"></div>
            <Brand />
        </header>
    )
}

export default header