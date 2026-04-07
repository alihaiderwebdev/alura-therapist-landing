import React from "react";
import { plansData } from "./data";
import "./Plans.css";

function Plans() {
  return (
    <section className="plans">
      <div className="plans-container">
        {/* Section Header */}
        <div className="plans-header">
          <h3>{plansData.header}</h3>
        </div>

        {/* Plans Content */}
        <div className="plans-content">
          {/* Left Side - Text */}
          <div className="plans-left">
            <h2 className="plans-title">
              {plansData.title.line1}<br />
              {plansData.title.line2}
            </h2>
            <p className="plans-description">
              {plansData.description}
            </p>
            <button className="plans-btn">{plansData.buttonText}</button>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="plans-right">
            <div className="plans-grid">
              {plansData.planCards.map((card, index) => (
                <div key={index} className="plan-card">
                  <div className="plan-icon" style={{ backgroundColor: `${card.iconColor}15`, color: card.iconColor }}>
                    <span>{card.icon}</span>
                  </div>
                  <h4 className="plan-title">{card.title}</h4>
                  <p className="plan-description">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
