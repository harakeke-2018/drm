import React from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../actions/logout'

const Logout = (props) => {
  return (
    <button onClick={props.logoutUser}>
      Logout
    </button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
