import React from 'react'
import Menu from './Menu/Menu'
import Brand from './Brand/Brand'
import { Link } from 'react-router-dom'
import './Header.scss'

const header = ( props ) => {
    return (
        <header>
            <Menu />
            <div className="spacer"></div>
            <Link to="/home">
                <Brand />
            </Link>
        </header>
    )
}

export default header