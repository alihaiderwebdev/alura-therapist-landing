import React from "react";
import heroImage from "../../assets/heroImage.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero-container">
          {/* Background decorative circles */}
          <div className="ellipses-wrapper">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`ellipse ellipse-${i}`}></div>
            ))}
          </div>

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

          <div className="hero-image-section">
            <div className="floating-badges">
              <span className="badge orange">A</span>
              <span className="badge blue">S</span>
            </div>
            
            <img src={heroImage} alt="Therapist" className="hero-main-img" />

            <div className="hero-stats-card">
              <div className="stats-header">
                <p>More than 725 users are <br/> with us on Alura Reset.</p>
                <div className="arrow-icon">↗</div>
              </div>
              <hr className="card-divider" />
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

      <section className="features-grid">
        {/* Card 1 */}
        <div className="card guided-recovery">
          <h2 className="card-title">Guided Recovery</h2>
          <p className="card-text">
            Work one-on-one with a certified Therapist to develop personalized mindfulness practices.
          </p>
          <div className="tags-container">
            <span className="tag">• Personalized Plan</span>
            <span className="tag">• Guided Support</span>
            <span className="tag tag-slanted">• Tailored Techniques</span>
          </div>
        </div>

        {/* Card 2 - Mixed Layout */}
        <div className="card-middle-group">
          <p className="middle-intro-text">
            Embrace the present moment. Experience mindful living with expert coaching support.
          </p>
          <div className="card group-therapy">
            <h2 className="card-title">Group Therapy</h2>
            <p className="card-text">
              Connect with others in a supportive environment and learn mindfulness techniques together.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card individual-therapy">
          <h2 className="card-title">Individual Therapy</h2>
          <p className="card-text">
            Address specific concerns while incorporating mindfulness practices for improved well-being.
          </p>
          <div className="flower-icon-wrapper">
             <svg viewBox="0 0 100 100" className="flower-svg">
                <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
             </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;