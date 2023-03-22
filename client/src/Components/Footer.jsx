export const Footer = () => {
  return (
    <footer className="flex justify-between mt-40 bg-black w-full px-8 py-12 text-white rounded-t-md">
      <div>
        <h1 className="text-3xl">Bellus</h1>
        <p className="max-w-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dui vitae sapien malesuada,</p>


      </div>

      <div className="flex gap-20">
        <div>
        <h1 className="text-2xl">Links</h1>
        <nav className="flex flex-col gap-2">
          <a className="mt-4" href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        </div>
        <div>
        <h1 className="text-2xl">Resources</h1>
        <nav className="flex flex-col gap-2">
          <a className="mt-4" href="#">Our Work</a>
          <a href="#">Services</a>
          <a href="#">FAQ</a>
        </nav>
        </div>
      </div>


      {/* <form className="flex flex-col gap-2 max-w-lg"> */}
      {/*   <h1 className="text-3xl">Contact Us</h1> */}
      {/*   <label> */}
      {/*     Email */}
      {/*     <input className="" type="email" placeholder="email@example.com" /> */}
      {/*   </label> */}
      {/*   <label> */}
      {/*     Subject */}
      {/*     <input className="" type="text" placeholder="subject" /> */}
      {/*   </label> */}
      {/*   <label> */}
      {/*     Message  */}
      {/*     <textarea placeholder="your message..." /> */}
      {/*   </label> */}
      {/*   <button className="btn-primary mt-1">Send Message</button> */}
      {/**/}
      {/* </form> */}
    </footer>
  )
}
