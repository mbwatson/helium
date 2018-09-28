import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = ( theme ) => ({
    root: {
        display: 'inline-block',
        // clipPath: 'circle(50% at 50% 50%)',
        borderRadius: '10px',
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
        <div className={ [classes.root, props.className].join(' ') }
            style={{
                maxHeight: props.size, maxWidth: props.size,
                minHeight: props.size, minWidth: props.size,
                backgroundImage: 'url(' + props.src + ')',
            }}
        >
        </div>
    )
}

export default withStyles(styles)(avatar)
