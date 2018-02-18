import React from 'react'
import {Link} from 'react-router-dom'

const Links = ({active}) => {
  return (
    <div>
      {active === 'Home' ? 'Home' : <Link to='/'>Home</Link>} | {' '}
      {active === 'Register' ? 'Register' : <Link to='/register'>Register</Link>} | {' '}
      {active === 'Login' ? 'Login' : <Link to='/login'>Login</Link>}
    </div>
  )
}

export default Links
