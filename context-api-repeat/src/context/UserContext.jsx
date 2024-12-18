import React, { useState } from 'react'

// creating context (an empty object)
export const UserContext = React.createContext()

// defines a React context provider named UserContextProvider
export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null)

  return (
    // using context variable 'user' and 'setUser'. some components can access them
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}