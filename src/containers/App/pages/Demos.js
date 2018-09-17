import React from 'react';

import Layout from '../../../components/Layout/Layout'
import ContentBlock from '../../../components/ContentBlock/ContentBlock'
import Demo from '../../../components/Demo/Demo'
import demoContent from './demoContent'

const demosPage = ( props ) => {
    
    return (
        <Layout>
            <ContentBlock>
                <h1>Helium Demos</h1>

                {
                    demoContent.map( (demo, index) => {
                        return <Demo key={ index } title={ demo.title } body={ demo.body }/>
                    })
                }

            </ContentBlock>
        </Layout>
    )
}

export default demosPage