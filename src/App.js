import React from 'react'
import Greeting from './Components/Greeting'

function App() {
  return (
    <div>
      <Greeting name="Alice" city="Dallas" />
      <Greeting name="Dale" city="San Diego" />
      <Greeting name="Steve" city="Tallahassee" />
      <Greeting name="Larry" city="Chicago" />

    </div>
  )
}

export default App
