import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import uuidValidate from 'uuid-validate'

import Dash from './monitoramento'
import Client from './client'

class PagesRoute extends Component {

  render() {
    console.log('motherfoqyue')
    if (uuidValidate(this.props.auth.token)){
      return (
        <div>
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