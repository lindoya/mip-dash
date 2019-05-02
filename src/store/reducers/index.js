import { combineReducers } from 'redux'

import { login, auth } from '../../pages/login/LoginRedux/reduce'

const rootReducer = combineReducers({
  login,
  auth,
})

export default rootReducer

