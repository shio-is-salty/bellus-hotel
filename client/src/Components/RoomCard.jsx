export const RoomCard = () => {

  const roomBg = "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
  return (
          <div className="rounded-md shadow-md bg-white">
            <div className="max-w-xs"><img className="w-full bg-cover bg-center rounded-t-md" src={roomBg} alt="" /></div>
            <div className="mt-4">
              <h1 className="text-2xl px-2">AESTHETIC MODERN</h1>
              <p className="max-w-xs text-sm mt-2 px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dui vitae sapien malesuada,</p>
              <button className="flex gap-2 items-center btn-primary float-right my-4 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                Book Now
              </button>
            </div>
          </div>

  )
}
