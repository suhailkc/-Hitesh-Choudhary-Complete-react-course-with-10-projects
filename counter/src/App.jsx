import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15
  const [counter, setCounter] = useState(15) // counter is variable, setCounter is a method/function

  const addValue = () => {
    setCounter(counter + 1)
  }

  // // In this setCounter(counter + 1) not work twise(multipe times). only one. because of react 'batching'
  // const addValue = () => {
  //   setCounter(counter + 1)
  //   setCounter(counter + 1)
  // }
  // // To work it, rewrite as below. in this we have control over previous value
  // const addValue = () => {
  //   setCounter((prevCounter) => prevCounter + 1)
  //   setCounter((prevCounter) => prevCounter + 1)
  // }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add value</button> {' '}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
