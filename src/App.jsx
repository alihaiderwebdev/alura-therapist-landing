import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./Auth/Signup/Signup";
import Login from "./Auth/Login/Login";

import "./global.css";

import Layout from "./components/Layout/Layout";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Homepage from "./Pages/Homepage/Homepage";
import AboutPage from "./Pages/Aboutpage/Aboutpage";
import HowThisWorks from "./Pages/HowThisWorks/HowThisWorks";
import Contact from "./Pages/ContactUs/Cotact";


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Toaster position="top-right" />

        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/howitworks" element={<HowThisWorks/>} />
          <Route path="/contact" element={<Contact/>} />      
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
    </AuthProvider>
  );
}

export default App;


