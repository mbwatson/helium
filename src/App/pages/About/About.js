import React, { Fragment } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core';

import Submenu from '../../../components/Submenu/Submenu'
import { Overview, Objectives, Dcppc, Plus, Workstream } from './Pages'

const aboutPage = ( props ) => {
    return (
        <Fragment>
            <Grid container
                spacing={ 16 }
                direction="row"
                justify="flex-start"
            >
                <Grid item xs={ 12 } sm={ 3 } md={ 2 } >
                    <Submenu style={ {border: '1px solid #f00'} }>
                        <NavLink to="/about/overview">Overview</NavLink>
                        <NavLink to="/about/objectives">Objectives</NavLink>
                        <NavLink to="/about/dcppc">DCPPC</NavLink>
                        <NavLink to="/about/plus">Helium+</NavLink>
                        <NavLink to="/about/workstream">Workstream</NavLink>
                    </Submenu>
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
        </Fragment>
    )
}

export default aboutPage