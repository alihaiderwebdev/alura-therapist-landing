import React from "react";
import aboutusImage from "../../assets/aboutusImage.png";
import { aboutData } from "./data";
import { Icon } from '@iconify/react';
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <h3>{aboutData.header}</h3>
        </div>

        {/* Content Wrapper with border */}
        <div className="about-content-wrapper">
          <div className="about-content">
          {/* Left - Image */}
          <div className="about-image">
            <img 
              src={aboutusImage}
              alt={aboutData.imageAlt} 
            />
          </div>

          {/* Right - Content */}
          <div className="about-text">
            <h2 className="about-title">
              {aboutData.title.line1}
              <br />
              {aboutData.title.line2}
            </h2>
            <p className="about-description">
              {aboutData.description}
            </p>

            {/* Features List */}
            <div className="about-features">
              {aboutData.features.map((feature, index) => (
                <div key={index} className="about-feature">
                  <div className={`feature-icon feature-icon-${feature.iconColor}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {index === 0 && (
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                      )}
                      {index === 1 && (
                        <path d="M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-6h2v18h-2V3zm4 9h2v9h-2v-9zm4-3h2v12h-2V9z" fill="currentColor"/>
                      )}
                      {index === 2 && (
                        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" fill="currentColor"/>
                      )}
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <button className="about-btn">{aboutData.buttonText}</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
