import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import LoginPage from '../pages/login'
import monitoramentoRoute from './monitoramentoRoute'

const Routes = () => (

  <BrowserRouter >
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <PrivateRoute path='/logged' component={monitoramentoRoute} />
    </Switch>
  </BrowserRouter>
)

export default Routes