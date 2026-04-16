import React from "react";
import { testimonialsData } from "./data";
import "./Testimonials.css";

function Testimonials({  header = testimonialsData.header,
  title = testimonialsData.title,
  description = testimonialsData.description,
  testimonials = testimonialsData.testimonials,
  showImage = true,}) {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h3>{header}</h3>
        </div>

        {/* Title and Description */}
        <div className="testimonials-intro">
          <h2 className="testimonials-title">
            {title.line1}<br />
            {title.line2}
          </h2>
          <p className="testimonials-description">
            {description}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-slider">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${t.featured ? 'testimonial-card-featured' : ''}`}
            >
              <p className="testimonial-text">{t.text}</p>
            

              <div className="testimonial-author">
                <img src={t.image} alt={t.author} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{t.author}</h4>
                  <p className="author-role">{t.role}</p>
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
