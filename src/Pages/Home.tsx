import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="bg-yellow-100">
        <h1 className="text-3xl text-red-500 text-center" >HOME PAGE</h1>
        <Link to="/login">Already have an account? Login</Link>
        <Link to="/register">Do you have an Account Register</Link>
    </div>
  )
}

export default Home