import React from 'react'
import RegisterForm from './RegisterForm'
import "./App.css"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="App">
      <RegisterForm/>
   </div>
    </>
  )
}

export default App
