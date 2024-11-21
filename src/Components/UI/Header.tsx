import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";


const Header = () => {
    const { IsLogin } = useAuth();
    return (
    <>
        <div className="w-screen h-20 flex justify-evenly items-center bg-blue-500 text-white">
           <Link to='/Dashboard'>Dashboard</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/About'>About</Link>
            <h1>User is {IsLogin ? 'Logged In' : 'Logged Out'}</h1>
        </div>
    </>
    )
}

export default Header