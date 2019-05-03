import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import monitoramentoPage from '../pages/monitoramento'

const Routes = () => (
    <Switch>
      {console.log('aqui')}
      <PrivateRoute path='/logged' component={monitoramentoPage} />
      <PrivateRoute path='/logged/monit2' component={() => {
        console.log('abababcady')
        return <h1>ola</h1> 
        }} />
    </Switch>
)

export default Routes