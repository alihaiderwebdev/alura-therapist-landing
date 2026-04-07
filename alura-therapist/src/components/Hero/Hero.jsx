import React from "react";
import heroImage from "../../assets/heroImage.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero-container">
          {/* Concentric Circles Background */}
          <div className="circles-wrapper">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>

          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              Supporting Recovery.
              <br />
              Empowering Therapists.
            </h1>
            <p className="hero-description">
              The Alura Therapist Portal gives you the tools to monitor, guide, and support clients in their journey — with data-driven insights and compassionate technology.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn-primary">Request Access</button>
              <button className="hero-btn-secondary">Log In</button>
            </div>
          </div>

          {/* Right Content */}
          <div className="hero-image-section">
            {/* Top floating badges */}
            <div className="floating-badges">
                <span className="badge orange">A</span>
                <span className="badge blue">S</span>
            </div>
            
            <img src={heroImage} alt="Therapist" className="hero-main-img" />

            {/* Stats Card */}
            <div className="hero-stats-card">
              <div className="stats-header">
                <p>More than 725 users are <br/> with us on Alura Reset.</p>
                <div className="arrow-icon">↗</div>
              </div>
              <hr />
              <div className="stats-footer">
                <div className="avatar-group">
                  <div className="avatar a1"></div>
                  <div className="avatar a2"></div>
                  <div className="avatar a3"></div>
                </div>
                <span className="stats-count">725+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="features-grid">
        <div className="card light-teal">
          <h3>Guided Recovery</h3>
          <p>Work one-on-one with a certified Therapist to develop personalized mindfulness practices.</p>
          <div className="tags">
            <span>• Personalized Plan</span>
            <span>• Guided Support</span>
            <span>• Tailored Techniques</span>
          </div>
        </div>

        <div className="card-middle">
          <p>Embrace the present moment. Experience mindful living with expert coaching support.</p>
          <div className="card light-blue group-therapy">
            <h3>Group Therapy</h3>
            <p>Connect with others in a supportive environment and learn mindfulness techniques together.</p>
          </div>
        </div>

        <div className="card light-green">
          <h3>Individual Therapy</h3>
          <p>Address specific concerns while incorporating mindfulness practices for improved well-being.</p>
          <div className="flower-icon"></div>
        </div>
      </section>
    </div>
  );
}

export default Hero;