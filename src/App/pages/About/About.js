import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core';

import Container from '../../../components/Layout/Container'
import Submenu from '../../../components/Menus/Submenu'
import { OverviewPage, ObjectivesPage, DcppcPage, TeamPage, PlusPage } from './Pages'

const styles = ( theme ) => ({
    root: {
    }
})

const aboutPage = ( props ) => {

    const { classes } = props
    const submenuLinks = [
        { href: '/about/overview',      text: 'Overview', },
        { href: '/about/objectives',    text: 'Objectives', },
        { href: '/about/team',          text: 'The Team', },
        { href: '/about/dcppc',         text: 'DCPPC', },
        { href: '/about/plus',          text: 'HeliumPlus', },
    ]

    return (
        <Container>
            <Grid container
                spacing={ 40 }
                direction="row"
                justify="flex-start"
                className={ classes.root }
            >
                <Grid item xs={ 12 } sm={ 3 } md={ 2 } >
                    <Submenu links={ submenuLinks }/>
                </Grid>
                <Grid item xs={ 12 } sm={ 9 } md={ 10 }>
                    <Switch>
                        <Route exact path='/about/' render={ () => <Redirect to="/about/overview" /> }/>
                        <Route path='/about/overview' component={ OverviewPage }/>
                        <Route path='/about/objectives' component={ ObjectivesPage }/>
                        <Route path='/about/dcppc' component={ DcppcPage }/>
                        <Route path='/about/team' component={ TeamPage }/>
                        <Route path='/about/plus' component={ PlusPage }/>
                        <Route component={ OverviewPage } />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(aboutPage)
