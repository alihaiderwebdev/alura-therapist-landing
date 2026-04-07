import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { signUpData } from "./data";
import "./SignUp.css";

function SignUp() {
  const [activeTab, setActiveTab] = useState("signUp");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-page">
      {/* Left Section */}
      <div className="signup-left">
        <div className="signup-left-content">
          <div className="signup-logo-left">
            <img src={logo} alt="Alura Reset" className="signup-logo-white" />
            <span className="signup-brand-text">Alura<br/>Reset</span>
          </div>
          <h1 className="signup-main-title">
            {signUpData.leftSection.title}
          </h1>
          <p className="signup-main-subtitle">
            {signUpData.leftSection.subtitle}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-right-content">
          {/* Logo */}
          <div className="signup-logo-right">
            <img src={logo} alt={signUpData.rightSection.logoAlt} />
            <span className="signup-brand-text-colored">Alura<br/>Reset</span>
          </div>

          {/* Welcome Section */}
          <div className="signup-welcome">
            <h2 className="signup-welcome-title">
              {signUpData.rightSection.welcomeTitle}
            </h2>
            <p className="signup-welcome-subtitle">
              {signUpData.rightSection.welcomeSubtitle}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="signup-tabs">
            <Link 
              to="/login"
              className="signup-tab"
            >
              {signUpData.rightSection.tabNavigation.signIn}
            </Link>
            <button 
              className="signup-tab signup-tab-active"
            >
              {signUpData.rightSection.tabNavigation.signUp}
            </button>
          </div>

          {/* Form Section */}
          <div className="signup-form-section">
            <h3 className="signup-form-title">
              {signUpData.rightSection.form.title}
            </h3>
            <p className="signup-form-subtitle">
              {signUpData.rightSection.form.subtitle}
            </p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="signup-form-grid">
                {signUpData.rightSection.form.fields.map((field, index) => (
                  <div 
                    key={field.name} 
                    className={`signup-form-group ${
                      field.name === 'password' 
                        ? 'signup-form-group-full' 
                        : 'signup-form-group-half'
                    }`}
                  >
                    <label className="signup-form-label">
                      {field.label}
                      {field.required && <span className="signup-required">*</span>}
                    </label>
                    <div className="signup-input-wrapper">
                      <input
                        type={field.name === 'password' && showPassword ? 'text' : field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="signup-input"
                        required={field.required}
                      />
                      {field.name === 'password' && (
                        <button
                          type="button"
                          className="signup-password-toggle"
                          onClick={togglePasswordVisibility}
                        >
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                          >
                            {showPassword ? (
                              <>
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                              </>
                            ) : (
                              <>
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                <line x1="1" y1="1" x2="23" y2="23"/>
                              </>
                            )}
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button type="submit" className="signup-submit-btn">
                {signUpData.rightSection.form.submitButton}
              </button>
            </form>

            <div className="signup-bottom-link">
              <span className="signup-bottom-text">
                {signUpData.rightSection.form.bottomText.text}{' '}
              </span>
              <Link to={signUpData.rightSection.form.bottomText.linkUrl} className="signup-link">
                {signUpData.rightSection.form.bottomText.linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;