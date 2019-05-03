import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import uuidValidate from 'uuid-validate'

import SideBarPage from '../pages/subPages/sideBar'
class PrivateRoute extends Component {

  render() {
    if (uuidValidate(this.props.auth.token)){
      return (
        <div>
          <SideBarPage />
          <Route component={this.props.component} />
        </div>
        ) 
    }else{
      return <Redirect to='/' />
    }
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect (mapStateToProps)(PrivateRoute)