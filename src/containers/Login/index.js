/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './index.css'
import ButtonDefault from '../../components/Button'
import { Form, Label } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <img src="realponto.jpg" />
        <Form>
          <div className='form'>
            <Input labelPosition='left corner' type='text'>
              <Label className='labelClass'>Username</Label>
              <Input className='inputClass' icon='users' iconPosition='left' placeholder='username' />
            </Input>
          </div>
          <div className='form'>
            <Input labelPosition='left corner'>
              <Label className='labelClass'>Password</Label>
              <Input className='inputClass' icon='unlock alternate' iconPosition='left' type='password' placeholder='password' />
            </Input>
          </div>
        </Form>
        <ButtonDefault className='button' name='Login' />
      </div>
    )
  }
}


export default Login
