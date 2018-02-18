import React from 'react'
import {connect} from 'react-redux'

import Loading from './Loading'
import ErrorMessage from './ErrorMessage'
import {fetchQuote, fetchSecretQuote} from '../actions/quote'

const Quote = (props) => {
  const {onQuoteClick, onSecretQuoteClick, quote} = props

  return (
    <div>
      <div>
        <button onClick={onQuoteClick}>
          Get Public Quote
        </button> {' '}
        <button onClick={onSecretQuoteClick}>
          Get Private Quote
        </button>
      </div>

      <div>
        {quote && <p>{quote}</p>}
        <Loading reducer='quote' />
        <ErrorMessage reducer='quote' />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote.quote,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQuoteClick: () => dispatch(fetchQuote()),
    onSecretQuoteClick: () => dispatch(fetchSecretQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
