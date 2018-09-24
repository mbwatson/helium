import React from 'react';

import Layout from '../../../components/Layout/Layout'
import ContentBlock from '../../../components/ContentBlock/ContentBlock'
import ContactForm from '../../../components/Forms/Contact'

const contactPage = ( props ) => {
    return (
        <Layout>
            <ContentBlock>
                <h1>Contact Us</h1>
                <p>
                    Please complete the form below to send us a message, and we will be in touch shortly.
                    Alternatively, feel free to send us an email at <a href="mailto:email@ddre.ss">email@ddre.ss</a>.
                </p>
                <ContactForm />
            </ContentBlock>
        </Layout>
    )
}

export default contactPage