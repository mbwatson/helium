import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Container from '../../../components/Layout/Container'
import Title from '../../../components/Typography/Title'
import Paragraph from '../../../components/Typography/Paragraph'
import TextLink from '../../../components/Links/TextLink'

import Illustration01 from '../../../images/illustration01.svg'
import Illustration02 from '../../../images/illustration02.svg'
import Illustration03 from '../../../images/illustration03.svg'

const styles = ( theme ) => ({
    root: {
        width: '100%',
    },
    step: {
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('xs')]: { backgroundSize: '30%', },
        [theme.breakpoints.up('sm')]: { backgroundSize: '35%', },
        [theme.breakpoints.up('md')]: { backgroundSize: '40%', },
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-size 250ms, maxWidth 250ms',
        '&:nth-child(2n)': {
            backgroundPosition: 'center right',
            textAlign: 'left',
            justifyContent: 'flex-start',
        },
        '&:nth-child(2n-1)': {
            backgroundPosition: 'center left',
            textAlign: 'right',
            justifyContent: 'flex-end',
        },
    },
    text: {
        display: 'inline-block',
        transition: 'maxWidth 250ms',
        '&:nth-child(2n)': {
            backgroundPosition: 'top right',
            [theme.breakpoints.up('xs')]: { maxWidth: '10%', },
            [theme.breakpoints.up('sm')]: { maxWidth: '40%', },
            [theme.breakpoints.up('md')]: { maxWidth: '60%', },
        },
        '&:nth-child(2n-1)': {
            backgroundPosition: 'top left',
            [theme.breakpoints.up('xs')]: { 
                maxWidth: '60%',
                backgroundColor: 'transparent',
                borderRadius: '5px',
                padding: 2 * theme.spacing.unit,
                margin: theme.spacing.unit,
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: '50%',
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: '40%',
                backgroundColor: 'rgba(0, 0, 0, 0.03)',
            },
        },
    }
})

const steps = [
    {
        text: `Each DCPPC/DataSTAGE team outlined a series of milestones in their proposals
            that demonstrate completion of key development tasks to NIH/NHLBI.`,
        graphic: Illustration01,
    },
    {
        text: `Teams are held accountable through quarterly reports submitted to the funding source.
            Team Helium meets weekly to give each site an opportunity to showcase achievements and to communicate
            any institute-specific issues or dependencies that may be preventing team members from accomplishing a milestone.
            The Helium and HeliumPlus teams each meet biweekly to assess progress and engage in internal reporting.`,
        graphic: Illustration02,
    },
    {
        text: `Helium and HeliumPlus are dependent upon one another.
            For instance, HeliumPlus is implementing a scientific use case for
            the NHLBI on the Helium infrastructure.
            Therefore, communication to the Helium team of any issues that arise
            during the course of the DataSTAGE project is crucial to ensure
            informed development of the Helium platform.`,
        graphic: Illustration03,
    },
]

const workstreamPage = ( props ) => {
    const { classes } = props
    return (
        <Container>
            <Title>Overview</Title>

            <Paragraph><TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink> (DCPPC),
                the accomplishments of Team Helium are achieved through a deliberate workflow.
            </Paragraph>
            
            <div className={ classes.workstream }>
                {
                    steps.map( (step, index) => {
                        return (
                            <div
                                className={ classes.step }
                                style={{ backgroundImage: 'url("' + step.graphic + '")'}}
                                key={ index }
                            >
                                <Typography component="span" variant="body2" className={ classes.text }>
                                    { step.text }
                                </Typography>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}


export default withStyles(styles)(workstreamPage)