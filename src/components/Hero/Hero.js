import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import heroBackground from '../../images/timelapse-stars.jpg'

const styles = ( theme ) => ({
    root: {
        backgroundImage: 'url(' + heroBackground + ')',
        backgroundSize: 'cover',
        height: '40vh',
        minHeight: '300px',
        maxHeight: '450px',
        backgroundColor: theme.palette.common.white,
        padding: 6 * theme.spacing.unit,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    heading: {
        color: theme.palette.common.white,
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
    subheading: {
        color: theme.palette.grey[400],
        maxWidth: '75%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
        }
    }
})

const hero = ( props ) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            <Typography variant="display3" className={ classes.heading }>{ props.heading }</Typography>
            <Typography variant="subheading" className={ classes.subheading }>{ props.subheading }</Typography>
        </div>
    )
}

export default withStyles(styles)(hero)
