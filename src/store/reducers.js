import { combineReducers } from 'redux'

import { login, auth } from '../pages/login/LoginRedux/reduce'
import { sideBar } from '../pages/subPages/sideBar/sideBarRedux/reduce'
import { getAllCompanyGroup } from '../pages/client/clientRedux/reduce'

const rootReducer = combineReducers({
  login,
  auth,
  sideBar,
  client: {
    companyGroup: {
      getAllCompanyGroup
    }
  }
})

export default rootReducer

