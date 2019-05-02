import axios from 'axios'
//const { API_URL } = process.env
const API_URL = 'http://localhost:4000'
const authentic = (values) => {
  return axios.post(`${API_URL}/oapi/login`, values)
}


export default {
  authentic,
}