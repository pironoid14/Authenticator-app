import { useState } from "react";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <div className="bg-black border border-black rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-40 relative">
        <h1 className="text-4xl font bold text-center">Login form</h1>
        <form action="">
            <div className="relative my-4">
            <label htmlFor="email"className="text-sm peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-4 top-3">Email</label>
            <input type="email" className="block py-2.5 px-0 text-base text-white bg-transparent w-72 border-0 border-b-2 border-neutral-900" placeholder=""name="email" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
              
            </div>
            <div className="relative my-4">
            <label htmlFor="email"className="text-sm text-black peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-4 top-3 ">Password</label>
            <input type="password" className=" block py-2.5 px-0 text-base text-white bg-transparent w-72 border-0 border-b-2 border-neutral-900" placeholder="" name="password"value={password}
              onChange={(e) => {
                setPassword(e.target.value)}}/>
                
            </div>
            <button type="submit" className="w-full mb-4 text-[18px] roundedbg-black-600 py-2 hover:bg-teal-800"onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}
