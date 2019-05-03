import React, { Component } from 'react'
import { connect } from 'react-redux'

class Monitoramento extends Component{
  render() {
    return(
      <div>
        <h1>MONITORAMENTO</h1>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return {
    auth: state.auth,
    sideBar: state.sideBar.active,
  }
}

export default connect (mapStateToProps)(Monitoramento)