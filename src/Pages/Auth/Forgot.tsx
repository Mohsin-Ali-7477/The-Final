import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/AuthContext/AuthContext";

const ForgotPassword: React.FC = () => {

  const [email , setEmail] = useState('')
  const navigate = useNavigate()
  const { AuthUser} = useAuth();

  const FormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
   if(email == AuthUser?.email){
    navigate("/Reset")
   }
   console.log(AuthUser?.email)
    
}



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Forgot Password</h2>
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
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/Login" className="text-blue-500 text-sm hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
