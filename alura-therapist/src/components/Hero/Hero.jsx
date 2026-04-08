import React from "react";
import heroImage from "../../assets/heroImage.png";
import { heroData, heroFeaturesData } from "./data";
import "./Hero.css";

function Hero() {
  return (
    <div className="page-wrapper">
      <section className="hero">
        {/* The ellipses wrapper now takes the overflow: hidden responsibility */}
        <div className="ellipses-wrapper">
          {heroData.ellipses.map((i) => (
            <div key={i} className={`ellipse ellipse-${i}`}></div>
          ))}
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              {heroData.title.line1}
              <br />
              {heroData.title.line2}
            </h1>
            <p className="hero-description">
              {heroData.description}
            </p>
            <div className="hero-buttons">
              <button className="hero-btn-primary">{heroData.buttons.primary}</button>
              <button className="hero-btn-secondary">{heroData.buttons.secondary}</button>
            </div>
          </div>

          <div className="hero-image-section">
            <div className="floating-badges">
              {heroData.badges.map((badge, index) => (
                <span key={index} className={`badge ${badge.color}`}>{badge.text}</span>
              ))}
            </div>
            
            <img src={heroImage} alt={heroData.heroImageAlt} className="hero-main-img" />

            <div className="hero-stats-card">
              <div className="stats-header">
                <p>More than 725 users are <br/> with us on Alura Reset.</p>
                <div className="arrow-icon">↗</div>
              </div>
              <hr className="card-divider" />
              <div className="stats-footer">
                <div className="avatar-group">
                  {heroData.statsCard.avatars.map((avatar, index) => (
                    <img key={index} src={avatar.src} alt={avatar.alt} className="avatar" />
                  ))}
                </div>
                <span className="stats-count">{heroData.statsCard.count}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-grid">
        {/* Card 1 */}
        <div className="card guided-recovery">
          <h2 className="card-title">{heroFeaturesData.guidedRecovery.title}</h2>
          <p className="card-text">
            {heroFeaturesData.guidedRecovery.description}
          </p>
          <div className="tags-container">
            {heroFeaturesData.guidedRecovery.tags.map((tag, index) => (
              <span key={index} className={`tag${index === 2 ? ' tag-slanted' : ''}`}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Card 2 - Mixed Layout */}
        <div className="card-middle-group">
          <p className="middle-intro-text">
            {heroFeaturesData.middleIntroText}
          </p>
          <div className="card group-therapy">
            <h2 className="card-title">{heroFeaturesData.groupTherapy.title}</h2>
            <p className="card-text">
              {heroFeaturesData.groupTherapy.description}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card individual-therapy">
          <h2 className="card-title">{heroFeaturesData.individualTherapy.title}</h2>
          <p className="card-text">
            {heroFeaturesData.individualTherapy.description}
          </p>
          <div className="flower-icon-wrapper">
             <svg viewBox="0 0 100 100" className="flower-svg">
                <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
             </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;