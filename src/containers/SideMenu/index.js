import React, { Component } from 'react'
import './index.css'
import { Label, Icon, Image, Header, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'

class SideMenu extends Component {
  
  render() {
    const { username, active } = this.props
  return (
    <Sidebar 
      className='SideMenu'
      as={Menu} 
      icon='labeled' 
      inverted
      visible
      vertical >

      <Menu.Item as='a' active={active === 'User'}>
        <div className='DivItem'>
          <Icon name='user outline' />
          {username}
        </div>
      </Menu.Item>     
      
      <Menu.Item  as='a' active={active === 'Monitoramento'} >
        <div className='DivItem'>
          <Icon name='line graph' />
          Monitoramento
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='tv' />
          Ping Monitor
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='address card outline' />
          Clientes
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='car' />
          Visitas
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='handshake outline' />
          Contratos
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='boxes' />
          Estoque
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='external alternate' />
          Empréstimos
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='suitcase' />
          Produtos
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='users' />
          Funcionarios
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='money' />
          Módulos
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='money' />
          Laboratório
        </div>
      </Menu.Item>

      <Menu.Item  as='a'>
        <div className='DivItem'>
          <Icon name='money' />
          Historico
        </div>
      </Menu.Item>

    </Sidebar>
  )
}}

export default SideMenu