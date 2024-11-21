import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/AuthContext/AuthContext";

const ResetPassword: React.FC = () => {
    const[password , SetPassword] = useState('')
    const navigate = useNavigate()
    const { AuthUser,setAuthUser} = useAuth();

    const FormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (AuthUser) {
            setAuthUser({ ...AuthUser, password });
        }
        navigate("/Login")
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Reset Password</h2>
        <form onSubmit={FormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{SetPassword(e.target.value)}}
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your new password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Update Password
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

export default ResetPassword;
