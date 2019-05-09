import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeActive } from '../subPages/sideBar/sideBarRedux/action'
import DashClient from './clientContainer/dashContainer'
import { Switch, Route } from 'react-router-dom'
import newGroupContainer from './clientContainer/newGroupContainer'
import newCompanyContainer from './clientContainer/newCompanyContainer'


class Client extends Component{

  componentDidMount(){
    this.props.changeActive( 'Client' )
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/logged/client' component={DashClient}/> 
          <Route exact path='/logged/client/newGroup' component={newGroupContainer}/> 
          <Route exact path='/logged/client/newCompany' component={newCompanyContainer}/> 
        </Switch>
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