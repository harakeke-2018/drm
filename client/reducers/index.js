import {combineReducers} from 'redux'

import auth from './auth'
import stock from './stock'
import logs from './logs'

const reducers = combineReducers({
  auth,
  stock,
  logs
})

export default reducers
