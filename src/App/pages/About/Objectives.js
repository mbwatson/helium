import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Label as LabelIcon } from '@material-ui/icons'
import { Done as DoneIcon } from '@material-ui/icons'

import Title from '../../../components/Typography/Title'
import Heading from '../../../components/Typography/Heading'
import Paragraph from '../../../components/Typography/Paragraph'
import TextLink from '../../../components/Links/TextLink'

const styles = ( theme ) => ({
    list: {
    },
    icon: {
        transition: 'transform 250ms, color 250ms, opacity 250ms',
        transform: 'translateX(-4px)',
        opacity: 0.25,
        color: theme.palette.primary.main,
    },
    text: {
        transition: 'color 250ms',
        color: theme.palette.grey[700],
    },
    item: {
        '&:hover $icon': {
            transform: 'translateX(0) scale(1.25)',
            opacity: 1,
            color: theme.palette.secondary.main,
        },
        '&:hover $text': {
            color: theme.palette.grey[900],
        },
    },
})

const objectives = [
    `Enable the Data Commons to uniquely identify any and all FAIR digital objects
        to enable long-term resolution of cited persistent data and to potentially provide the capability to
        link disparate datasets at various levels of granularity.`,
    `Create a federation of APIs for operating on biomedical data in the Commons,
        spanning tasks at different levels of granularity,
        from operations on individual datasets and workflows to integrative queries
        that combine multiple datasets, sources, or workflows.`,
    `Empower users to bring their own data, tools, and infrastructure for utilization by developing
        mechanisms that fluidly integrate data, computational workflows, and other software tools and products.`,
    `Enable a maximally open Data Commons by creating a modular platform that allows for
        flexibility in workflows and data science systems to reflect the vital diversity of
        aims and approaches among research communities.`,
    `Enable sharing and access to digital objects while protecting data confidentiality and integrity,
        and to maximize data utility, while managing issues related to ownership, rights of access, data security,
        and subject privacy.`,
]

const keyCapabilities = [
    'KC1: Establish community-endorsed guidelines and metrics to govern what it means for digital objects in the Commons to be FAIR.',
    'KC2: Establish global unique identifiers (GUID) for FAIR biomedical digital objects.',
    'KC3: Provide open standard APIs and maximize their ability to be reused. ',
    'KC4: Build cloud-agnostic architectures and frameworks for data exchange and analysis workflow use.',
    'KC5: Create workspaces for users to engage in analysis of diverse datasets with established pipelines and then visualize the resListts. ',
    'KC6: Establish approaches to address concerns around research ethics, privacy, and security.',
    'KC7: Deploy robust indexing and search systems.',
    'KC8: Develop use cases around DCPPC resources to test the ability of the products to enable researchers to address scientific questions of interest.',
    'KC9: Engage in training and outreach.',
]

const objectivesPage = ( props ) => {
    const { classes } = props
    return (
        <Fragment>

            <Title>Objectives</Title>
            
            <Paragraph>
                Team Helium works together to achieve the following important objectives in the Data Commons Consortium Pilot Phase:
            </Paragraph>

            <List>
                {
                    objectives.map( (obj, index) => {
                        return (
                            <ListItem key={ index } className={ classes.item }>
                                <ListItemIcon className={ classes.icon }><LabelIcon /></ListItemIcon>
                                <ListItemText className={ classes.text }>
                                    { obj }
                                </ListItemText>
                            </ListItem>
                        )
                    })
                }
            </List>

            <Heading>Key Capabilities</Heading>
            <Paragraph>
                Activities within the <TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink> are organized around establishing nine Key Capabilities.
                Each of the defined Key Capabilities (KCs) addresses specific challenges faced by scientists working with large-scale biomedical data.
                The teams' endeavors are designed so that each KC has unique objectives and deliverables in the form of stand-alone demonstrations and products.
            </Paragraph>
            <Paragraph>
                Together, the KCs form a continuum of insights and approaches that capture the five V’s of data (Velocity, Volume, Value, Variety, and Veracity)
                and reflect FAIR data principles (Findable, Accessible, Interoperable, and Reusable).
            </Paragraph>
            <List>
                {
                    keyCapabilities.map( (kc, index) => {
                        return(
                            <ListItem key={ index } className={ classes.item }>
                                <ListItemIcon className={ classes.icon }>
                                    <DoneIcon />
                                </ListItemIcon>
                                <ListItemText className={ classes.text }>
                                    { kc }
                                </ListItemText>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Fragment>
    )
}

export default withStyles(styles)(objectivesPage)