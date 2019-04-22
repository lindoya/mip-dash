import React, { Component } from 'react'
import './index.css'
import { Button, Form, Label } from 'semantic-ui-react'
import { Input, Image } from 'semantic-ui-react'


export default class Login extends Component {
  render() {
    return (      
      <div className='Login'>
      <div>
        <img src='logo.png' />
      </div>

        <Form>
          <div className='form'>
            <Input labelPosition='left corner' type='text'>
              <Label className='labelClass'>Username</Label>
              <Input icon='users' iconPosition='left' placeholder='username' />
            </Input>
            </div>
            <div className='form'>
            <Input labelPosition='left corner'>
              <Label className='labelClass'>Password</Label>
              <Input icon='unlock alternate' iconPosition='left' type='password' placeholder='password' />
            </Input>
            </div>
            {/* <Input label='Username' icon='users' iconPosition='left' placeholder='username' /> */}
            {/* <label className='label'>Password:</label>
            <Input icon='unlock alternate' iconPosition='left' placeholder='password' /> */}
        </Form>
        <Button className='button'>Login</Button>
      </div>
    )
  }
}

