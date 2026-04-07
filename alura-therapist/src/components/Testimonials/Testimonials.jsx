import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      text: "Alura changed how I support my clients. The insights are game-changing. The daily tracking helps me understand patterns I never noticed before.",
      author: "Dr. Sarah Johnson",
      role: "Licensed Therapist",
      image: "https://i.pravatar.cc/150?img=1",
      featured: false
    },
    {
      text: "Alura changed how I support my clients. The insights are game-changing. Alura changed how I support my clients. The insights are game-changing. Alura changed.",
      author: "ABS Sakib Zaman",
      role: "Clinical Psychologist",
      image: "https://i.pravatar.cc/150?img=2",
      featured: true
    },
    {
      text: "Alura changed how I support my clients. The insights are game-changing. Alura changed how I support my clients. The insights are game-changing. Alura changed.",
      author: "ABS Sakib Zaman",
      role: "Recovery Counselor",
      image: "https://i.pravatar.cc/150?img=3",
      featured: false
    },
    {
      text: "Alura changed how I support my clients. The insights are game-changing. Alura changed how I support my clients. The insights are game-changing.",
      author: "ABS Sakib Zaman",
      role: "Mental Health Specialist",
      image: "https://i.pravatar.cc/150?img=4",
      featured: false
    },
    {
      text: "The CBT modules and progress tracking have transformed my practice. My clients are more engaged than ever before.",
      author: "Michael Chen",
      role: "Addiction Counselor",
      image: "https://i.pravatar.cc/150?img=5",
      featured: false
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h3>Testimonials</h3>
        </div>

        {/* Title and Description */}
        <div className="testimonials-intro">
          <h2 className="testimonials-title">
            Progress You Can<br />
            Feel And See
          </h2>
          <p className="testimonials-description">
            Behind every chart and streak is a human story of growth. Alura captures the moments of resilience, reflection, and renewal that make lasting recovery.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
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
