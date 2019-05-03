import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import LoginPage from '../pages/login'
import monitoramentoRoute from './monitoramentoRoute'

const Routes = () => (

  <BrowserRouter >
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <PrivateRoute path='/logged' component={monitoramentoRoute} />
      <Redirect to='/login' />
    </Switch>
  </BrowserRouter>
)

export default Routes