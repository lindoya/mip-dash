import action from '../../../../store/actions'

export function changeActive(active) {
  return ([
      {
        type: action.SIDE_BAR.CHANGE_ACTIVE,
        payload: active,
      },
      {
        type: action.NAVIGATE,
        payload: active,
      },
    ])
  
}

