import { RoomFilter } from "./RoomFilter"
import heroBg from "../assets/bg/hero-bg.png"
export const Hero = () => {
  return (
    <div className="relative bg-black text-white bg-hero repeat bg-no-repeat bg-center bg-cover rounded-md">
      <div className="overlay py-12 px-8 rounded-md">
        <h1 className="text-5xl max-w-lg">The luxury room of your choice is right for you.</h1>
        <p className="mt-6 mb-20 max-w-lg">thas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className="absolute -bottom-10 max-w-4xl left-0 right-0 mx-auto">
        <RoomFilter />
       </div>
    </div>
  )
}
