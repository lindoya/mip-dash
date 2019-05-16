import  { getAllCompanyGroupService } from '../../../services/company/companyGroup'
import action from '../../../store/actions'

export function getAllCompanyGroup(props) {
  return dispatch => {
    getAllCompanyGroupService(props).then(
      resp => dispatch({
        type: action.CLIENT.GET_ALL_COMPANY_GROUP,
        payload: resp,
      })
    )
  }
}