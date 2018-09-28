import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Label as LabelIcon } from '@material-ui/icons'

import Title from '../../../components/Typography/Title'
import Paragraph from '../../../components/Typography/Paragraph'

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
    "Enabling the Data Commons to uniquely identify any and all FAIR digital objects to enable long-term resolution of cited persistent data and to potentially provide the capability to link disparate datasets at various levels of granularity;",
    "Creating a federation of APIs for operating on biomedical data in the Commons, spanning tasks at different levels of granularity, from operations on individual datasets and workflows to integrative queries that combine multiple datasets, sources, or workflows;",
    "Empowering users to bring their own data, tools, and infrastructure for utilization by developing mechanisms that fluidly integrate data, computational workflows, and other software tools and products;",
    "Enabling a maximally open Data Commons by creating a modular platform that allows for flexibility in workflows and data science systems to reflect the vital diversity of aims and approaches among research communities; and",
    "Enabling sharing and access to digital objects while protecting data confidentiality and integrity, and to maximize data utility, while managing issues related to ownership, rights of access, data security, and subject privacy.",
]

const objectivesPage = ( props ) => {
    const { classes } = props
    return (
        <Fragment>

            <Title>Objectives</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quasi, quisquam ex, commodi autem dicta, numquam ipsum assumenda tempore provident, excepturi suscipit nihil quia nemo modi obcaecati! Aliquid, deserunt, rerum.
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
        </Fragment>
    )
}

export default withStyles(styles)(objectivesPage)