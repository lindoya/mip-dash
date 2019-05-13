import React, { Component } from 'react'
import SearchBar from '../../../../components/SearchBar'
import './index.css'
import { Menu, Segment } from 'semantic-ui-react'
import ListGroup from '../grupoContainer'
import ListCompany from '../companyContainer'


class DashClient extends Component{  

  state = { activeItem: 'Grupos' }

  buttons = [
    {
      name: ' Novo grupo',
      url: '/logged/client/newGroup'
    },
    {
      name: ' Novo empresa',
      url: '/logged/client/newCompany'
    }
  ]

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    if(this.state.activeItem === 'Grupos'){
    return(
      <div className='div-searchBar'>
        <SearchBar buttons={this.buttons} />
        <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Grupos' active={activeItem === 'Grupos'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Empresas'
            active={activeItem === 'Empresas'}
            onClick={this.handleItemClick}
            />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <ListGroup/>
        </Segment>
      </div>
      </div>
    )
    }else{
      return(
        <div className='div-searchBar'>
        <SearchBar buttons={this.buttons} />
        <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Grupos' active={activeItem === 'Grupos'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Empresas'
            active={activeItem === 'Empresas'}
            onClick={this.handleItemClick}
            />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
            <ListCompany/>
        </Segment>
      </div>
      </div>
    )
    }
  }
}

export default DashClient
