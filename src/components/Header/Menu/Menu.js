import React, { Component } from 'react'
import './Menu.scss'
import Aux from '../../../hoc/Aux'
import Hamburger from '../Hamburger/Hamburger'

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
                    <a href="#">About</a>
                    <a href="#">Overview</a>
                    <a href="#">Demos</a>
                    <a href="#">Team</a>
                    <a href="#">Contact</a>
                </nav>
            </Aux>
        )
    }
}

export default Menu
