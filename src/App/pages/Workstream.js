import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Container from '../../components/Layout/Container'

const styles = ( theme ) => ({
    root: {
        width: '100%',
    },
    step: {
        backgroundRepeat: 'no-repeat',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
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
        '&:nth-child(2n)': {
            backgroundPosition: 'top right',
            [theme.breakpoints.up('xs')]: { width: '10%', },
            [theme.breakpoints.up('sm')]: { width: '40%', },
            [theme.breakpoints.up('md')]: { width: '60%', },
        },
        '&:nth-child(2n-1)': {
            backgroundPosition: 'top left',
            [theme.breakpoints.up('xs')]: { 
                width: '90%',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '5px',
                padding: 2 * theme.spacing.unit,
                margin: theme.spacing.unit,
            },
            [theme.breakpoints.up('sm')]: { width: '60%', },
            [theme.breakpoints.up('md')]: { width: '40%', },
        },
    }
})

const steps = [
    {
        text: `Each DCPPC/DataSTAGE team outlined a series of milestones in their proposals
            that demonstrate completion of key development tasks to NIH/NHLBI.`,
        graphic: 'https://picsum.photos/399/299',
    },
    {
        text: `Teams are held accountable through quarterly reports submitted to the funding source.
            Team Helium meets weekly to give each site an opportunity to showcase their achievements
            and to communicate any institute-specific issues or dependencies that it may be facing,
            which may be preventing team members from accomplishing a milestone.
            The Helium and HeliumPlus teams each meet biweekly to
            assess progress and engage in internal reporting.`,
        graphic: 'https://picsum.photos/400/300',
    },
    {
        text: `Helium and HeliumPlus are dependent upon one another.
            For instance, HeliumPlus is implementing a scientific use case for
            the NHLBI on the Helium infrastructure.
            Therefore, communication to the Helium team of any issues that arise
            during the course of the DataSTAGE project is crucial to ensure
            informed development of the Helium platform.`,
        graphic: 'https://picsum.photos/401/301',
    },
]

const workstreamPage = ( props ) => {
    const { classes } = props
    return (
        <Container>
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