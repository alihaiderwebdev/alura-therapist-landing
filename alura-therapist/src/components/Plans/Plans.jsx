import React from "react";
import "./Plans.css";

function Plans() {
  const planCards = [
    {
      icon: "👥",
      iconColor: "#3ab7a9",
      title: "Community Safety Plan",
      description: "Support network & emergency contacts"
    },
    {
      icon: "✓",
      iconColor: "#f59e0b",
      title: "Relapse Prevention Plan",
      description: "Coping strategies & prevention checklist"
    },
    {
      icon: "🗺️",
      iconColor: "#3b82f6",
      title: "Travel Plans",
      description: "Maintain recovery routines while away"
    },
    {
      icon: "💚",
      iconColor: "#22c55e",
      title: "Reasons for Change",
      description: "Personal motivations for staying committed"
    }
  ];

  return (
    <section className="plans">
      <div className="plans-container">
        {/* Section Header */}
        <div className="plans-header">
          <h3>Alura Plans</h3>
        </div>

        {/* Plans Content */}
        <div className="plans-content">
          {/* Left Side - Text */}
          <div className="plans-left">
            <h2 className="plans-title">
              Transforming data<br />
              into therapeutic insight
            </h2>
            <p className="plans-description">
              Alura Reset provides clinicians with a data-informed bridge between sessions, enabling more precise, personalized care. Gain real-time insight into client progress through mood logs, journaling patterns, and behavioral markers that reveal underlying trends. Guided CBT and mindfulness tools empower clients to engage actively in their recovery, creating richer, more actionable data for your treatment planning. By integrating these insights, sessions become more focused, efficient, and therapeutically impactful — helping you deliver evidence-based care with greater continuity and clinical depth.
            </p>
            <button className="plans-btn">Learn More</button>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="plans-right">
            <div className="plans-grid">
              {planCards.map((card, index) => (
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
