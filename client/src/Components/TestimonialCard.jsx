import shiena from "../assets/icons/shiena.png"
export const TestimonialCard = () => {
  return (
    <div className="max-w-md shadow p-8 bg-white rounded-md">
      <div className="max-w-[80px] rounded-full shadow-md mx-auto"><img className="w-full" src={shiena} alt=""/></div>
        <h1 className="text-2xl text-center">Shiena Combo</h1>
        <p className="max-w-sm text-sm mx-auto mt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dui vitae sapien malesuada, non sodales lacus tempor.</p>
    </div>
  )
}
