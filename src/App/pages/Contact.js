import React from 'react';
import { Typography } from '@material-ui/core'

import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import ContactForm from '../../components/Forms/Contact'

const contactPage = ( props ) => {
    return (
        <Container>
            
            <Heading>Contact Helium</Heading>

            <Typography paragraph>
                Please complete the form below to send us a message, and we will be in touch shortly.
                Alternatively, feel free to send us an email at <a href="mailto:email@ddre.ss">email@ddre.ss</a>.
            </Typography>

            <ContactForm />

        </Container>
    )
}

export default contactPage