import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Container from '../../../components/Layout/Container'
import Profile from '../../../components/Profile/Profile'
import Title from '../../../components/Typography/Title'

const styles = ( theme ) => ({
    root: {
    },
})

const teamPage = ( props ) => {
    const { classes } = props
    return (
        <Container className={ classes.root }>

            <Title>Meet Team Helium</Title>

            <Profile
                name='Alice Anderson'
                imageSrc='https://picsum.photos/200/200?random'
                bio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?'
            />

            <Profile
                name='Bob Bobbins'
                imageSrc='https://picsum.photos/201/201?random'
                bio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?'
            />
            
            <Profile
                name='Carl Conner'
                imageSrc='https://picsum.photos/202/202?random'
                bio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?'
            />

        </Container>
    )
}

export default withStyles(styles)(teamPage)