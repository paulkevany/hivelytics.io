import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

//Import multiple reducer configs

import app from './app'

export default history => 
  combineReducers({
    app,
    router: connectRouter(history)
  })
