import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'

import Avatar from './Avatar'
import Paragraph from '../Typography/Paragraph'
import Heading from '../Typography/Heading'
import Subheading from '../Typography/Subheading'

const styles = ( theme ) => ({
    card: {
        width: '100%',
        display: 'flex',
        marginBottom: 2 * theme.spacing.unit,
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
        '&:hover $avatar': {
            filter: 'grayscale(75%)',
        }
    },
    avatar: {
        marginTop: 2 * theme.spacing.unit,
        minWidth: '100px',
        maxWidth: '100px',
        height: 'auto',
        filter: 'grayscale(100%)',
        transition: 'filter 250ms'
    },
    details: {
        flex: 3,
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
    },
    name: {
        color: theme.palette.common.black,
    },
    title: {
        color: theme.palette.grey[700],
    },
    organization: {
        color: theme.palette.grey[500],
    },
    bio: {
        marginTop: theme.spacing.unit,
    },
})

const profile = ( props ) => {
    const { classes } = props
    return (
        <Card className={ classes.card } elevation={ 0 }>
            <Avatar src={ props.imageSrc } className={ classes.avatar } size="100px"/>
            <CardContent className={ classes.details }>
                <Heading className={ classes.name }>{ props.name }</Heading>
                <Subheading className={ classes.title }>{ props.title }</Subheading>
                <Subheading className={ classes.organization }>{ props.organization }</Subheading>
                <Paragraph className={ classes.bio }>
                    { props.bio }
                </Paragraph>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(profile)