import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLenght] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "" // password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numbersAllowed) str += "0987654321"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numbersAllowed, charAllowed]) // cache your function b/w renders as long as these dependencies don't change

  useEffect(() => {
    generatePassword()
  }, [length, numbersAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className="flex text-sm gap-x-6">
        <div className="flex items-center gap-x-1">
          <input 
            type="range" 
            min="6" max="100" 
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLenght(e.target.value)}
            name="" 
            id="" 
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={numbersAllowed}
            onChange={() => {
              setNumbersAllowed((prev) => !prev)
            }}
            name="" 
            id="" 
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            name="" 
            id="" 
          />
          <label htmlFor="charInput">Charecter</label>
        </div>
      </div>
    </div>
  )
}

export default App
