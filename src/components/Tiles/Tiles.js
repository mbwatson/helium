import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Tile from './Tile'

const styles = ( theme) => ({
    root: {
        backgroundColor: theme.palette.common.white,
        width: 'calc(100% - 16px)',
    }
})

const tiles = ( props ) => {
    const { classes } = props
    return (
        <Grid container spacing={ 0 } className={ classes.root }>
            {
                props.tiles.map( (tile, index) => {
                    return (
                        <Grid item key={ index } xs={ 12 } sm={ 12 } md={ 4 }>
                            <Tile { ...tile } />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default withStyles(styles)(tiles)
