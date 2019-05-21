import React, { Component } from 'react'
import './index.css'
import Input from '../Input'
import { Card } from 'semantic-ui-react'
import FormAddress from '../../components/FormAddress'

class FormNewGroup extends Component{
  render(){
    return(
      <div className='div-newGroup'>
        <Card className='card-newGroup'>
        <div className='div-newGroupmenor'>
        <div className='div-inputs'>
        <Input sizeLabel={{width: '130px'}} label='Nome do grupo' sizeInput={{width: '400px'}} input='Coloque o nome do grupo'/> 
        <Input sizeLabel={{width: '85px'}} label='Cnpj' sizeInput={{width: '170px'}} input='Digite o cnpj'/>
        <Input sizeLabel={{width: '100px'}} label='Descrição' sizeInput={{width: '690px'}} input='Coloque uma descrição do grupo'/>
        </div>
        <FormAddress/>
        </div>
        </Card>
      </div>
    )
  }
}

export default FormNewGroup