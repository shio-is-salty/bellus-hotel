import { Link } from "react-router-dom"
export const RoomFilter = () => {
  return (
    <div className="bg-white px-8 py-4 text-black rounded-md shadow-md">
      <h1 className="text-2xl">Find the room that fits you</h1>
      <div className="flex justify-center gap-8 mt-2">
        <label>
          Room Type
          <select className="w-48 block px-4 py-2 font-bold bg-black text-white rounded-md">
            <option>Studio Type</option>
            <option>Sample One</option>
            <option>Sample Two</option>
          </select>
        </label>

        <label>
          Bed Type
          <select className="w-48 block px-4 py-2 font-bold bg-black text-white rounded-md">
            <option className="">King Size</option>
            <option>Sample One</option>
            <option>Sample Two</option>
          </select>
        </label>

        <label>
          Window
          <select className="w-48 block px-4 py-2 font-bold bg-black text-white rounded-md">
            <option className="">Mountain View</option>
            <option>Sample One</option>
            <option>Sample Two</option>
          </select>
        </label>

        <Link to="/search-rooms" className="flex gap-1 items-center btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
           Search
        </Link>
      </div>
    </div>
  )
}
