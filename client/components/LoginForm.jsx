import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
      .then(() => this.props.history.push('/home'))
  }

  render () {
    return (
      <div className="container login">
        <img src="/ocean.jpg" alt="harakeke background" className="login-background"/>
        <div className="wrapper">
          <div name="Login_Form" className="form-signin">
            <h1 className="form-signin-heading">Disaster Resource Management</h1>
            <input className="form-control" name='username'
              placeholder='Username'
              onChange={this.handleChange} />
            <input className="form-control" type='password' name='password'
              placeholder='Password'
              onChange={this.handleChange} />
            <button className="btn btn-lg btn-primary btn-block modal-button" onClick={this.handleClick}>Login</button>
            <label>or</label>
            <Link to='/register'>Register</Link>
            <ErrorMessage reducer='auth' />
          </div>
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
