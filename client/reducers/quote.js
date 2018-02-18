import {
  QUOTE_REQUEST,
  QUOTE_SUCCESS,
  QUOTE_FAILURE
} from '../actions/quote'

import {LOGIN_SUCCESS} from '../actions/login'
import {LOGOUT_SUCCESS} from '../actions/logout'

const initialState = {
  isFetching: false,
  errorMessage: '',
  quote: ''
}

export default function quote (state = initialState, action) {
  switch (action.type) {
    case QUOTE_REQUEST:
      return {
        isFetching: true,
        errorMessage: '',
        quote: ''
      }
    case QUOTE_SUCCESS:
      return {
        isFetching: false,
        quote: action.response,
        errorMessage: ''
      }
    case QUOTE_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        quote: ''
      }
    case LOGIN_SUCCESS:
      return {
        quote: '',
        errorMessage: ''
      }
    case LOGOUT_SUCCESS:
      return {
        quote: '',
        errorMessage: ''
      }
    default:
      return state
  }
}
