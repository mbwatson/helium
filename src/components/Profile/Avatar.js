import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = ( theme ) => ({
    root: {
        display: 'inline-block',
        borderRadius: '50%',
        clipPath: 'circle(50%)',
    },
    image: {
        display: 'block',
        opacity: '0.75',
        transition: 'opacity 250ms, transform 500ms ease-out',
    },
})

const avatar = ( props ) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            <img src={ props.src } alt="Avatar" className={ classes.image } />
        </div>
    )
}

export default withStyles(styles)(avatar)
