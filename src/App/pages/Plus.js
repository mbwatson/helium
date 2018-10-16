import React from 'react'

import Container from '../../components/Layout/Container'
import Title from '../../components/Typography/Title'
import Paragraph from '../../components/Typography/Paragraph'
import Heading from '../../components/Typography/Heading'
import TextLink from '../../components/Links/TextLink'

const HeliumPlus = <span>Helium<strong>Plus</strong></span>

const plusPage = ( props ) => {
    return (
        <Container>
            <Title>{ HeliumPlus }, STAGE, & the DCPPC</Title>

            <Heading>{ HeliumPlus }</Heading>
            <Paragraph>
                Team { HeliumPlus }, a subset of Team Helium,
                is one of four teams developing a customized organization-specific platform
                for DataSTAGE (<strong>S</strong>torage, <strong>T</strong>oolspace, <strong>A</strong>ccess and
                analytics for bi<strong>G</strong> data <strong>E</strong>mpowerment), a project funded
                by the <TextLink new to="https://www.nhlbi.nih.gov/">National Heart, Lung, and Blood Institute</TextLink> (NHLBI)
                of the <TextLink new to="https://www.nih.gov/">National Institutes of Health</TextLink> (NIH).
            </Paragraph>

            <Paragraph>
                The "Plus" designation helps distinguish DataSTAGE teams from the broader NIH Data Commons project.
            </Paragraph>
            
            <Heading>Relationship between DataSTAGE and the DCPPC</Heading>
            <Paragraph>
                <TextLink new to="https://www.nhlbidatastage.org/">DataSTAGE</TextLink> is meant to be one (early)
                use case of the Data Commons, a platform customized for the purposes of NHLBI.
                These are two separate but related projects that are meant to be mutually beneficial.
            </Paragraph>

            <Paragraph>
                The <TextLink new to="https://nihdatacommons.us/">DCPPC</TextLink> and DataSTAGE will each cross-inform the other of significant processes, emerging standards, and decisions.
                This should permit loose coupling, and yet parallel progress, in order to reap the benefits of both of these two efforts.
                We believe that collaboration and transparency should enable a cohesive product. 
            </Paragraph>

            <Paragraph>
                DataSTAGE is focused on providing an initial implementation for the NHLBI community.
                These differences require a bridged approach to determine
                what Commons infrastructure should be deployed for DataSTAGE,
                and what additional work needs to be performed to ensure
                that the DataSTAGE functionality is robust and meets NHLBI security requirements.  
            </Paragraph>

            <Paragraph>
                For NHLBI research investigators who need to find, access, share, store, cross-link, and compute
                on large-scale data sets, the NHLBI Data Resource will be a cloud-based platform that has
                as its foundation the NIH Data Commons that provides tools, applications, and workflows
                to enable these capabilities in secure workspaces.
                The NHLBI Data Resource will be a rationally organized digital environment,
                integrated within the broader NIH Data Commons ecosystem,
                that will accelerate efficient biomedical research and maximize community engagement and productivity.
                Ultimately, the NHLBI Data Resource will drive discovery leading to
                novel diagnostic tools, therapeutic options, and prevention strategies to
                treat heart, lung, blood, and sleep disorders. 
            </Paragraph>

    
        </Container>
    )
}

export default plusPage