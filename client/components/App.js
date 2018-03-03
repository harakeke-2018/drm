import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Register from './RegisterForm'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
    </div>
  )
}

export default App
