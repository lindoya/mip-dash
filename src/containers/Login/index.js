import React, { Component } from 'react'
import './index.css'
import { Button, Form, FormField } from 'semantic-ui-react'


export default class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <Form>
          <Form.Field>
            <label className='label'>Username:</label>
            <input placeholder='username' />
          </Form.Field>
          <Form.Field>
            <label className='label'>Password:</label>
            <input placeholder='password' />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

