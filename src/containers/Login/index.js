import React, { Component } from 'react'
import './index.css'
import { Button, Form, FormField } from 'semantic-ui-react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


export default class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <Form>
          <FormField>
            <label className='label'>Username:</label>
            <input placeholder='username' />
          </FormField>
          <FormField>
            <label className='label'>Password:</label>
            <input placeholder='password' />
          </FormField>
        </Form>
        <Button className='button'>Salvar</Button>
          {/* <Dimmer active >
            <Loader className = 'loading'  size='massive'>Loading</Loader>
          </Dimmer> */}
      </div>
    )
  }
}

