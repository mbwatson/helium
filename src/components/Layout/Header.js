import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Menu from '../Menus/Menu/Menu'
import Spacer from './Spacer'
import Brand from '../Brand/Brand'

const styles = theme => ({
    root: {
        backgroundColor: 'transparent',
        height: '100px',
        padding: '1rem 2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

const header = ( props ) => {
    const { classes } = props
    return (
        <header className={ classes.root }>
            <Menu links={ props.menuLinks } />
            <Spacer />
            <Link to="/home">
                <Brand />
            </Link>
        </header>
    )
}

export default withStyles(styles)(header)