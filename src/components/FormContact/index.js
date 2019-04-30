import React, { Component } from 'react'
import './index.css'
import InputDefault from '../Input'

class FormContact extends Component {
  render() {
    return (
      <div className='div-formAddress'>
        <div className='formAddress'>
          <div className='formInput' style={{ width: '67%' }}>
            <InputDefault label='Nome' input='Nome completo' />
          </div>
          <div className='formInput' style={{ width: '33%' }}>
            <InputDefault label='Tel' input='(99)99999-9999' />
          </div>
        </div>
        <div className='formAddress'>
          <div className='formInput' style={{ width: '67%' }}>
            <InputDefault label='Email' input='email@email.com' />
          </div>
          <div className='formInput' style={{ width: '33%' }}>
            <InputDefault label='Cargo' input='Coloque o cargo' />
          </div>
        </div>
      </div>
    )
  }
}

export default FormContact