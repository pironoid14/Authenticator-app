import { Link } from "react-router-dom";
import { LiaToggleOffSolid } from "react-icons/lia";
import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required";
    if (!number) newErrors.number = "Phone number is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleRegister = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log({ name, number, email, password });
    }
  };
  return (
    <div className="bg-amber-300 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
      <h1>MEW</h1>
      <form action="" onSubmit={handleRegister} className="space-y-4">
        <div className="mb-4">
          <label htmlFor=""  className="block text-lg text-gray-700">First name</label>
          <input type="text" name=""  className="rounded-md shadow-sm w-full border focus:outline-none focus:ring mt-1 focus:border-blue-500 px-3 py-2" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="">Last Name</label>
          <input type="text" name="" className="rounded-md shadow-sm w-full border focus:outline-none focus:ring mt-1 focus:border-blue-500 px-3 py-2" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="">Other Names</label>
          <input type="text" name="" className="rounded-md shadow-sm w-full border focus:outline-none focus:ring mt-1 focus:border-blue-500 px-3 py-2" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="">Phone Number</label>
          <input type="number" name="" id="" className="rounded-md shadow-sm w-full border focus:outline-none focus:ring mt-1 focus:border-blue-500 px-3 py-2" value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <p>{errors.number}</p>}

          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" className="rounded-md shadow-sm w-full border focus:outline-none focus:ring mt-1 focus:border-blue-500 px-3 py-2" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="">Password</label>
          <input type="password" name="" id="" className="rounded-md shadow-sm w-full border focus:outline-none focus:ring mt-1 focus:border-blue-500 px-3 py-2" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}

          <div>
            <LiaToggleOffSolid />
          </div>

          <button type="button" onClick={handleRegister} className=" bg-blue-700 rounded-lg px-4 py-2 hover:bg-stone-600 ">Register</button>
          <Link to="/login" className="text-blue-800">Already have an account? Login</Link>
         
          <Link to = "/Home"></Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register