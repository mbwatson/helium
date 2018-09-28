import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    root: {
        marginBottom: theme.spacing.unit,
        fontFamily: 'Nunito',
        color: theme.palette.secondary.main,
    }
})

const title = ( props ) => {
    const { classes } = props
    return (
        <Typography variant="headline" className={ classes.root }>
            { props.children }
        </Typography>
    )
}

export default withStyles(styles)(title)
