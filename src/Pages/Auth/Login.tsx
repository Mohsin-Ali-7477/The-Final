import React, { useState } from "react";
import { useAuth } from "../../Components/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email , setEmail] = useState('')
  const[password , SetPassword] = useState('')
const navigate = useNavigate()
  const { AuthUser , setIsLogin } = useAuth();

  const FormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
       if(email == AuthUser?.email){
        if( password == AuthUser?.password){
        setIsLogin(true)
        navigate("/Dashboard")
       }
       else{
        alert("Incorrect password")
       }
      }
       else{
        setIsLogin(false)
        alert("Please SignUp First User Not Found")
       }
        
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={FormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>{SetPassword(e.target.value)}}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/forgotpassword" className="text-blue-500 text-sm hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


