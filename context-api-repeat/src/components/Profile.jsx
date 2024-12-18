import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {

  // using context variable 'user'
  const {user} = useContext(UserContext)

  if(!user) {
    return (
      <div>
        <h1>Not logged in</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>User: {user?.username}</h1>
    </div>
  )
}

export default Profile