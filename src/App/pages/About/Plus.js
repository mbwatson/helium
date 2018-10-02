import React, { Fragment } from 'react';

import Title from '../../../components/Typography/Title'
import Heading from '../../../components/Typography/Heading'
import Paragraph from '../../../components/Typography/Paragraph'

const plusPage = ( props ) => {
    return (
        <Fragment>
            <Title>HeliumPlus, STAGE, & the DCPPC</Title>

            <Heading>HeliumPlus</Heading>

            <Paragraph>
                Team <em>HeliumPlus</em>, a subset of Team Helium,
                is one of four teams developing a customized organization-specific platform
                for DataSTAGE (Storage, Toolspace, Access and analytics for biG data Empowerment),
                a project funded by the National Heart, Lung, and Blood Institute (NHLBI)
                of the national Institutes of Health (NIH).
            </Paragraph>

            <Paragraph>
                The "Plus" designation help to distinguish DataSTAGE teams from the broader NIH Data Commons project.
            </Paragraph>
            
            <Heading>Relationship between DataSTAGE and the DCPPC</Heading>

            <Paragraph>
                DataSTAGE is meant to be an early use case of the Data Commons,
                a platform customized for the purposes of NHLBI.
                These are two separate but related projects are meant to be mutually beneficial.
            </Paragraph>

            <Paragraph>
                There are expectations that the DCPPC and DataSTAGE will each cross-inform
                the other project of significant processes, emerging standards, and decisions.
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
                For NHLBI research investigators who need to find, access, share, store, cross-link, and compute on large-scale data sets, the NHLBI Data Resource will be a cloud-based platform that has as its foundation the NIH Data Commons that provides tools, applications, and workflows to enable these capabilities in secure workspaces.  The NHLBI Data Resource will be a rationally organized digital environment, integrated within the broader NIH Data Commons ecosystem, that will accelerate efficient biomedical research and maximize community engagement and productivity.  Ultimately, the NHLBI Data Resource will drive discovery leading to novel diagnostic tools, therapeutic options, and prevention strategies to treat heart, lung, blood, and sleep disorders. 
            </Paragraph>
        </Fragment>
    )
}

export default plusPage