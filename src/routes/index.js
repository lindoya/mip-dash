import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import PrivateRoute from './privateRoute'
import history from './history'

import LoginPage from '../pages/login'

const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route exact path='/' component={() => <h1>log</h1>} />
      <PrivateRoute exact path='/logged' component={() => <h1>logged</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes