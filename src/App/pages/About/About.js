import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core';

import Container from '../../../components/Container/Container'
import Submenu from '../../../components/Menus/Submenu'
import { Overview, Objectives, Dcppc, Plus, Workstream } from './Pages'

const aboutPage = ( props ) => {
    const submenuLinks = [
        { href: '/about/overview',      text: 'Overview', },
        { href: '/about/objectives',    text: 'Objectives', },
        { href: '/about/dcppc',         text: 'DCPPC', },
        { href: '/about/plus',          text: 'Helium+', },
        { href: '/about/workstream',    text: 'Workstream', },
    ]

    return (
        <Container>
            <Grid container
                spacing={ 40 }
                direction="row"
                justify="flex-start"
            >
                <Grid item xs={ 12 } sm={ 3 } md={ 2 } >
                    <Submenu links={ submenuLinks }/>
                </Grid>
                <Grid item xs={ 12 } sm={ 9 } md={ 10 } >
                    <Switch>
                        <Route exact path='/about/' render={ () => <Redirect to="/about/overview" /> }/>
                        <Route path='/about/overview' component={ Overview }/>
                        <Route path='/about/objectives' component={ Objectives }/>
                        <Route path='/about/dcppc' component={ Dcppc }/>
                        <Route path='/about/plus' component={ Plus }/>
                        <Route path='/about/workstream' component={ Workstream }/>
                        <Route component={ Overview } />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}

export default aboutPage