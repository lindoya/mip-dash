import React, { Component } from 'react'
import './index.css'
import { Icon, Menu, Table } from 'semantic-ui-react'


class ListCompany extends Component {

  state = {
    name: 'Cnpj',
    direction: false,
  }

  changeStateActive = (name) => {
    this.setState({
      name: name,
      direction: !this.state.direction
    })
  }

  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='cnpj'>
              <button icon onClick={() => this.changeStateActive('Cnpj')} className='buttonEmp'>
                Cnpj
               {this.state.name === 'Cnpj' ? (
                  this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
                ) : null}
              </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='grupo'>
            <button icon onClick={() => this.changeStateActive('Grupo')} className='buttonEmp'>
            Grupo
              {this.state.name === 'Grupo' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='nome'>
            <button icon onClick={() => this.changeStateActive('Nome')} className='buttonEmp'>
            Nome
              {this.state.name === 'Nome' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='cidade'>
            <button icon onClick={() => this.changeStateActive('Cidade-UF')} className='buttonEmp'>
            Cidade-UF
              {this.state.name === 'Cidade-UF' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='qtd'>
            <button icon onClick={() => this.changeStateActive('Qtd')} className='buttonEmp'>
            Qtd. Unid
              {this.state.name === 'Qtd' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='devedor'>
            <button icon onClick={() => this.changeStateActive('Devendo')} className='buttonEmp'>
            Devendo
              {this.state.name === 'Devendo' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times'/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon>
              <Icon name='minus' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>24.894.447/0001-10</Table.Cell>
            <Table.Cell>Grupo NK</Table.Cell>
            <Table.Cell>Fantasia</Table.Cell>
            <Table.Cell>São Bernardo do Campo - SP</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell icon className='deve'>
              <Icon name='times' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default ListCompany