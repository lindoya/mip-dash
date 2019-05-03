import actions from '../../../../store/actions'


const INICIAL_STATE ={
  active: 'Monitoramento',
}


export function sideBar(state = INICIAL_STATE, action) {
  
  switch(action.type){
    case actions.SIDE_BAR.CHANGE_ACTIVE:
      return { ...state, active: action.payload }
    default:
      return state
  }
}