import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

const styles = ( theme ) => ({
    root: { }
})

const paragraph = ( props ) => {
    const { classes } = props
    return (
        <Typography paragraph className={ [classes.root, props.className].join(' ') }>
            { props.children }
        </Typography>
    )
}

export default withStyles(styles)(paragraph)
