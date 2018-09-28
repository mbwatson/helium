import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'

const styles = ( theme ) => ({
    root: {
        borderBottom: '2px solid ' + theme.palette.secondary.main,
        transition: 'border 250ms',
        '&:hover': {
            borderBottom: '2px solid ' + theme.palette.primary.main,
        }
    }
})

const textLink = ( props ) => {
    const { classes } = props
    if (props.new) {
        return (
            <a href={ props.to }
                className={ classes.root }
                target='_blank'
                rel='noopener noreferrer'
            >
                { props.children }
            </a>
        )        
    } else {
        return (
            <NavLink to={ props.to }
                className={ classes.root }
            >
                { props.children }
            </NavLink>
        )        
       
    }
}

export default withStyles(styles)(textLink)