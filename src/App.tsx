import {Home} from "./Pages/Home"
import  {Login}  from "./Pages/login";
import {Register} from "./Pages/register";
import { Routes, Route } from "react-router-dom";

function App() {

  

  return (
    <>
      <div >
        
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
