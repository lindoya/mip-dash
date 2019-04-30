import axios from 'axios'

import actions from './actions'

const { API_URL } = process.env

export function login(values) {
  return dispatch => {
    axios.post(`${API_URL}/oapi/login`, values)
      .then(
        resp => {
          dispatch([
            {
              type: actions.AUTH, 
              response: resp.data,
            }
          ])
        }
      )
      .catch(
        e => {
          e.response.data.errors.forEach(
            error => console.error(error) 
          )
        }
      )
  }
}