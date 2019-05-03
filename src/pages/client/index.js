import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeActive } from '../subPages/sideBar/sideBarRedux/action'

class Client extends Component{

  componentDidMount(){
    this.props.changeActive( 'Client' )
  }

  render() {
    return(
      <div>
        
        <h1>aSADASDAsdsadsadsadsadsasdsasdadassdasdasdaClient</h1>
      </div>
    )
  }
}

function mapDispacthToProps(dispach) {
  return bindActionCreators({ changeActive }, dispach)
}

function mapStateToProps (state) {
  return {
    auth: state.auth,
    sideBar: state.sideBar.active,
  }
}

export default connect (mapStateToProps, mapDispacthToProps)(Client)