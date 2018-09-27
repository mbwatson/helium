import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import Heading from '../../../components/Heading/Heading'
import TextLink from '../../../components/Links/TextLink'

const overview = ( props ) => {
    return (
        <Fragment>

            <Heading>Overview</Heading>
            
            <Typography paragraph>
                Members of Team Helium are members of the <TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink>, the larger team working to build the Data Commons for the <TextLink new to="https://www.nih.gov/">NIH</TextLink>.
            </Typography>
            
            <Typography paragraph>
                Helium is a highly collaborative and multi-institutional team working with other funded teams to create a Data Commons that transforms the way we access, use, and generate data.
                This vision requires the efforts of a multidisciplinary investigative team with complementary expertise in biomedicine, cloud architecture, software engineering, analytical tools, and data harmonization.
                Each of the eight <NavLink to="dcppc" className="text-link">Key Capabilities</NavLink> (KCs) addresses specific challenges faced by scientists working with large-scale biomedical data.
                The proposed projects are designed such that each KC has unique objectives and deliverables in the form of stand-alone Minimum Viable Products (MVPs), yet together, the KCs form a continuum of insights and approaches that capture the five V’s of data and reflect FAIR (Findable, Accessible, Interoperable, and Reusable) principles.
            </Typography>
            <Typography paragraph>
                The goal is to accelerate new biomedical discoveries by providing a cloud-based platform where investigators can store, share, access and compute on digital objects (data, software, etc.) generated from biomedical research.
            </Typography>
            <Typography paragraph>
                The <TextLink new to="https://www.nhlbi.nih.gov/">National Heart, Lung, and Blood Institute</TextLink> (NHLBI), recognizing the importance of the Data Commons project but having its own distinct needs, decided to separate several of the milestones from the Data Commons and fund them as a separate project called DataSTAGE (Storage, Toolspace, Access and analytics for biG data Empowerment).
                Team Helium Plus is working on this unique project.
            </Typography>

        </Fragment>
    )
}

export default overview