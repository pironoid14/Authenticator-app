import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log({ email, password });
    }
  };
  return (
    <div className="bg-amber-300 text-black justify-center flex h-[100vh] items-center rounded-md">
      <div className=" border-black rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-40 relative">
        <form action="" onSubmit={handleLogin} className="bg-white">
          <div className="relative my-4">
            <h1 className="text-3xl font bold text-center">MEW</h1>
            <h3 className="text-2xl font bold text-center">Login Form</h3>
            <label htmlFor="email" className="text-sm peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-4 top-3">Email</label>
            <input type="email" className="block py-2.5 px-0 text-base text-black bg-transparent w-72 border-0 border-b-2 border-neutral-900" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

          </div>
          <div className="relative my-4">
            <label htmlFor="email" className="text-sm text-black peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-4 top-3 ">Password</label>
            <input type="password" className=" block py-2.5 px-0 text-base text-black bg-transparent w-72 border-0 border-b-2 border-neutral-900" name="password" value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }} />
            {errors.password && <p className="text-red-500">{errors.password}</p>}

          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-blue-700 rounded-lg px-4 py-2 w-full hover:bg-teal-800" onClick={handleLogin}>Login</button>
          </div>
          <Link to="/register" className="text-sky-600">Do you have an Account Register</Link>
          <Link to="/Home"></Link>
        </form>
      </div>
    </div>
  )
}
