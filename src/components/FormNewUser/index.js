import React, { Component } from 'react'
import './index.css'
import { Form, Input, Label } from 'semantic-ui-react'
import ButtonDefault from '../Button'

class FormNewUser extends Component {
  render() {
    return (
      <div className = 'FormNewUser'>
        <Form>
          <div className='form'>
            <Input labelPosition = 'left corner'>
              <Label className = 'labelClass'> Name </Label>
              <Input className = 'inputClass' type = 'text' placeholder = 'complete name' />
            </Input>
          </div>
          <div className='form'>
            <Input labelPosition = 'left corner'>
              <Label className = 'labelClass'>Email</Label>
              <Input className = 'inputClass' type = 'email' placeholder = 'email@email.com' />
            </Input>
          </div>
        <div className='form'>
            <Input labelPosition = 'left corner' type = 'text'>
              <Label className = 'labelClass'> Username </Label>
              <Input className = 'inputClass' placeholder = 'username' />
            </Input>
          </div>
          <ButtonDefault className = 'buttonNewUSer' type = 'submit' name = 'Salvar'/>
        </Form>
      </div>
    )
  }
}

export default FormNewUser