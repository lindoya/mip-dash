import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import uuidValidate from 'uuid-validate'

import SideBarPage from '../pages/subPages/sideBar'

import PagesRoute from '../pages'

class PrivateRoute extends Component {

  render() {
    console.log('motherfoqyue')
    if (uuidValidate(this.props.auth.token)){
      return (
        <div>
          <SideBarPage />
          <Switch>
            <Route path='/logged' component={PagesRoute}/>
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

export default connect (mapStateToProps)(PrivateRoute)