import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
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

const dcppcPage = ( props ) => {
    const { classes } = props
    return (
        <Fragment>
            <Title>HeliumPlus, STAGE, & the DCPPC</Title>

            <Heading>HeliumPlus</Heading>
            <Paragraph>
                Team <em>HeliumPlus</em>, a subset of Team Helium,
                is one of four teams developing a customized organization-specific platform for DataSTAGE
                (<strong>S</strong>torage, <strong>T</strong>oolspace, <strong>A</strong>ccess and analytics for bi<strong>G</strong> data <strong>E</strong>mpowerment),
                a project funded by the <TextLink new to="https://www.nhlbi.nih.gov/">National Heart, Lung, and Blood Institute</TextLink> (NHLBI)
                of the <TextLink new to="https://www.nih.gov/">National Institutes of Health</TextLink> (NIH).
            </Paragraph>
            <Paragraph>
                The "Plus" designation helps distinguish DataSTAGE teams from the broader NIH Data Commons project.
            </Paragraph>
            
            <Heading>Relationship between DataSTAGE and the DCPPC</Heading>
            <Paragraph>
                DataSTAGE is meant to be one (early) use case of the Data Commons,
                a platform customized for the purposes of NHLBI.
                These are two separate but related projects that are meant to be mutually beneficial.
            </Paragraph>
            <Paragraph>
                The DCPPC and DataSTAGE will each cross-inform the other of significant processes, emerging standards, and decisions.
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
    
            <Heading>Key Capabilities</Heading>
            <Paragraph>
                Activities within the <TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink> are organized around establishing nine Key Capabilities
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

export default withStyles(styles)(dcppcPage)