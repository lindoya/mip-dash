import actions from '../../store/actions'

import DashBoard from '../../pages/monitoramento'
import Client from '../../pages/client'

const INICIAL_STATE ={
  active: 'Monitoramento',
}


export function navigate(state = INICIAL_STATE, action) {
  
  switch(action.type){
    case actions.SIDE_BAR.CHANGE_ACTIVE:

      switch(action.payload){
        case 'Monitoramento':
          return { ...state, page: DashBoard }
        case 'Client':
          return { ...state, page: Client }
        default:
          return state
      }
    default:
      return state
  }
}