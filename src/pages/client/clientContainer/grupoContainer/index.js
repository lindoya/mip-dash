import React, { Component } from 'react'
import './index.css'

class ListGroup extends Component {
  render() {
    return (
      <table>
        <tr>
          <td width="40%"><button className='buttonGrupo'>Grupo</button></td>
          <td width="50%"><button className='buttonDesc'>Descrição</button></td>
          <td width="10%"><button className='buttonEmp'>Qtd. Empresas</button></td>
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