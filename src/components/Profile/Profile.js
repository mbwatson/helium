import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core'

import Paragraph from '../Typography/Paragraph'
import Heading from '../Typography/Heading'

const styles = ( theme ) => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 150,
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
                <CardContent>
                    <Heading>
                        { props.name }
                    </Heading>
                    <Paragraph>
                        { props.bio }
                    </Paragraph>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default withStyles(styles)(profile)