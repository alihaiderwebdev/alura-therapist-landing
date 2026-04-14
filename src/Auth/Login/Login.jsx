import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../api/auth";
import logo from "../../assets/logo.png";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser(formData);
      
      // Show success message from backend
      toast.success(response.message || "Login successful!");
      
      // Store token and user data
      login(response.user, response.token);
      
      // Redirect to homepage
      navigate("/");
    } catch (error) {
      // Show error message from backend
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="login-left">
        <div className="login-left-content">
          <div className="login-logo-left">
            <img src={logo} alt="Alura Reset" className="login-logo-white" />
            <span className="login-brand-text">Alura<br/>Reset</span>
          </div>
          <h1 className="login-main-title">
            Empower Better Care, Every Session
          </h1>
          <p className="login-main-subtitle">
            Sign in to access your therapy dashboard. Manage clients, review progress reports, and track session outcomes—all in one secure place.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="login-right-content">
          {/* Logo */}
          <div className="login-logo-right">
            <img src={logo} alt="Alura Reset" />
            <span className="login-brand-text-colored">Alura<br/>Reset</span>
          </div>

          {/* Welcome Section */}
          <div className="login-welcome">
            <h2 className="login-welcome-title">Welcome back!</h2>
            <p className="login-welcome-subtitle">
              Sign in to continue your wellness journey
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="login-tabs">
            <button className="login-tab login-tab-active">
              Sign In
            </button>
            <Link to="/signup" className="login-tab">
              Sign Up
            </Link>
          </div>

          {/* Form Section */}
          <div className="login-form-section">
            <h3 className="login-form-title">Sign In</h3>
            <p className="login-form-subtitle">
              Enter your email and password to access your account
            </p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-form-group">
                <label className="login-form-label">
                  Email <span className="login-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="helloexample@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>

              <div className="login-form-group">
                <label className="login-form-label">
                  Password <span className="login-required">*</span>
                </label>
                <div className="login-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="login-input"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={togglePasswordVisibility}
                    disabled={loading}
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
                </div>
              </div>

              <div className="login-options">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  <span>Remember for 30 days</span>
                </label>
                <a href="#" className="login-forgot">Forgot password</a>
              </div>

              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="login-bottom-link">
              <span className="login-bottom-text">
                Don't have an account?{' '}
              </span>
              <Link to="/signup" className="login-link">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;