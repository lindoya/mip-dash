import { combineReducers } from 'redux'

import { login, auth } from '../pages/login/LoginRedux/reduce'
import { sideBar } from '../pages/subPages/sideBar/sideBarRedux/reduce'
import { navigate } from '../routes/routeRedux/reduce'

const rootReducer = combineReducers({
  login,
  auth,
  sideBar,
  navigate,
})

export default rootReducer

