import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'

const Routes = (props) => {
    return(
        <Switch>
            <Route path='/create' render={() => {
                return <Form editFun={props.editFun} createProductFun={props.createProductFun} />
            }}/>
            <Route path='/edit/:id' render={() => {
                return <Form editFun={props.editFun} createProductFun={props.createProductFun} />
            }}/>
            <Route path='/products' render={() => {
                return <Dashboard deleteFun={props.deleteFun}  invt={props.invt}/>
            }}/>
        </Switch>
    )
}

export default Routes