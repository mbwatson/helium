import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'

const styles = ( theme ) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        fontSize: '1.1rem',
        transition: 'padding 250ms',
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: 10 * theme.spacing.unit,
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: 12 * theme.spacing.unit,
        },
    },
    link: {
        flex: 1,
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        height: 6 * theme.spacing.unit,
        display: 'flex',
        alignItems: 'center',
        '&:visited': {
            color: theme.palette.primary.main,
        },
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        '&.active': {
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        },
    }
})

const Submenu = ( props ) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            {
                props.links.map( (link, index) => {
                    return <NavLink key={ index } className={ classes.link } to={ link.href }>{ link.text }</NavLink>
                })
            }
        </div>
    )
}

export default withStyles(styles)(Submenu)
