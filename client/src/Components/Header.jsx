import { useContext } from "react"
import { Link } from "react-router-dom"

import { UserContext } from "../Context/UserContext"
export const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <header className="flex justify-between items-center py-4 text-black">
      <Link to="/" className="flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
          <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
        </svg>
        <h1 className="text-3xl">Bellus</h1>
      </Link>

      <nav className="flex gap-8">
        <Link to="/" className="font-medium">Home</Link>
        <a className="font-medium" href="#">About</a>
        <a className="font-medium" href="#">Contact</a>
      </nav>

      {!user && (
        <nav>
          <Link to="/login" className="px-4 py-2 rounded-md font-medium">Login</Link>
          <Link to="/signup" className="btn-primary">Signup</Link>
        </nav>
      )}

      {user && (
        <Link to="/profile" className="font-bold">{user.name}</Link>
      )}
      </header>
  )
}
