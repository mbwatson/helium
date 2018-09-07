import React, { Component } from 'react'
import './Menu.scss'
import Aux from '../../../hoc/Aux'
import Hamburger from '../Hamburger/Hamburger'
import { Link } from 'react-router-dom'

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
            <Aux>
                <Hamburger clickEvent={ this.toggleHandler } />
                <nav>
                    <Link to="/helium">Home</Link>
                    <Link to="/helium/about">About</Link>
                    <Link to="/helium/demos">Demos</Link>
                    <Link to="/helium/team">Team</Link>
                    <Link to="/helium/contact">Contact</Link>
                </nav>
            </Aux>
        )
    }
}

export default Menu
