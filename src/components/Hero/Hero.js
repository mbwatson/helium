import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import heroBackground from '../../images/timelapse-stars.jpg'
import './Hero.scss'

const styles = ( theme ) => ({
    heading: {
        color: theme.palette.common.white,
    },
    subheading: {
        color: theme.palette.common.white,
    }
})

const hero = ( props ) => {
    const { classes } = props
    const style = {
        backgroundImage: 'url(' + heroBackground + ')'
    }
    return (
        <div className="hero" style={ style }>
            <Typography variant="display3" className={ classes.heading }>{ props.heading }</Typography>
            <Typography variant="subheading" className={ classes.subheading }>{ props.subheading }</Typography>
        </div>
    )
}

export default withStyles(styles)(hero)
