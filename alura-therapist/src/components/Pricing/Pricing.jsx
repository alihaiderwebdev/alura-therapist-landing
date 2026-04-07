import React, { useState } from "react";
import "./Pricing.css";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Reset Starter",
      price: "Free",
      period: "Trial for 7 days",
      features: [
        "Up to 10 active clients",
        "Client dashboard & insights",
        "Safety plan tools",
        "Limited CBT module library",
        "Mobile companion app access",
        "Email support"
      ],
      buttonText: "Get Plus Exclusive",
      isPopular: false
    },
    {
      name: "Reset Plus",
      price: "$299",
      period: "Annual Subscription",
      features: [
        "All Starter features, plus:",
        "Up to 50 active clients",
        "In-app Alura for clin. referrals",
        "Assignment management",
        "Advanced progress reports",
        "In-app secure messaging"
      ],
      buttonText: "Get Plus Exclusive",
      isPopular: true
    },
    {
      name: "Reset Pro",
      price: "$799",
      period: "Annual Subscription",
      features: [
        "Unlimited clients",
        "Multi-therapist dashboard",
        "Custom branding",
        "Integration with EHR + case mgr",
        "Priority support",
        "Dedicated account manager"
      ],
      buttonText: "Get Plus Exclusive",
      isPopular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header-label">
          <p>Plan & Subscription</p>
        </div>

        {/* Title and Description */}
        <div className="pricing-intro">
          <h2 className="pricing-title">
            Find the Plan<br />
            That Fits Your Workflow
          </h2>
          <p className="pricing-description">
            Choose from flexible subscription options designed for solo practitioners, group practices, and recovery programs.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="billing-toggle">
          <button 
            className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
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
