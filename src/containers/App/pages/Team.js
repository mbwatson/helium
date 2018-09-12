import React from 'react';

import Layout from '../../../components/Layout/Layout'
import ContentBlock from '../../../components/ContentBlock/ContentBlock'
import Avatar from '../../../components/Avatar/Avatar'
import Profile from '../../../components/Profile/Profile'

const teamPage = ( props ) => {
    return (
        <Layout>
            <ContentBlock>
                <h1>Meet the Helium Team</h1>
                <Profile name="Alice Anderson">
                    <Avatar src="https://picsum.photos/200/200?random" />
                </Profile>
                <Profile name="Bob Bobbins">
                    <Avatar src="https://picsum.photos/200/200?random" />
                </Profile>
                <Profile name="carl Conner">
                    <Avatar src="https://picsum.photos/200/200?random" />
                </Profile>
            </ContentBlock>
        </Layout>
    )
}

export default teamPage