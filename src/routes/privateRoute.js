import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class PrivateRoute extends Component {
  render() {
    return (
      <Route
        {...this.props} render={props => (
          this.props.auth.token ? (
            <Component {...props} />
          ) : (
              <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        )}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect (mapStateToProps)(PrivateRoute)