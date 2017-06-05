import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote'

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
