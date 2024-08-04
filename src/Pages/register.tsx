import { Link } from "react-router-dom";
import { LiaToggleOffSolid } from "react-icons/lia";
import { useState } from "react";
export const Register = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const handleRegister = () => {
    console.log();
  };
  return (
    <div>
        <h1>MEW</h1>
       <form action="">
        <div>
            <label htmlFor="">First name</label>
            <input type="text" name="" value={name} 
            onChange={(e) => setName(e.target.value)} 
            />

            <label htmlFor="">Last Name</label>
            <input type="text" name="" value={name}
            onChange={(e) => setName(e.target.value)}
            />

            
            <label htmlFor="">Other Names</label>
            <input type="text" name="" value={name}
            onChange={(e) => setName(e.target.value)}
            />
            
            <label htmlFor="">Phone Number</label>
            <input type="number" name="" id="" value={number}
            onChange={(e) => setNumber(e.target.value)}
            />

            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Password</label>
            <input type="password" name="" id="" value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <div>
            <LiaToggleOffSolid />
            </div>

            <button type="button" onClick={handleRegister}>Register</button>
            <Link to="login">Already have an account? Login</Link>

        </div>
        </form> 
    </div>
  )
}

export default Register