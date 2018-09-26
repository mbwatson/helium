import React, { Fragment } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Done as DoneIcon } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'

import Heading from '../../../components/Heading/Heading'
import ExternalLink from '../../../components/Links/ExternalLink'

const dcppc = ( props ) => {
    return (
        <Fragment>
    
            <Heading>Data Commons Pilot Phase Consortium (DCPPC)</Heading>

            <Typography paragraph>
                The <ExternalLink to="https://nihdatacommons.us/">NIH Data Commons</ExternalLink> will accelerate biomedical discovery by providing a cloud-based platform
                where investigators can store, share, access, and compute on digital objects including data,
                software, workflows, and more. The initial implementation is a Pilot Phase in which targeted
                high-value data sources will serve as test cases for the infrastructure to be developed.
                The test datasets will come from the Genotype-Tissue Expression (GTEx) and the Trans-Omics
                for Precision Medicine (TOPMed) efforts, as well as several Model Organism Databases (MODs).
                ParticListar attention will be paid to ensuring that the resources produced by the NIH Data Commons Pilot
                will adhere to FAIR principles. This work is being carried out by the Data Commons Pilot Phase Consortium (DCPPC).
            </Typography>

            <Typography variant="headline">
                Activities within the DCPPC are organized around establishing nine Key Capabilities
            </Typography>

            <List>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC1: Establish community-endorsed guidelines and metrics to govern what it means for digital objects in the Commons to be FAIR."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC2: Establish global unique identifiers (GUID) for FAIR biomedical digital objects."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC3: Provide open standard APIs and maximize their ability to be reused. "
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC4: Build cloud-agnostic architectures and frameworks for data exchange and analysis workflow use."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC5: Create workspaces for users to engage in analysis of diverse datasets with established pipelines and then visualize the resListts. "
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC6: Establish approaches to address concerns around research ethics, privacy, and security."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC7: Deploy robust indexing and search systems."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC8: Develop use cases around DCPPC resources to test the ability of the products to enable researchers to address scientific questions of interest."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText
                        primary="KC9: Engage in training and outreach."
                    />
                </ListItem>
            </List>
        </Fragment>
    )
}

export default dcppc