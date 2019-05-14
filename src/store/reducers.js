import { combineReducers } from 'redux'

import { login, auth } from '../pages/login/LoginRedux/reduce'
import { sideBar } from '../pages/subPages/sideBar/sideBarRedux/reduce'
import { client } from '../pages/client/clientRedux/reduce'

const rootReducer = combineReducers({
  login,
  auth,
  sideBar,
  client,
})

export default rootReducer

