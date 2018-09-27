import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import {logger} from './middleware/logger'

const store = createStore(rootReducer, applyMiddleware(logger))

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)