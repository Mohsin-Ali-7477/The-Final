import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/Forgot";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import Dashboard from "./Pages/Dashboard";
import ResetPassword from "./Pages/Auth/Reset";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Signup/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/Reset" element={<ResetPassword/>}/>
        <Route
            path="/dashboard"
            element={
             <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

<Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />

      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
