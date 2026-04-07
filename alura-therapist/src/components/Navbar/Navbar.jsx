import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About Us", "How It Works", "Why Chose Us", "Contact Us"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Alura Therapist Portal" />
        </div>

        {/* Center: Menu Items */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li
              key={link}
              className={activeLink === link ? "active" : ""}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Right: Auth Buttons */}
        <div className="navbar-auth">
          <button className="login-btn">Log in</button>
          <button className="request-btn">Request Access</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;