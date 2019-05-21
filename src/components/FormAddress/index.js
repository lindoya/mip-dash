import React, { Component } from 'react'
import './index.css'
import InputDefault from '../Input'

class FormAddress extends Component {
  render() {
    return (
      <div className='div-main-formAddress'>
        <InputDefault className='teste' label='Cep' input='99999-999' sizeInput={{height: '40px', width:'105px'}} sizeLabel={{height: '40px', width: '70px'}}/>
        <InputDefault label='Estado' input='EX' sizeInput={{height: '40px', width:'60px'}} sizeLabel={{height: '40px', width: '90px'}}/>
        <InputDefault label='Cidade' input='Digite a cidade' sizeInput={{height: '40px', width:'350px'}} sizeLabel={{height: '40px', width: '90px'}}/>
        <InputDefault label='Bairro' input='Digite o bairro' sizeInput={{height: '40px', width:'350px'}} sizeLabel={{height: '40px', width: '90px'}}/>
        <InputDefault label='Complemento' input='Digite o complemento' sizeInput={{height: '40px', width:'250px'}} sizeLabel={{height: '40px', width: '90px'}}/>
        <InputDefault label='Rua' input='Digite a rua' sizeInput={{height: '40px', width:'700px'}} sizeLabel={{height: '40px', width: '90px'}}/>
        <InputDefault label='Número' input='123456789' sizeInput={{height: '40px', width:'100px'}} sizeLabel={{height: '40px', width: '90px'}}/>
        <InputDefault label='Referenc.' input='Digite o ponto de referência' sizeInput={{height: '40px', width:'500px'}} sizeLabel={{height: '40px', width: '90px'}}/>
      </div>
    )
  }
}

export default FormAddress