import { useState, useContext } from "react"
import { UserContext } from "../Context/UserContext"
import { Navigate } from "react-router-dom"

import axios from "axios"
export const ProfilePage = () => {
  const [redirect, setRedirect] = useState(false)

  const {user, setUser} = useContext(UserContext)

  if(!user){
    return <Navigate to="/login" />
  }

  async function logout(){
    await axios.post('/logout')
    setUser(null)
    setRedirect(true)
  }

  if(redirect){
    return <Navigate to="/" />
  }

  return (
    <div className="mt-8">
      <h1 className="text-4xl">Profile</h1>
      <h2 className="mt-2 text-xl">Name: {user.name}</h2>
      <h2 className="mt-2 text-xl">Email: {user.email}</h2>
      <button onClick={logout} className="mt-2 btn-primary">Logout</button>

    </div>
  )
}
