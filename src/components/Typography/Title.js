import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    root: {
        marginBottom: 2 * theme.spacing.unit,
        fontFamily: 'Nunito',
        color: theme.palette.secondary.main,
        [theme.breakpoints.up('xs')]: {
            marginTop: 0,
            textAlign: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 2 * theme.spacing.unit,
            textAlign: 'left',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 4 * theme.spacing.unit,
        },
    }
})

const title = ( props ) => {
    const { classes } = props
    return (
        <Typography variant="display2" className={ [classes.root, props.className].join(' ') }>
            { props.children }
        </Typography>
    )
}

export default withStyles(styles)(title)
