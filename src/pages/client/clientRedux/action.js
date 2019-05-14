import  { getAllCompanyGroupService } from '../../../services/company/companyGroup'
import action from '../../../store/actions'

export function getAllCompanyGroup() {
  return dispatch => {
    getAllCompanyGroupService().then(
      resp => dispatch({
        type: action.CLIENT.GET_ALL_COMPANY_GROUP,
        payload: resp,
      })
    )
  }
}