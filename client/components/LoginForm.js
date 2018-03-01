import React from 'react'
import {connect} from 'react-redux'

import {loginUser} from '../actions/login'
import ErrorMessage from './ErrorMessage'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds)
  }

  render () {
    return (
      <div className="container">
        <div className="wrapper">
          <form action="#" name="Login_Form" className="form-signin">
            <h1 className="form-signin-heading">Disaster Resource Management</h1>
            <input className="form-control" name='username'
              placeholder='Username'
              onChange={this.handleChange} />
            <input className="form-control" type='password' name='password'
              placeholder='Password'
              onChange={this.handleChange} />
            <button className="btn btn-lg btn-primary btn-block" onClick={this.handleClick}>Login</button>
            <ErrorMessage reducer='auth' />
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: creds => {
      return dispatch(loginUser(creds))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
