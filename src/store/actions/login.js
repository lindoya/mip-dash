import { push } from 'connected-react-router'

export const login = () => dispatch => {
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log('aqui')
      dispatch(push('/logged'))
    }, 3000)
  })
}

