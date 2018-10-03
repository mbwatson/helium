import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = ( theme ) => ({
    root: {
        flex: 1,
        backgroundColor: theme.palette.common.white,
        padding: 2 * theme.spacing.unit,
        transition: 'padding 250ms',
        '@media (min-width: 600px)': {
            padding: 4 * theme.spacing.unit,
        },
    }
})

const container = ( props ) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            { props.children }
        </div>
    )
}

export default withStyles(styles)(container)