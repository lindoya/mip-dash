import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as R from 'ramda'

import LoginContainer from './LoginContainer'
import uuidValidate from 'uuid-validate'

class LoginPage extends Component {
  hasAuth = R.has('auth')
  hasToken = R.has('token')

  render () {

    if (this.hasAuth(this.props)){
      if (this.hasToken(this.props.auth)){
        if(uuidValidate(this.props.auth.token)){
          return <Redirect to='/logged' />
        }
      }  
    }
    
    return (
      <LoginContainer />
    )
  }
}


function mapStateToProps (state) {
  return {
    auth: state.auth,
  }
}

export default connect (mapStateToProps)(LoginPage)