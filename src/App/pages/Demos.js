import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'

import demoContent from './demoContent'

const styles = theme => ({
    root: {
        padding: 4 * theme.spacing.unit,
    },
    panel: {
    },
    title: {
        fontSize: theme.typography.pxToRem(24),
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
            <Heading>Helium Demos</Heading>

            {
                demoContent.map( (demo, index) => {
                    return <ExpansionPanel key={ index } elevation={ 0 } className={ classes.panel }>
                        <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>
                            <Typography className={ classes.title }>
                                { demo.title }
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={ classes.body }>
                                { demo.body }
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                })
            }
        </Container>
    )
}

export default withStyles(styles)(demosPage);

