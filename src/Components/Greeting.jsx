import React from 'react'

// props = properties
function Greeting(props) {
  return (
    <div>
      {/* <h1>Welcome to My First React App</h1>
      <p>This is my first component!</p> */}

      <h1>Welcome, {props.name}</h1>
      <p>This is a message from {props.city}</p>


    </div>
  )
}

export default Greeting
