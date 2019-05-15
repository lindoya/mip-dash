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
      <Table>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell className='grupo'>
              <button icon onClick={() => this.changeStateActive('grupo')} className='buttonEmp'>
                Grupo
               {this.state.name === 'grupo' ? (
                  this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
                ) : null}
              </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='desc'>
              <button icon onClick={() => this.changeStateActive('descricao')} className='buttonEmp'>
                Descrição
              {this.state.name === 'descricao' ? (
                  this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
                ) : null}
              </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='qtd'>
              <button icon onClick={() => this.changeStateActive('criado')} className='buttonEmp'>
                Criado em
              {this.state.name === 'criado' ? (
                  this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
                ) : null}
              </button>
            </Table.HeaderCell>
            <Table.HeaderCell className='qtd'>
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
            <tr class="tr-group" > 
            <td class="td-group-grupo">{row.groupName}</td>
            <td class="td-group-desc">{row.description}</td>
            <td class="td-group-criado">{row.createdAt}</td>
            <td class="td-group-qtd">{row.qntComp}</td>
          </tr>
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
  return bindActionCreators({ getAllCompanyGroup }, dispach)
}

function mapStateToProps(state) {
  return {
    companyGroupList: state.client.companyGroup.getAll,
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(ListGroup)