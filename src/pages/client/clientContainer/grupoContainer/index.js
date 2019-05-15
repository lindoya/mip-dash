import React, { Component } from 'react'
import './index.css'
import { Icon, Menu, Table } from 'semantic-ui-react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAllCompanyGroup } from '../../clientRedux/action'
class ListGroup extends Component {

  state = {
    name: 'Grupo',
    direction: false,
  }

  changeStateActive = (name) => {
    this.setState({
      name: name,
      direction: !this.state.direction
    })
  }

  componentDidMount = () => {
    this.props.getAllCompanyGroup()
  }

  render() {

    const groupList = this.props.companyGroupList.rows

    return (
      <Table selectable color='#001336'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='grupo' width='32%'>
              <button icon onClick={() => this.changeStateActive('grupo')} className='buttonEmp'>
                Grupo
               {this.state.name === 'grupo' ? (
                  this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
                ) : null}
              </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='desc' width='58%'>
            <button icon onClick={() => this.changeStateActive('descricao')} className='buttonEmp'>
            Descrição
              {this.state.name === 'descricao' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='qtd' width='10%'>
            <button icon onClick={() => this.changeStateActive('criado')} className='buttonEmp'>
            Criado em
              {this.state.name === 'criado' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='qtd' width='10%'>
            <button icon onClick={() => this.changeStateActive('qtd')} className='buttonEmp'>
            Qtd. Emp
              {this.state.name === 'qtd' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {groupList.map(row => (
            <Table.Row > 
            <Table.Cell>{row.groupName}</Table.Cell>
            <Table.Cell>{row.description}</Table.Cell>
            <Table.Cell>{row.createdAt}</Table.Cell>
            <Table.Cell>{row.qntComp}</Table.Cell>
          </Table.Row>
          ))}

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

function mapDispacthToProps(dispach) {
  return bindActionCreators ({ getAllCompanyGroup }, dispach)
}

function mapStateToProps (state) {
  return {
    companyGroupList: state.client.companyGroup.getAll,
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(ListGroup)