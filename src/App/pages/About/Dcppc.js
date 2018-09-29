import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Done as DoneIcon } from '@material-ui/icons'

import Title from '../../../components/Typography/Title'
import Subheading from '../../../components/Typography/Subheading'
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
    
            <Title>DCPPC</Title>

            <Subheading>
                Activities within the <TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink> are organized around establishing nine Key Capabilities
            </Subheading>

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