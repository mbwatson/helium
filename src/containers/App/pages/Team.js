import React from 'react';

import Layout from '../../../components/Layout/Layout'
import ContentBlock from '../../../components/ContentBlock/ContentBlock'
import Profile from '../../../components/Profile/Profile'
// import Profile from '../../../components/Bio/Bio'

const teamPage = ( props ) => {
    return (
        <Layout>
            <ContentBlock>
                <h1>Meet the Helium Team</h1>

                <Profile name="Alice Anderson" avatar="https://picsum.photos/200/200?random">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?
                </Profile>

                <Profile name="Bob Bobbins" avatar="https://picsum.photos/201/201?random">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?
                </Profile>
                
                <Profile name="Carl Conner" avatar="https://picsum.photos/202/202?random">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore. Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?
                </Profile>
            </ContentBlock>
        </Layout>
    )
}

export default teamPage