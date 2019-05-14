import axios from 'axios'
import { BACKEND_URL } from '../var'


export const getAllCompanyGroupService = () => {
  return axios.get(`${BACKEND_URL}/api/company/group`)
}
