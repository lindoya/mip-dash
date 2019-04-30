import React, { Component } from 'react'
import './index.css'
import Input from '../Input'

class FormAddress extends Component {
  render() {
    return (
      <div className='div-formAddress'>
        <div className='formAddress'>
          <div className='formInput' style={{ width: '30%' }}>
            <Input label='Cep' input='99999-999' />
          </div>
          <div className='formInput' style={{ width: '20%' }}>
            <Input label='Estado' input='EX' />
          </div>
          <div className='formInput' style={{ width: '50%' }}>
            <Input label='Cidade' input='Coloque a cidade' />
          </div>
          </div>
          <div className='formAddress'>
          <div className='formInput' style={{ width: '60%' }}>
            <Input label='Bairro' input='Coloque o bairro' />
          </div>
          <div className='formInput' style={{ width: '40%' }}>
            <Input label='Compl.' input='Coloque o complemento' />
          </div>
          <div className='formInput' style={{ width: '100%' }}>
            <Input label='Rua' input='Coloque a rua' />
          </div>
          </div>
          <div className='formAddress'>
          <div className='formInput' style={{ width: '25%' }}>
            <Input label='Número' input='1234567' />
          </div>
        <div className='formInput' style={{ width: '75%' }}>
          <Input label='Referenc.' input='Coloque a ponto de referencia' />
        </div>
        </div>
      </div>
    )
  }
}

export default FormAddress