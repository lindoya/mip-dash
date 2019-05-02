import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import LoginPage from '../pages/login'
import Monitoramento from "../pages/monitoramento";

const Routes = () => (

  <BrowserRouter >
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <PrivateRoute exact path='/logged' component={Monitoramento} />
    </Switch>
  </BrowserRouter>
)

export default Routes