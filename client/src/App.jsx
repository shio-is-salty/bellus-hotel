import { Layout } from "./Components/Layout"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { SignupPage } from "./Pages/SignupPage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
  )
}

export default App
