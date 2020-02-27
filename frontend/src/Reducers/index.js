import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

//Import multiple reducer configs

import auth from './auth'

export default history =>
  combineReducers({
    auth,
    router: connectRouter(history)
  })
