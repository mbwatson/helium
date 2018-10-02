import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    shell: {
        border: '1px solid #f00',
        transformOrigin: '20px 50px',
        animationTimingFunction: 'linear',
        'animation': 'spin 10s infinite',
    },
    nucleus: {
        fill: theme.palette.secondary.main,
    },
    path: {
        fill: 'transparent',
        stroke: theme.palette.primary.main,
    },
    electron: {
        fill: theme.palette.secondary.main,
        stroke: 'transparent',
    },
    text: {
        fontSize: '6rem',
        fontWeight: 'bold',
        fontFamily: 'Nunito',
        fill: theme.palette.primary.main,
        stroke: 'transparent',
    },
    '@keyframes spin': {
        'from': { transform: 'rotate(0deg)', },
        'to': { transform: 'rotate(179deg)', },
    },
})

const brand = ( props ) => {
    const { classes } = props
    return (
        <svg width="125px" height="75px" viewBox="0 0 125 100">
            <g className={ classes.shell } >
                <circle className={ classes.path } cx="20" cy="50" r="35" strokeWidth="1"></circle>
                <circle className={ classes.electron } cx="-15" cy="50" r="6"></circle>
                <circle className={ classes.electron } cx="55" cy="50" r="6"></circle>
            </g>
            <text x="20" y="97" className={ classes.text }>He</text>
            <circle className={ classes.nucleus } cx="20" cy="50" r="10"></circle>
        </svg>
    )
}

export default withStyles(styles)(brand)