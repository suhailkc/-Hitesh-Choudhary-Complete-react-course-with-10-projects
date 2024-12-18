import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // using context variable 'setUser', which is a function for setting the user
  const {setUser} = useContext(UserContext)

  const handleLogin = (e) => {
    setUser({username, password})
  }

  return (
    <div>
      <input 
        type="text"
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='username'
        value={username}
      />

      {' '}
      
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        value={password}
      />

      {' '}

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login