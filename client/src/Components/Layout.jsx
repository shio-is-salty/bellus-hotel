import { Header } from "./Header"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <Header />
      <Outlet />
    </div>

  )
}
