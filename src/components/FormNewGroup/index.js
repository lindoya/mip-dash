import React, { Component } from 'react'
import './index.css'
import Input from '../Input'
import { Card } from 'semantic-ui-react'

class FormNewGroup extends Component{
  render(){
    return(
      <div className='div-newGroup'>
        <Card className='card-newGroup'>
        {/* <div className='div-newGroupmenor'> */}
        <Input sizeLabel={{width: '130px'}} label='Nome do grupo' sizeInput={{width: '550px'}} input='Coloque o nome do grupo'/>
        <Input sizeLabel={{width: '130px'}} label='Descrição' sizeInput={{width: '550px'}} input='Coloque uma descrição do grupo'/>
        {/* </div> */}
        </Card>
      </div>
    )
  }
}

export default FormNewGroup