export const RoomList = () => {
  const hotelRoomImg = "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
  return (
    <div>
        <div className="mt-8 flex gap-2">
          <div className="max-w-sm shadow-md">
            <img className="w-full bg-cover bg-center rounded-md" src={hotelRoomImg} alt="" />
          </div>
          <div className="max-w-sm shadow-md">
            <img className="w-full bg-cover bg-center rounded-md" src={hotelRoomImg} alt="" />
          </div>
          <div className="max-w-sm shadow-md">
            <img className="w-full bg-cover bg-center rounded-md" src={hotelRoomImg} alt="" />
          </div>
        </div>

        <div className="mt-4 inline-flex gap-4 justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
          </svg>
        </div>
    </div>
  )
}
