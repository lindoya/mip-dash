import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom'
import './index.css'

import { connect } from 'react-redux'
import uuidValidate from 'uuid-validate'

import Dash from './monitoramento'
import Client from './client'


class PagesRoute extends Component {

  render() {

    if (uuidValidate(this.props.auth.token)){
      return (
        <div className='AQUI'>
          <Switch>
            <Route path='/logged/dash' component={Dash}/>
            <Route path='/logged/client' component={Client}/>
          </Switch>
          
        </div>
        ) 
    }else{
      return <Redirect to='/login' />
    }
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth,
  }
}

export default connect (mapStateToProps)(PagesRoute)