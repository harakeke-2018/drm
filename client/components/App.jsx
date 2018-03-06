import React from 'react'
import {Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import LoginForm from './LoginForm'
import Register from './RegisterForm'

const App = () => {
  return (
    <div>
      <div><Header/></div>
      <Route exact path='/' component={LoginForm} />
      <Route path='/home' component={Home} />
      <Route exact path='/register' component={Register} />
    </div>
  )
}

export default App
