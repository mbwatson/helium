import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core';

import Container from '../../../components/Layout/Container'
import Submenu from '../../../components/Menus/Submenu'
import { OverviewPage, ObjectivesPage, TeamPage, PlusPage } from './Pages'

const styles = ( theme ) => ({
    root: { }
})

const aboutPage = ( props ) => {

    const { classes } = props
    const submenuLinks = [
        { href: '/about/overview',      text: 'Overview',   component: OverviewPage },
        { href: '/about/objectives',    text: 'Objectives', component: ObjectivesPage },
        { href: '/about/plus',          text: 'HeliumPlus', component: PlusPage },
        { href: '/about/team',          text: 'The Team',   component: TeamPage },
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
                        {
                            submenuLinks.map((link, index) => <Route key={ index } path={ link.href } component={ link.component }/>)
                        }
                        <Route render={ () => <Redirect to="/about/overview" /> } />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(aboutPage)
