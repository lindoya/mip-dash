import React from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


import reducers from './store/reducers'
import Routes from './routes'


import './App.css';

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
export default App

// Paleta #0144BF #003494 #002A76 #002059 #001336