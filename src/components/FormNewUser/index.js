import React, { Component } from 'react'
import './index.css'
import { Form } from 'semantic-ui-react'
import ButtonDefault from '../Button'
import InputDefault from '../Input'

class FormNewUser extends Component {
  render() {
    return (
      <div className = 'FormNewUser'>
        <Form>
          <div className='form'>
            <InputDefault label='Nome' input='nome completo'/>
          </div>
          <div className='form'>
            <InputDefault label='Email' input='email@email.com'/>
          </div>
          <div className='form'>
            <InputDefault label='Username' input='username'/>
          </div>
          <ButtonDefault className = 'buttonNewUSer' type = 'submit' name = 'Salvar'/>
        </Form>
      </div>
    )
  }
}

export default FormNewUser