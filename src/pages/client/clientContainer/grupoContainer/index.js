import React, { Component } from 'react'
import './index.css'
import { Icon } from 'semantic-ui-react'


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

  render() {
    return (
      <table>
        <tr>
          <td width="38%">
            <button icon onClick={() => this.changeStateActive('Grupo')} className='buttonGrupo' nameButton='Grupo'>
            Grupo
              {this.state.name === 'Grupo' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
          </td>
          <td width="50%">
            <button icon onClick={() => this.changeStateActive('Descricao')} className='buttonDesc'>
            Descrição
              {this.state.name === 'Descricao' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
          </td>
          <td width="12%">
            <button icon onClick={() => this.changeStateActive('Qtd')} className='buttonEmp'>
            Qtd. Emp
              {this.state.name === 'Qtd' ? (
                this.state.direction ? <Icon name='sort up' /> : <Icon name='sort down' />
              ) : null}
            </button>
          </td>
        </tr>
        <tr>
          <td>Grupo Nk</td>
          <td>empresa mto loca</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Grupo Nk</td>
          <td>empresa mto loca</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Grupo Nk</td>
          <td>empresa mto loca</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Grupo Nk</td>
          <td>empresa mto loca</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Grupo Nk</td>
          <td>empresa mto loca</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Grupo Nk</td>
          <td>empresa mto loca</td>
          <td>27</td>
        </tr>
      </table>
    )
  }
}

export default ListGroup