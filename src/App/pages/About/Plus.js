import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core'

import Heading from '../../../components/Heading/Heading'

const plus = ( props ) => {
    return (
        <Fragment>
            <Heading className="compact">Helium+ and DataStage</Heading>

            <Typography paragraph>
                Helium+ is a subset of the members of Team Helium who are funded to work on the DataSTAGE project. We are one of four teams funded by the National Heart, Lung, and Blood Institute (NHLBI) to develop a customized, organization-specific platform. Other DataSTAGE teams: Xenon+, Carbon+, and Calcium+. The “+” has been added to help the consortium distinguish between DataSTAGE and the broader Data Commons project.
            </Typography>

            <Typography paragraph>
                The relationship between DataSTAGE and the DCPPC is quite straightforward: DataSTAGE is meant to be an early use case of the Data Commons, a platform customized for the purposes of NHLBI.  These are two separate, but related projects, meant to be mutually beneficial. There are expectations that the DCPPC and DataSTAGE will each cross-inform the other project of significant processes, emerging standards, and decisions.  We believe that collaboration and transparency should enable a cohesive product. 
            </Typography>

            <Typography paragraph>
                DataSTAGE is focused on providing an initial implementation for the NHLBI community. These differences require a bridged approach to determine what Commons infrastructure should be deployed for DataSTAGE, and what additional work needs to be performed to ensure that the DataSTAGE functionality is robust and meets NHLBI security requirements.  
            </Typography>

            <Typography paragraph>
                For NHLBI research investigators who need to find, access, share, store, cross-link, and compute on large-scale data sets, the NHLBI Data Resource will be a cloud-based platform that has as its foundation the NIH Data Commons that provides tools, applications, and workflows to enable these capabilities in secure workspaces.  The NHLBI Data Resource will be a rationally organized digital environment, integrated within the broader NIH Data Commons ecosystem, that will accelerate efficient biomedical research and maximize community engagement and productivity.  Ultimately, the NHLBI Data Resource will drive discovery leading to novel diagnostic tools, therapeutic options, and prevention strategies to treat heart, lung, blood, and sleep disorders. 
            </Typography>
        </Fragment>
    )
}

export default plus