/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './index.css'
import ButtonDefault from '../../../components/Button'
import { Label, Form } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue, onSubmit } from '../LoginRedux/action'

class Login extends Component {

  onSubmit = async() => {
    await this.props.onSubmit(this.props.value)
  }

  render() {
    return (
      <div className='Login'>
        <div className='Container'>
          <img className='Logo' src = "realponto.jpg"/>

          <Form>
            <div className='form'>
              
              <Input labelPosition='left corner' type='text'>
                
                <Label >Username</Label>
                
                <Input
                  name='username'
                  icon='users' 
                  iconPosition='left' 
                  placeholder='username'
                  value={this.props.value.username} 
                  onChange={this.props.changeValue}
                />

              </Input>

            </div>


            <div className='form'>

              <Input labelPosition='left corner'>

                <Label >Password</Label>

                <Input 
                  name='password' 
                  icon='unlock alternate' 
                  iconPosition='left' 
                  type='password' 
                  placeholder='password' 
                  value={this.props.password} 
                  onChange={this.props.changeValue}
                />

              </Input>

            </div>

            <div className='butonForm'>
              <ButtonDefault className='button' onClick={this.onSubmit} name = 'Login'/>
            </div>

          </Form>
        </div>
      </div>
    )
  }
}

function mapDispacthToProps(dispach) {
  return bindActionCreators ({ changeValue, onSubmit }, dispach)
}

function mapStateToProps (state) {
  return {
    value: state.login,
  }
}

export default connect (mapStateToProps, mapDispacthToProps)(Login)