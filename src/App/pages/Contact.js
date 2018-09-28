import React from 'react';

import Container from '../../components/Layout/Container'
import Title from '../../components/Typography/Title'
import Paragraph from '../../components/Typography/Paragraph'
import ContactForm from '../../components/Forms/Contact'

const contactPage = ( props ) => {
    return (
        <Container>
            
            <Title>Contact Helium</Title>

            <Paragraph>
                Please complete the form below to send us a message, and we will be in touch shortly.
                Alternatively, feel free to send us an email at <a href="mailto:email@ddre.ss">email@ddre.ss</a>.
            </Paragraph>

            <ContactForm />

        </Container>
    )
}

export default contactPage