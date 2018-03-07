
import React from 'react'
import {connect} from 'react-redux'

import Logout from './Logout'

const Header = ({isAuthenticated}) => {
  return (
    <div id="header">
      <h1>
        <span className ='title'>Re:Source <img src="/lifesaver.png" alt="lifesaver image"></img>
        </span>
      </h1>
      <div id="logout">
        {isAuthenticated && <Logout />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Header)
