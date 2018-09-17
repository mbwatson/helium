import React, { Component, Fragment } from 'react'
import './Menu.scss'
import Hamburger from '../Hamburger/Hamburger'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    toggleHandler = (event) => {
        document.body.classList.toggle('navOpen')
    }

    render() {
        return (
            <Fragment>
                <Hamburger clickEvent={ this.toggleHandler } />
                <nav>
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/demos" activeClassName="active">Demos</NavLink>
                    <NavLink to="/team" activeClassName="active">Team</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </nav>
            </Fragment>
        )
    }
}

export default Menu
