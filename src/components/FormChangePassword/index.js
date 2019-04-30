import React, { Component } from 'react'
import './index.css';
import InputDefault from '../Input'
import ButtonDefault from '../Button';

class FormChangePassword extends Component {
  render() {
    return (
      <div>
        <div className='div-formAddress'>
          <div className='formAddress'>
            <div className='formInput' style={{ width: '50%' }}>
              <InputDefault  size={{ width: '110px' }} label='Senha Atual' input='Coloque sua antiga senha' />
            </div>
          </div>
          <div className='formAddress'>
            <div className='formInput' style={{ width: '50%' }}>
              <InputDefault size={{ width: '110px' }} label='Nova Senha' input='Coloque sua nova senha' />
            </div>
          </div>
          <div className='formAddress'>
            <div className='formInput' style={{ width: '50%' }}>
              <InputDefault  size={{ width: '110px' }} label='Confirmar' input='Confirme sua nova senha' />
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

export default FormChangePassword