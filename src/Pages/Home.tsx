import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="bg-yellow-100">
        <h1 className="text-3xl text-red-500 text-center" >HOME PAGE</h1>
        <Link to="/login" className="text-blue-800"> Login</Link>
        <Link to="/register" className="text-blue-800" > Register</Link>
    </div>
  )
}

export default Home