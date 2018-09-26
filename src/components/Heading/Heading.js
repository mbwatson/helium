import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    heading: {
        marginBottom: 2 * theme.spacing.unit,
        [theme.breakpoints.up('xs')]: {
            marginTop: 0,
            textAlign: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 0,
            textAlign: 'left',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
        },
    }
})

const heading = ( props ) => {
    const { classes } = props;
    return (
            <Typography variant="display2" className={ classes.heading }>
                { props.children }
            </Typography>
    )
}

export default withStyles(styles)(heading)

