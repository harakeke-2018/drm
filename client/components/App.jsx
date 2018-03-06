import React from 'react'
import {Route} from 'react-router-dom'

import Header from './Header'
import LoginForm from './LoginForm'
import Register from './RegisterForm'
import Location from './Location'

const App = () => {
  return (
    <div>
      <div><Header/></div>
      <Route exact path='/' component={LoginForm} />
      <Route path='/home' component={Location} />
      <Route exact path='/register' component={Register} />
    </div>
  )
}

export default App
