import React from 'react'
import { withStyles } from '@material-ui/core/styles'

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
    const target = props.new ? '_blank' : null
    const rel = props.new ? 'noopener noreferrer' : null

    return (
        <a href={ props.to }
            className={ classes.root }
            target={ target }
            rel={ rel }
        >
            { props.children }
        </a>
    )
}

export default withStyles(styles)(textLink)