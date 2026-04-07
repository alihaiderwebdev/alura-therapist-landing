import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src={logo} alt="Alura Therapist Logo" />
      </div>

      {/* Center: Menu Items */}
      <ul className="navbar-center">
        <li>Home</li>
        <li>About Us</li>
        <li>How It Works</li>
        <li>Why Choose Us</li>
        <li>Contact Us</li>
      </ul>

      {/* Right: Buttons */}
      <div className="navbar-right">
        <button className="btn-login">Login</button>
        <button className="btn-request">Request Access</button>
      </div>
    </nav>
  );
}

export default Navbar;