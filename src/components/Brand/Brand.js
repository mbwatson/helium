import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    nucleus: {
        fill: theme.palette.secondary.main,
    },
    orbital: {
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
})

const brand = ( props ) => {
    const { classes } = props
    return (
        <svg width="125px" height="75px" viewBox="0 0 125 100">
            <g id="helium-atom">
                <circle className={ classes.orbital } cx="20" cy="50" r="35" strokeWidth="1"></circle>
                <circle className={ classes.electron } cx="-15" cy="50" r="6"></circle>
                <circle className={ classes.electron } cx="55" cy="50" r="6"></circle>
                <animateTransform attributeName="transform" attributeType="XML"
                    type="rotate" from="0 20 50" to="180 20 50"
                    begin="0s" dur="10s" repeatCount="indefinite"/>
            </g>
            <text x="20" y="97" className={ classes.text }>He</text>
            <circle className={ classes.nucleus } cx="20" cy="50" r="10"></circle>
        </svg>
    )
}

export default withStyles(styles)(brand)