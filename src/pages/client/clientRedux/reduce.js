import actions from '../../../store/actions'

const INICIAL_STATE ={
  page: 1,
  show: '0',
  count: '0',
  rows: [],
}



export function client(state = INICIAL_STATE, action) {
  
  switch(action.type){
    case actions.CLIENT.GET_ALL_COMPANY_GROUP:
      if (action.payload.statusCode === 200){
        return{
          ...state,
          ...action.payload.body,
        }
      }else{
        return state
      }
    default:
      return state
  }
}