import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import stock from './stock'

const reducers = combineReducers({
  auth,
  quote,
  stock
})

export default reducers
