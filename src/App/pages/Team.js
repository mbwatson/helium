import React from 'react';
import { Typography } from '@material-ui/core'

import Heading from '../../components/Heading/Heading'
import InnerContent from '../../hoc/InnerContent'
import Profile from '../../components/Profile/Profile'

const teamPage = ( props ) => {
    return (
        <InnerContent>
            <Heading>Meet the Helium Team</Heading>

            <Profile name="Alice Anderson" avatar="https://picsum.photos/200/200?random">
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?
                </Typography>
            </Profile>

            <Profile name="Bob Bobbins" avatar="https://picsum.photos/201/201?random">
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?
                </Typography>
            </Profile>
            
            <Profile name="Carl Conner" avatar="https://picsum.photos/202/202?random">
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?
                </Typography>
            </Profile>
        </InnerContent>
    )
}

export default teamPage