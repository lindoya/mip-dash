/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './index.css'
import ButtonDefault from '../../components/Button'
import { Label, Form } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

// import { login as actionLogin } from "../../store/actions/login";

class Login extends Component {

  constructor() {
    super();
    this.state ={
      username: '',
      password: '',
    }

    this.onChange = (e) => {
      const state = Object.assign({}, this.state)

      const field = e.target.name
      state[field] = e.target.value
      this.setState(state)
    }
  }


  onSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className='Login'>
        <div className='Container'>
          <img className='Logo' src = "realponto.jpg"/>

          <Form>
            <div className='form'>
              
              <Input labelPosition='left corner' type='text'>
                
                <Label className='labelClass'>Username</Label>
                
                <Input 
                  className='inputClass' 
                  name='username'
                  icon='users' 
                  iconPosition='left' 
                  placeholder='username'
                  value={this.state.username} 
                  onChange={this.onChange}
                />

              </Input>

            </div>


            <div className='form'>

              <Input labelPosition='left corner'>

                <Label className='labelClass'>Password</Label>

                <Input className='inputClass' 
                  name='password' 
                  icon='unlock alternate' 
                  iconPosition='left' 
                  type='password' 
                  placeholder='password' 
                  value={this.state.password} 
                  onChange={this.onChange}
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


export default Login
