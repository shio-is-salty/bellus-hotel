export const SignupPage = () => {
  return (
    <div className="mt-24 grow flex flex-col items-center justify-around">
      <h1 className="text-4xl text-center">Signup</h1>
      <form className="max-w-sm mt-8">
          <input className="w-full mt-4" type="text" placeholder="Juan DelaCruz" />
          <input className="w-full mt-4" type="email" placeholder="email@example.com" />
          <input className="w-full mt-4" type="password" placeholder="password" />

        <button className="btn-primary mt-4 float-right">Signup</button>
      </form>
    </div>
  )
}
