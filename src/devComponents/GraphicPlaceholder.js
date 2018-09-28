import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = ( theme ) => ({
    default: {
        border: '1px solid #eee',
        height: '200px',
        width: '100%',
        borderRadius: '5px',
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 2 * theme.spacing.unit,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.grey[400],
    },
})

const graphicPlaceholder = ( props ) => {
    const {
        classes,
        height,
        width,
    } = props

    return (
        <div className={ classes.default } style={{
            height: height,
            width: width,
        }}>
            { props.text }
        </div>
    )
}

export default withStyles(styles)(graphicPlaceholder)
