import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import LoginPage from '../pages/login'


const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <PrivateRoute exact path='/logged' component={() => <h1>logged</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes