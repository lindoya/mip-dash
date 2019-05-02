import actions from '../actions/actions'

const INICIAL_STATE ={
  auth:{
    token: null,
    userId: null,
    username: 'userName',
    email: 'email',
    validTonken: false,
  }
}

export default function(state = INICIAL_STATE, action){
  const { response } = action

  switch (action.type) {
    case actions.AUTH:

      if ( response.token ){
        return {
          ...state,
          auth: {
            token: response.token,
            userId: response.userId,
            username: response.username,
            email: response.email,
          }
        }
      }
      else{
        return{
          ...state,
          auth: null,
        }
      }
    default:
      return state
  }
}
