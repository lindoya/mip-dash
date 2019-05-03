import React, { Component } from 'react'
import './index.css'

import { connect } from 'react-redux'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'


class SideBarContainer extends Component {
  render() {
    const { username, active } = this.props

    console.log(active)
    return (
      <div>
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

          <Menu.Item as='a' active={active === 'Monitoramento'} >
            <div className='DivItem'>
              <Icon name='line graph' />
              Monitoramento
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='tv' />
              Ping Monitor
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='address card outline' />
              Clientes
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='car' />
              Visitas
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='handshake outline' />
              Contratos
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='boxes' />
              Estoque
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='external alternate' />
              Empréstimos
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='suitcase' />
              Produtos
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='users' />
              Funcionarios
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='money' />
              Módulos
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='money' />
              Laboratório
        </div>
          </Menu.Item>

          <Menu.Item as='a'>
            <div className='DivItem'>
              <Icon name='money' />
              Historico
        </div>
          </Menu.Item>

        </Sidebar>
      </div>
    )
  }
}

// function mapDispacthToProps(dispach) {
//   return bindActionCreators ({ changeValue, onSubmit }, dispach)
// }

function mapStateToProps (state) {
  return {
    active: state.sideBar.active,
    username: state.auth.username,
  }
}

export default connect (mapStateToProps)(SideBarContainer)