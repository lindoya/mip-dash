import React, { Component } from 'react'
import './index.css'

import { connect } from 'react-redux'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { changeActive } from '../sideBarRedux/action'
import {  Link } from 'react-router-dom'


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

          <Link to='/logged/user'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('User')}
              active={active === 'User'}>

              <div className='DivItem'>
                <Icon name='user outline' />
                {username}
              </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/dash'>
            <Menu.Item
              as='p'
              onClick={() =>
                this.props.changeActive('Dash')
              }
              active={active === 'Dash'} >

              <div className='DivItem'>
                <Icon name='line graph' />
                Monitoramento
            </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/visit'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Visit')}
              active={active === 'Visit'} >

              <div className='DivItem'>
                <Icon name='car' />
                Visitas
            </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/client'>
            <Menu.Item
              as='p'
              active={active === 'Client'}
              onClick={() =>
                this.props.changeActive('Client')
              } >

              <div className='DivItem'>
                <Icon name='address card outline' />
                Clientes
            </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/contract'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Contract')}
              active={active === 'Contract'} >

              <div className='DivItem'>
                <Icon name='handshake outline' />
                Contratos
            </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/movice'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('PingMonitor')}
              active={active === 'PingMonitor'} >

              <div className='DivItem'>
                <Icon name='tv' />
                Ping Monitor
            </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/modrp'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Módulos')}
              active={active === 'Módulos'} >

              <div className='DivItem'>
                <Icon name='money' />
                Módulos
            </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/products'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Produtos')}
              active={active === 'Produtos'} >

              <div className='DivItem'>
                <Icon name='suitcase' />
                Produtos
        </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/loan'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Empréstimos')}
              active={active === 'Empréstimos'} >

              <div className='DivItem'>
                <Icon name='external alternate' />
                Empréstimos
        </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/stock'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Estoque')}
              active={active === 'Estoque'} >

              <div className='DivItem'>
                <Icon name='boxes' />
                Estoque
        </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/lab'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Laboratório')}
              active={active === 'Laboratório'} >

              <div className='DivItem'>
                <Icon name='money' />
                Laboratório
        </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/func'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Funcionarios')}
              active={active === 'Funcionarios'} >

              <div className='DivItem'>
                <Icon name='users' />
                Funcionarios
        </div>
            </Menu.Item>
          </Link>

          <Link to='/logged/historic'>
            <Menu.Item
              as='p'
              onClick={() => this.props.changeActive('Historico')}
              active={active === 'Historico'} >

              <div className='DivItem'>
                <Icon name='money' />
                Historico
        </div>
            </Menu.Item>
          </Link>

        </Sidebar>
      </div>
    )
  }
}


function mapDispacthToProps(dispach) {
  return bindActionCreators({ changeActive }, dispach)
}

function mapStateToProps(state) {
  return {
    active: state.sideBar.active,
    username: state.auth.username,
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(SideBarContainer)