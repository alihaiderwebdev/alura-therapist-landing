import React, { useState } from "react";
import { featuresData } from "./data";
import "./Features.css";

function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuresData.features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuresData.features.length) % featuresData.features.length);
  };

  return (
    <section className="features">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <h3>{featuresData.header}</h3>
        </div>

        {/* Features Content */}
        <div className="features-content">
          {/* Title and Description */}
          <div className="features-intro">
            <h2 className="features-title">
              {featuresData.title.line1}<br />
              {featuresData.title.line2}
            </h2>
            <p className="features-description">
              {featuresData.description}
            </p>
          </div>

          {/* Navigation and Cards */}
          <div className="features-slider">
            {/* Navigation Arrows */}
            <div className="features-nav">
              <button className="nav-btn" onClick={prevSlide} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="nav-btn" onClick={nextSlide} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Feature Cards */}
            <div className="features-cards">
              {featuresData.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
