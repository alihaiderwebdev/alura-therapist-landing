import React from "react";
import stressReduce from "../../assets/stressReduce.png";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your secure account and personalize your recovery goals."
    },
    {
      number: 2,
      title: "Track Daily",
      description: "Log feelings, urges, and reflections in your private journal."
    },
    {
      number: 3,
      title: "Learn & Practice",
      description: "Complete CBT lessons and mindfulness exercises.",
      hasRedDot: true
    },
    {
      number: 4,
      title: "See Progress",
      description: "Monitor streaks and growth over time."
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-content">
          {/* Left Side - Steps */}
          <div className="how-it-works-left">
            <h2 className="how-it-works-title">How Alura Reset Works</h2>
            
            <div className="steps-container">
              {steps.map((step) => (
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

            <button className="start-now-btn">Start Now</button>
          </div>

          {/* Right Side - Image and Text */}
          <div className="how-it-works-right">
            <div className="right-content">
              <h2 className="right-title">
                Reduce stress<br />
                and anxiety
              </h2>
              <p className="right-description">
                Counseling can be a helpful way to improve your mental health and well-being.
              </p>
              <div className="right-image-container">
                <img src={stressReduce} alt="Professional counselor" className="right-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
