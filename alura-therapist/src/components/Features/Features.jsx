import React, { useState } from "react";
import "./Features.css";

function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: "🧘",
      title: "Mindfulness & Coping Toolbox",
      description: "On-demand grounding and breathing tools during high-risk moments."
    },
    {
      icon: "📅",
      title: "Calendar & Progress Dashboard",
      description: "Visualize trends in mood, urges, and journaling activity. Visualize trends in mood."
    },
    {
      icon: "📓",
      title: "Daily Journaling",
      description: "Guided reflections to promote awareness and self-growth. Guided reflections to promote awareness."
    },
    {
      icon: "▶️",
      title: "CBT Lessons",
      description: "Structured therapeutic modules with interactive quizzes. Structured therapeutic modules."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="features">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <h3>Why choose Alura Reset?</h3>
        </div>

        {/* Features Content */}
        <div className="features-content">
          {/* Title and Description */}
          <div className="features-intro">
            <h2 className="features-title">
              Find Your Calm<br />
              Reconnect with You<span className="dot">.</span>
            </h2>
            <p className="features-description">
              Empowering you and your clients with the right tools to make therapy more connected, engaging, and effective.
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
              {features.map((feature, index) => (
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
