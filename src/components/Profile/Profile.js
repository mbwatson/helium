import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core'

import Paragraph from '../Typography/Paragraph'

const styles = ( theme ) => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
})

const profile = ( props ) => {
    const { classes } = props
    return (
        <Card className={ classes.card }>
            <CardActionArea>
                <CardMedia
                    className={ classes.media }
                    image={ props.imageSrc }
                    title={ props.name }
                />
            </CardActionArea>
            <CardContent>
                <Paragraph>
                    { props.bio }
                </Paragraph>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(profile)


    // root: {
    //     border: '1px solid #eee',
    //     boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
    //     padding: '1rem',
    //     marginBottom: '2rem',
    //     textAlign: 'center',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     '&:hover $image': {
    //         opacity: 1,
    //         transform: 'scale(1.1)',
    //         marginRight: '1rem',
    //     },
    //     imageContainer: {
    //         display: 'inline-block',
    //         borderRadius: '50%',
    //         clipPath: 'circle(50%)',
    //     },
    //     image: {
    //         display: 'block',
    //         opacity: '0.75',
    //         transition: 'opacity 250ms, transform 500ms ease-out',
    //     },
    //     details: {
    //         flex: 1,
    //     },
    //     name: {
    //         textAlign: 'left',
    //         padding: '0 1rem',
    //     },
    //     bio: {
    //         textAlign: 'left',
    //         padding: '0 1rem',
    //     },
    // }