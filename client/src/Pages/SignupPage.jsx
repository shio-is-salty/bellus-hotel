import { useState } from "react"

import axios from "axios"
export const SignupPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function register(e){
    e.preventDefault()
    try{
      axios.post('/register', {
        name,
        email,
        password
      })
      alert('Registration Successful!')
    }catch(e){
      alert('Registration Failed: Email already in use')
    }



  }
  return (
    <div className="mt-24 grow flex flex-col items-center justify-around">
      <h1 className="text-4xl text-center">Signup</h1>
      <form className="max-w-sm mt-8" onSubmit={register}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full mt-4"
            type="text"
            placeholder="Juan DelaCruz" />
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

        <button className="btn-primary mt-4 float-right">Signup</button>
      </form>
    </div>
  )
}
