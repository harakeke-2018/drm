import React from 'react'

import Quote from './Quote'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <h1>Quotes</h1>

      <Navbar />
      <div className='quote'>
        <Quote />
      </div>
    </div>
  )
}

export default App
