import React from "react";
import stressReduce from "../../assets/stressReduce.png";
import { howItWorksData } from "./data";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-content">
          {/* Left Side - Steps */}
          <div className="how-it-works-left">
            <h2 className="how-it-works-title">{howItWorksData.title}</h2>
            
            <div className="steps-container">
              {howItWorksData.steps.map((step) => (
                <div key={step.number} className="step-item">
                  <div className={`step-number ${step.number === 1 ? 'step-number-primary' : ''}`}>
                    {step.number}
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">
                      {step.title}
                      {step.hasRedDot && <span className="red-dot">.</span>}
                    </h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="start-now-btn">{howItWorksData.buttonText}</button>
          </div>

          {/* Right Side - Image and Text */}
          <div className="how-it-works-right">
            <div className="right-content">
              <h2 className="right-title">
                {howItWorksData.rightSection.title.line1}<br />
                {howItWorksData.rightSection.title.line2}
              </h2>
              <p className="right-description">
                {howItWorksData.rightSection.description}
              </p>
              <div className="right-image-container">
                <img src={stressReduce} alt={howItWorksData.rightSection.imageAlt} className="right-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
