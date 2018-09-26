import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = ( theme) => ({
    root: {
    },
    cardMain: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
        },
    },
    iconContainer: {
        minWidth: '60px',
        maxWidth: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('xs')]: {
            marginTop: 2 * theme.spacing.unit,
        },
    },
    icon: {
        opacity: 0.25,
        fontSize: '4rem',
    },
    text: {
        flex: 1,
    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('xs')]: {
            justifyContent: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'center',
        },
    },
    button: {
        display: 'inline-block',
    }
})

const tile = ( props ) => {
    const { classes } = props
    return (
        <Card className={ classes.root } elevation={ 0 }>
            <div className={ classes.cardMain }>
                <CardContent className={ classes.iconContainer }>
                    <FontAwesomeIcon icon={ props.icon }
                        className={ classes.icon }
                        style={{ color: props.color }}
                    />
                </CardContent>
                <CardContent className={ classes.text }>
                    <Typography gutterBottom variant="headline" component="h2">
                        { props.title }
                    </Typography>
                    <Typography component="p">
                        { props.body }
                    </Typography>
                </CardContent>
            </div>
            <CardActions className={ classes.cardActions }>
                <Button component={ Link }
                    to={ props.linkHref }
                    className={ classes.button }
                    size="small"
                    color="primary"
                >
                    { props.linkText }
                </Button>
            </CardActions>
        </Card>
    )
}
export default withStyles(styles)(tile)
