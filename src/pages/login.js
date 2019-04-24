import React, { Component } from 'react'

import { connect } from "react-redux";
import * as auth from "../store/actions/login";

import LoginContainer from '../containers/Login'

class LoginPage extends Component {
  render () {
    return (
      <LoginContainer />
    )
  }
}

export default connect(
  null,
  auth
)(LoginPage);