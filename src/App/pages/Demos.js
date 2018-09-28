import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Container from '../../components/Layout/Container'
import Title from '../../components/Typography/Title'
import Paragraph from '../../components/Typography/Paragraph'

import demoContent from './demoContent'

const styles = theme => ({
    root: {
        padding: 4 * theme.spacing.unit,
    },
    panel: {
    },
    title: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    body: {
        fontSize: theme.typography.pxToRem(16),
    },
});

const demosPage = ( props ) => {
    const { classes } = props;

    return (
        <Container>
            <Title>Helium Demos</Title>

            {
                demoContent.map( (demo, index) => {
                    return <ExpansionPanel key={ index } elevation={ 1 } className={ classes.panel }>
                        <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>
                            <Typography className={ classes.title }>
                                { demo.title }
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Paragraph className={ classes.body }>
                                { demo.body }
                            </Paragraph>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                })
            }
        </Container>
    )
}

export default withStyles(styles)(demosPage);

