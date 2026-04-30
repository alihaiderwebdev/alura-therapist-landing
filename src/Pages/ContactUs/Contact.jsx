// import React from 'react'
// import Hero from "../../components/Hero/Hero";

// const Contact = () => {
//   return (
//     <div className="homepage">
//       {/* Navbar */}

//       {/* Hero Section */}
//       <Hero
//         title={{ line1: "Contact Alura Reset", line2: "Get in Touch With Us" }}
//         description="We're here to support your wellness journey. Reach out — we'd love to hear from you."
//         showImage={false}
//       />

//       {/* Contact Info & Form */}
//       <div className="simple-contact-container" style={{maxWidth: 600, margin: "32px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.07)"}}>
//         <div style={{marginBottom: 24}}>
//           <h2 style={{color: "#2a8a7f", marginBottom: 8}}>Contact Information</h2>
//           <p>Email: <a href="mailto:dummy@email.com">dummy@email.com</a></p>
//           <p>Phone: <a href="tel:+10000000000">+1 000 000 0000</a></p>
//           <p>Address: 456 Example Street, Demo City</p>
//         </div>
//         <form style={{display: "flex", flexDirection: "column", gap: 16}}>
//           <label>
//             Name
//             <input type="text" name="name" required placeholder="Your Name" style={{padding: 10, border: "1px solid #cce3e0", borderRadius: 6, marginTop: 4, background: "#f9fbfc"}} />
//           </label>
//           <label>
//             Email
//             <input type="email" name="email" required placeholder="you@email.com" style={{padding: 10, border: "1px solid #cce3e0", borderRadius: 6, marginTop: 4, background: "#f9fbfc"}} />
//           </label>
//           <label>
//             Message
//             <textarea name="message" required placeholder="Your message" rows={4} style={{padding: 10, border: "1px solid #cce3e0", borderRadius: 6, marginTop: 4, background: "#f9fbfc"}} />
//           </label>
//           <button type="submit" style={{background: "#3ab7a9", color: "#fff", border: "none", borderRadius: 6, padding: 12, fontSize: "1rem", cursor: "pointer", marginTop: 8}}>
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import Hero from "../../components/Hero/Hero";
import "./contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const handleReset = () => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); };

  return (
    <div className="homepage">

      {/* Hero Section */}
      <Hero
        title={{ line1: "Contact Alura Reset", line2: "Get in Touch With Us" }}
        description="We're here to support your wellness journey. Reach out — we'd love to hear from you."
        showImage={false}
      />

      {/* Contact Card */}
      <div className="contact-wrapper">
        <div className="contact-card">

          {/* Info Bar */}
          <div className="contact-info-bar">
            <h2>Contact Information</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span>✉️</span>
                <a href="mailto:dummy@email.com">dummy@email.com</a>
              </div>
              <div className="contact-info-item">
                <span>📞</span>
                <a href="tel:+10000000000">+1 000 000 0000</a>
              </div>
              <div className="contact-info-item">
                <span>📍</span>
                <span>456 Example Street, Demo City</span>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="contact-form-area">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">🌿</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button className="contact-success-back" onClick={handleReset}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    required
                    placeholder="Your message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>
                <button type="submit" className="contact-submit-btn">
                  Send Message
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <p className="contact-privacy">🔒 Your information is confidential and never shared.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;