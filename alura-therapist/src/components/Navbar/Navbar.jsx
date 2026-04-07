import React, { useState } from "react";
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
          <img src={logo} alt={navbarData.logoAlt} />
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
          <button className="login-btn">{navbarData.loginButtonText}</button>
          <button className="request-btn">{navbarData.requestButtonText}</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;