import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import LoginForm from './LoginForm'
import Register from './RegisterForm'
import Location from './Location'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/location' component={Location} />
      <Route path='/home' component={Home} />
      <Route exact path='/register' component={Register} />
    </div>
  )
}

export default App
