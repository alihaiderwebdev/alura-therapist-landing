import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import Homepage from "./components/Homepage";
import SignUp from "./Auth/Signup/Signup";
import Login from "./Auth/Login/Login";

import "./global.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

