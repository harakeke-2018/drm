import request from '../utils/api'

export const QUOTE_REQUEST = 'QUOTE_REQUEST'
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS'
export const QUOTE_FAILURE = 'QUOTE_FAILURE'

export function fetchQuote () {
  return function (dispatch) {
    dispatch(requestQuote())
    request('get', '/quote')
    .then(res => {
      dispatch(receiveQuote(res.body.message, res.body.user))
    })
    .catch(err => dispatch(quoteError(err.response.body.message)))
  }
}

export function fetchSecretQuote () {
  return function (dispatch) {
    dispatch(requestQuote())
    request('get', '/secret')
    .then(res => {
      dispatch(receiveQuote(res.body.message, res.body.user))
    })
    .catch(err => dispatch(quoteError(err.response.body.message)))
  }
}

export function receiveQuote (quote, user) {
  quote = user ? `${quote} ${user}` : quote
  return {
    type: QUOTE_SUCCESS,
    isFetching: false,
    response: quote
  }
}

function requestQuote () {
  return {
    type: QUOTE_REQUEST,
    isFetching: true
  }
}

function quoteError (message) {
  return {
    type: QUOTE_FAILURE,
    isFetching: false,
    message
  }
}
