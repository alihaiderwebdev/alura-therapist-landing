import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navbarData } from "./data";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt={navbarData.logoAlt} />
          </Link>
        </div>

        {/* Center: Menu Items */}
        <ul className="navbar-menu">
          <li
            className={activeLink === "Home" ? "active" : ""}
            onClick={() => setActiveLink("Home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={activeLink === "About" ? "active" : ""}
            onClick={() => setActiveLink("About")}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={activeLink === "How It Works" ? "active" : ""}
            onClick={() => setActiveLink("How It Works")}
          >
            <Link to="/howitworks">How It Works</Link>
          </li>
          <li
            className={activeLink === "Contact" ? "active" : ""}
            onClick={() => setActiveLink("Contact")}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right: Auth Buttons */}
        <div className="navbar-auth">
          <Link to="/login" className="login-btn">{navbarData.loginButtonText}</Link>
          <Link to="/signup" className="request-btn">{navbarData.requestButtonText}</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;