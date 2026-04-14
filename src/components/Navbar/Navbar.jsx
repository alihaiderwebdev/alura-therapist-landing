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
          {navbarData.navLinks.map((link) => (
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
          <Link to="/login" className="login-btn">{navbarData.loginButtonText}</Link>
          <Link to="/signup" className="request-btn">{navbarData.requestButtonText}</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;