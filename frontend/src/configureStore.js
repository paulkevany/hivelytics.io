import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { apiMiddleware } from 'redux-api-middleware'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import reducers from './Reducers'
const composeEnhancers = composeWithDevTools({})

const logger = createLogger({
  predicate: (getState, action) =>
  action.type.endsWith('FAILURE') || action.error
})

export default history => 
  createStore(
    reducers(history),
    composeEnhancers(
      applyMiddleware(
        apiMiddleware,
        thunkMiddleware,
        routerMiddleware(history),
        logger
      )
    )
  )

