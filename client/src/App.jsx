import { Layout } from "./Components/Layout"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { SignupPage } from "./Pages/SignupPage"
import { ProfilePage } from "./Pages/ProfilePage"
import { PlacesFormPage } from "./Pages/PlacesFormPage"
import { SearchRooms } from "./Pages/SearchRooms"

import { Routes, Route } from "react-router-dom"

import { UserContextProvider } from "./Context/UserContext"
import axios from "axios"
axios.defaults.baseURL = 'http://127.0.0.1:4000'
axios.defaults.withCredentials = true
function App() {


  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account/:subpage" element={<ProfilePage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/search-rooms" element={<SearchRooms />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
