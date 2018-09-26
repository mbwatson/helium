import React from 'react';
import { Typography } from '@material-ui/core'

import InnerContent from '../../hoc/InnerContent'
import Heading from '../../components/Heading/Heading'
import ContactForm from '../../components/Forms/Contact'

const contactPage = ( props ) => {
    return (
        <InnerContent>
            <Heading>Contact Helium</Heading>

            <Typography paragraph>
                Please complete the form below to send us a message, and we will be in touch shortly.
                Alternatively, feel free to send us an email at <a href="mailto:email@ddre.ss">email@ddre.ss</a>.
            </Typography>

            <ContactForm />
        </InnerContent>
    )
}

export default contactPage