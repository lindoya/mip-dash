import React, { Component } from 'react'
import './index.css';
import InputDefault from '../Input'
import ButtonDefault from '../Button';

class FormChangeNameOrEmail extends Component {
  render() {
    return (
      <div>
        <div className='div-formAddress'>
          <div className='formAddress'>
            <div className='formInput' style={{ width: '50%' }}>
              <InputDefault label='Nome' input='Coloque o nome' />
            </div>
          </div>
          <div className='formAddress'>
            <div className='formInput' style={{ width: '50%' }}>
              <InputDefault label='Email' input='Coloque o email' />
            </div>
          </div>
        </div>
        <div>
          <ButtonDefault name='Salvar' />
        </div>
      </div>
    )
  }
}

export default FormChangeNameOrEmail