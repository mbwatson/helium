import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from '../Hamburger/Hamburger'
import './Menu.scss'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    toggleHandler = (event) => {
        this.setState({
            open: !this.state.open,
        })
    }

    updateMenuState() {
        if (window.innerWidth >= 968) {
            this.setState({
                open: false,
            })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateMenuState.bind(this));
    }

    menuClickHandler = ( event ) => {
        this.setState({
            open: false,
        })
    }

    render() {
        if (this.state.open) {
            document.body.classList.add('navOpen')
        } else {
            document.body.classList.remove('navOpen')
        }
        return (
            <Fragment>
                <Hamburger clickEvent={ this.toggleHandler } />
                <nav>
                    <NavLink to="/home" activeClassName="active" onClick={ this.menuClickHandler } >Home</NavLink>
                    <NavLink to="/about" activeClassName="active" onClick={ this.menuClickHandler } >About</NavLink>
                    <NavLink to="/demos" activeClassName="active" onClick={ this.menuClickHandler } >Demos</NavLink>
                    <NavLink to="/team" activeClassName="active"onClick={ this.menuClickHandler } >Team</NavLink>
                    <NavLink to="/contact" activeClassName="active" onClick={ this.menuClickHandler } >Contact</NavLink>
                </nav>
            </Fragment>
        )
    }
}

export default Menu

    
