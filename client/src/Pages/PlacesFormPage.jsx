import { useState } from "react"
import { AccountNav } from "../Components/AccountNav"
import { UploadPhoto } from "../Components/UploadPhoto"
import { Perks } from "../Components/Perks"

export const PlacesFormPage = () => {

  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [redirect, setRedirect] = useState(false)
  function inputHeader(text){
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    )
  }

  function inputDescription(text){
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    )
  }

  function preInput(header, description){
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    )
  }
  return (
    <div>
      <AccountNav />
      <form>
        {preInput('Title', "Title for your place. Should be short and catchy as in advertisement")}
        <input
          className="w-full mt-1"
          type="text"
          placeholder="Title, for example: My lovely apartment" />

        {preInput("Address", "Address to this place")}
        <input
          className="w-full mt-1"
          type="text"
          placeholder="Address" />

        {preInput("Photos", "The more the better")}
        <UploadPhoto addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
        
        {preInput("Description", "Description of the place")}
        <textarea className="w-full"/>

        {preInput("Perks", "Select all the perks of your place")}
        <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Perks selected={perks} onChange={setPerks}/>
        </div>

        {preInput("Extra Info", "House rules, etc.")}
        <textarea className="w-full"/>

        {preInput("Check in&out times", "Add check in and out times, remember to have some time window for cleaning the room between guests")}
        <div className="grid sm:grid-cols-3 gap-2">
          <div className="mt-2 -mb-1">
            <h3>Check in time</h3>
            <input className="w-full" type="text" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} placeholder="14:00" />
          </div>

          <div className="mt-2 -mb-1">
            <h3>Check out time</h3>
            <input className="w-full" value={checkOut} onChange={(e) => setCheckOut(e.target.value)}type="text" placeholder="11:00" />
          </div>

          <div className="mt-2 -mb-1">
            <h3>Max number of guests</h3>
            <input className="w-full" type="number" value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} placeholder="14:00" />
          </div>
        </div>

        <button className="my-4 w-full btn-primary">Save</button>
      </form>
    </div>
  )
}
