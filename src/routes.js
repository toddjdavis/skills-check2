import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route path='/create' component={Form}/>
        <Route path='/products' component={Dashboard}/>
    </Switch>
)