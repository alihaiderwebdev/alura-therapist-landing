import React from "react";
import { testimonialsData } from "./data";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h3>{testimonialsData.header}</h3>
        </div>

        {/* Title and Description */}
        <div className="testimonials-intro">
          <h2 className="testimonials-title">
            {testimonialsData.title.line1}<br />
            {testimonialsData.title.line2}
          </h2>
          <p className="testimonials-description">
            {testimonialsData.description}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-slider">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${testimonial.featured ? 'testimonial-card-featured' : ''}`}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-quote-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M10 18c0-3.314 2.686-6 6-6V8c-5.523 0-10 4.477-10 10v6h10v-6h-6zm16 0c0-3.314-2.686-6-6-6V8c5.523 0 10 4.477 10 10v6H20v-6h6z" fill="currentColor"/>
                </svg>
              </div>

              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
