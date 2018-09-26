import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core'

import Heading from '../../../components/Heading/Heading'

const workstream =  ( props ) => {
    return (
        <Fragment>
            <Heading className="compact">Workstream</Heading>

            <Typography paragraph>
                Each Data Commons/DataSTAGE team outlined a series of milestones in their proposals that demonstrate completion of key development tasks to NIH/NHLBI.
            </Typography>

            <Typography paragraph>
                Teams are held accountable through quarterly reports submitted to the funding source. The Helium team meets weekly to give each site an opportunity to showcase their achievements and to communicate any site-specific issues or dependencies that a given institution may be facing, which may be preventing them from accomplishing a milestone. The Helium and Helium+ teams each meet biweekly to assess progress and engage in internal reporting.
            </Typography>

            <Typography paragraph>
                Helium and Helium+ are dependent upon one another. For instance, Helium+ is implementing a scientific use case for the NHLBI on the Helium infrastructure. Therefore, communication of any issues that arise during the course of the DataSTAGE project to the Helium team is crucial to ensure informed development of the Helium platform.
            </Typography>
        </Fragment>
    )
}


export default workstream