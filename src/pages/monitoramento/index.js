import React, { Component } from 'react'
import SideBar from '../subPages/SideMenu'
import { connect } from 'react-redux'

class Monitoramento extends Component{
  render() {
    return(
      <div>
        <SideBar username={this.props.auth.username} active='Monitoramento'/>
        <h1>MONITORAMENTO</h1>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return {
    auth: state.auth,
  }
}

export default connect (mapStateToProps)(Monitoramento)