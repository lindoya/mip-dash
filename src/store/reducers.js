import { combineReducers } from 'redux'

import { login, auth } from '../pages/login/LoginRedux/reduce'
import { sideBar } from '../pages/subPages/sideBar/sideBarRedux/reduce'

const rootReducer = combineReducers({
  login,
  auth,
  sideBar,
})

export default rootReducer

