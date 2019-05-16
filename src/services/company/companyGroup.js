import axios from 'axios'
import { BACKEND_URL } from '../var'


export const getAllCompanyGroupService = (search = {}) => {
  const { query = null, order = null } = search
  return axios.get(`${BACKEND_URL}/api/company/group`, {
    params: {
      query,
      order,
    },
  })
}
