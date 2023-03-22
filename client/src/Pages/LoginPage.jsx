import { useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

import { UserContext } from "../Context/UserContext"
export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const {setUser} = useContext(UserContext)

  async function login(e){
    e.preventDefault()
    try{
      const {data} = await axios.post('/login', {
        email,
        password,
      })

      setUser(data)
      alert('Login successful')
      setRedirect(true)
    }catch(e){
      alert('Login failed incorrect username/password')
    }
  }

  if(redirect){
    return <Navigate to="/" />
  }
  return (
    <div className="mt-24 grow flex flex-col items-center justify-around">
      <h1 className="text-4xl text-center">Login</h1>
      <form className="max-w-sm mt-8" onSubmit={login}>
          <input
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             className="w-full mt-4"
             type="email"
             placeholder="email@example.com" />
          <input 
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             className="w-full mt-4" 
             type="password"
             placeholder="password" />
        <button className="btn-primary mt-4 float-right">Login</button>
      </form>
    </div>
  )
}
