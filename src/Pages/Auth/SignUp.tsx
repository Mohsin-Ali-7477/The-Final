import React from "react";
import { useState } from "react";
import { useAuth } from "../../Components/AuthContext/AuthContext";
import {  useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const[password , SetPassword] = useState('')
  const navigate = useNavigate(); 

  const {  setAuthUser , setIsLogin} = useAuth();
  
  

  const FormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setIsLogin(false)
        setAuthUser({
          name: name,
          email: email,
          password: password,
        });
       
       navigate("/Login");
       
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={FormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>{setName(e.target.value)}}
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/Login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
