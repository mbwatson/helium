import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Label as LabelIcon } from '@material-ui/icons'

import InnerContent from '../../../hoc/InnerContent'
import Heading from '../../../components/Heading/Heading'

const objectives = ( props ) => {
    return (
        <InnerContent className="compact">

            <Heading>Objectives</Heading>
            <List>
                <ListItem>
                    <ListItemIcon><LabelIcon /></ListItemIcon>
                    <ListItemText
                        primary="Enabling the Data Commons to uniquely identify any and all FAIR digital objects to enable long-term resolution of cited persistent data and to potentially provide the capability to link disparate datasets at various levels of granularity;"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><LabelIcon /></ListItemIcon>
                    <ListItemText
                        primary="Creating a federation of APIs for operating on biomedical data in the Commons, spanning tasks at different levels of granularity, from operations on individual datasets and workflows to integrative queries that combine multiple datasets, sources, or workflows;"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><LabelIcon /></ListItemIcon>
                    <ListItemText
                        primary="Empowering users to bring their own data, tools, and infrastructure for utilization by developing mechanisms that fluidly integrate data, computational workflows, and other software tools and products;"
                    />                    
                </ListItem>
                <ListItem>
                    <ListItemIcon><LabelIcon /></ListItemIcon>
                    <ListItemText
                        primary="Enabling a maximally open Data Commons by creating a modular platform that allows for flexibility in workflows and data science systems to reflect the vital diversity of aims and approaches among research communities; and"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><LabelIcon /></ListItemIcon>
                    <ListItemText
                        primary="Enabling sharing and access to digital objects while protecting data confidentiality and integrity, and to maximize data utility, while managing issues related to ownership, rights of access, data security, and subject privacy."
                    />
                </ListItem>
            </List>
        </InnerContent>
    )
}

export default objectives