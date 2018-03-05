import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import stock from './stock'
import logs from './logs'

const reducers = combineReducers({
  auth,
  quote,
  stock,
  logs
})

export default reducers
