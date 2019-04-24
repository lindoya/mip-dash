import React from "react";
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...allProps }) => (
  <Route 
  { ...allProps } render = { props => (
    isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to ={{ pathname: '/', state: { from: props.location }}} />
    )
  )}
  />
)

export default PrivateRoute