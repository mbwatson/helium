import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import './InnerContent.scss'

const styles = ( theme ) => ({
    heading: {
        marginBottom: 2 * theme.spacing.unit,
        [theme.breakpoints.up('xs')]: {
            marginTop: 0,
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 3 * theme.spacing.unit,
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 4 * theme.spacing.unit,
        },
    }
})

const innerContent = ( props ) => {
    const classes = { props }
    return (
        <div className={ "content-block " + props.className + " " + classes.heading } >
            { props.children }
        </div>
    )
}

export default withStyles(styles)(innerContent)
