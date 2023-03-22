import { useState } from "react"

import axios from "axios"
export const UploadPhoto = ({addedPhotos, onChange}) => {
  const [photoLink, setPhotoLink] = useState('')

  async function addPhotoByLink(e){
    e.preventDefault()
    const {data:filename} = await axios.post('/upload-by-link', {
      link:photoLink,
    })

    onChange(prev => {
      return [...prev, filename]
    })

    setPhotoLink('')
  }

  async function uploadPhoto(e){
    e.preventDefault()
    const files = e.target.files
    const data = new FormData()
    data.set('photos', files)

    for(let i=0; i<files.length; i++){
      data.append('photos', files[i])
    }

    const {data:filenames} = await axios.post('/upload', data, {
      headers: {'Content-type': 'multipart/form-data'}
    })

    onChange(prev => {
      return [...prev, ...filenames]
    })
  }

  return (
    <>
      <div className="flex gap-2 mt-4">
        <input 
          onChange={(e) => setPhotoLink(e.target.value)}
          value={photoLink}
          className="w-full"
          type="text" placeholder="Add photo's using link" />
        <button onClick={addPhotoByLink} className="btn-primary px-4 rounded-2xl">Add&nbsp;Photo</button>
      </div>

      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4">
        {addedPhotos.length > 0 && addedPhotos.map(link => {
          return (
            <div className="h-40 flex" key={link}>
              <img className="rounded-2xl w-full object-cover"
                src={'http://localhost:4000/uploads/'+link} alt="" />
            </div>
          )
        })}

        <label className="h-40 flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer">
          <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
          Upload
        </label>


      </div>
    </>
  )
}
