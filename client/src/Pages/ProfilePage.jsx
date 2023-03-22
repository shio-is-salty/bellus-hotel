import { useState, useContext } from "react"
import { UserContext } from "../Context/UserContext"
import { Navigate, useLocation } from "react-router-dom"

import { AccountNav } from "../Components/AccountNav"
import { PlacesPage } from "../Pages/PlacesPage"

import axios from "axios"
export const ProfilePage = () => {
  const [redirect, setRedirect] = useState(false)
  const {user, setUser} = useContext(UserContext)

  const {pathname} = useLocation()
  const subpage = pathname.split('/')?.[2]

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
      <AccountNav />
      
      {subpage === 'profile' && (
        <div>
        <h1 className="text-4xl">Profile</h1>
        <h2 className="mt-2 text-xl">Name: {user.name}</h2>
        <h2 className="mt-2 text-xl">Email: {user.email}</h2>
        <button onClick={logout} className="mt-2 btn-primary">Logout</button>
        </div>

      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
      

    </div>
  )
}
