import { Hero } from "../Components/Hero"
import { RoomList } from "../Components/RoomList"
import { RoomCard } from "../Components/RoomCard"
import { TestimonialCard } from "../Components/TestimonialCard"
import { Footer } from "../Components/Footer"
export const HomePage = () => {

  return (
    <div className="text-black">
      <section>
        <Hero />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-24 mx-auto w-6 h-6">
        <path fillRule="evenodd" d="M15 3.75A5.25 5.25 0 009.75 9v10.19l4.72-4.72a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 111.06-1.06l4.72 4.72V9a6.75 6.75 0 0113.5 0v3a.75.75 0 01-1.5 0V9c0-2.9-2.35-5.25-5.25-5.25z" clipRule="evenodd" />
      </svg>
      </section>

      <section className="mt-24">
        <div className="flex items-center justify-between">
          <h1 className="max-w-md text-black text-5xl">Choose your luxurious room</h1>
          <p className="max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dui vitae sapien malesuada, non sodales lacus tempor. Donec turpis diam, lacinia ac turpis ut, gravida accumsan est.</p>
        </div>
        <RoomList />
      </section>
    
      <section className="mt-24">
        <div className="flex items-center justify-between">
          <h1 className="max-w-md text-black text-5xl">Our popular rooms</h1>
          <p className="max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dui vitae sapien malesuada, non sodales lacus tempor. Donec turpis diam, lacinia ac turpis ut, gravida accumsan est.</p>
        </div>

        <div className="flex justify-between mt-8">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </section>

      <section className="mt-24">
        <h1 className="text-black text-5xl text-center">What does our customer say?</h1>
        <p className="max-w-xl mx-auto mt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dui vitae sapien malesuada, non sodales lacus tempor.</p>

        <div className="mt-8">
          <div className="flex justify-center gap-4">
            <TestimonialCard />
            <TestimonialCard />

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
