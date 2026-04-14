import React, { useState } from "react";
import { pricingData } from "./data";
import "./Pricing.css";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="pricing">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header-label">
          <p>{pricingData.header}</p>
        </div>

        {/* Title and Description */}
        <div className="pricing-intro">
          <h2 className="pricing-title">
            {pricingData.title.line1}<br />
            {pricingData.title.line2}
          </h2>
          <p className="pricing-description">
            {pricingData.description}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="billing-toggle">
          <button 
            className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            {pricingData.billingOptions.monthly}
          </button>
          <button 
            className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            {pricingData.billingOptions.yearly}
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {pricingData.plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPopular ? 'pricing-card-popular' : ''}`}>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                {plan.price !== "Free" && <span className="price-period">/year</span>}
              </div>
              <p className="plan-period">{plan.period}</p>
              
              <button className={`plan-button ${plan.isPopular ? 'plan-button-white' : ''}`}>
                {plan.buttonText}
              </button>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2"/>
                      <path d="M6 10l2.5 2.5L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
