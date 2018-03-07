
import React from 'react'
import {connect} from 'react-redux'

const Header = ({isAuthenticated}) => {
  return (
    <div id="header">
      <h1>
        <span className ='title'>Re:Source <img src="/lifesaver.png" alt="lifesaver image"></img>
        </span>
      </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Header)
