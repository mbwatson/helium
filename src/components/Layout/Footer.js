import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import dcppcLogo from '../../images/logos/dcppc.svg'
import githubLogo from '../../images/logos/github.svg'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 2 * theme.spacing.unit,
        alignItems: 'center',
    },
    item: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        '&.left': {
            textAlign: 'left',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            },
        },
        '&.right': {
            textAlign: 'right',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            },
        },
    },
    dcppcLogo: {},
    githubLogo: {
        width: '20px',
        height: 'auto',
        verticalAlign: 'middle',
    },
})

const footer = ( props ) => {
    const { classes } = props
    return (
        <footer>
            <Grid container spacing={ 0 } className={ classes.root }>
                <Grid item xs={ 12 } sm={ 6 } className={ classes.item + " left" }>
                    <a href="https://nihdatacommons.us/" target="_blank" rel="noopener noreferrer">
                        <img src={ dcppcLogo } alt="DCPPC Logo" className={ classes.dcppcLogo }/>
                    </a>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } className={ classes.item + " right" }>
                    <a href="https://github.com/dcppc/dcppc-phase1-demos/blob/master/demo-list.rst" target="_blank" rel="noopener noreferrer">
                        <img src={ githubLogo } alt="Github Logo" className={ classes.githubLogo }/>
                        &nbsp; Documentation
                    </a>
                </Grid>
            </Grid>
        </footer>
    )
}

export default withStyles(styles)(footer)