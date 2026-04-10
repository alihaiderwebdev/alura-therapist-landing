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
                   <Icon icon={feature.icon} width={24} height={24} className="text-[#47cf52]" />
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
