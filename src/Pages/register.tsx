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
      // Proceed with form submission
      console.log({ name, number, email, password });
    }
  };
  return (
    <div className="bg-red-500 flex-col justify-center items-center">
      <h1>MEW</h1>
      <form action="" onSubmit={handleRegister}>
        <div>
          <label htmlFor="" className="text-lg text-red-500">First name</label>
          <input type="text" name="" className="rounded-s-lg" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="">Last Name</label>
          <input type="text" name="" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="">Other Names</label>
          <input type="text" name="" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="">Phone Number</label>
          <input type="number" name="" id="" value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <p>{errors.number}</p>}

          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="">Password</label>
          <input type="password" name="" id="" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}

          <div>
            <LiaToggleOffSolid />
          </div>

          <button type="button" onClick={handleRegister} className=" bg-blue-700 rounded-s-lg ">Register</button>
          <Link to="/login">Already have an account? Login</Link>
          <Link to="/register">Do you have an Account Register</Link>
          <Link to = "/Home"></Link>
        </div>
      </form>
    </div>
  )
}

export default Register