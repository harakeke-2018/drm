import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'

const reducers = combineReducers({
  auth,
  quote
})

export default reducers
