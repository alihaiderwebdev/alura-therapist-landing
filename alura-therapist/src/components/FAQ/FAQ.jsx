import React, { useState } from "react";
import { faqData } from "./data";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h3>{faqData.header}</h3>
        </div>

        {/* Content */}
        <div className="faq-content">
          {/* Left Side - Video and Title */}
          <div className="faq-left">
            <h2 className="faq-title">
              {faqData.title.line1}<br />
              {faqData.title.line2}<span className="highlight">{faqData.title.highlight1}</span> {faqData.title.line3}<br />
              <span className="highlight">{faqData.title.line4}</span> {faqData.title.line5}<span className="highlight">{faqData.title.highlight2}</span>
            </h2>

            <div className="faq-video">
              <div className="video-thumbnail">
                <img 
                  src={faqData.videoThumbnail.src} 
                  alt={faqData.videoThumbnail.alt} 
                />
                <div className="play-button">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="white" opacity="0.9"/>
                    <path d="M26 22l16 10-16 10V22z" fill="var(--color-primary-teal)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="faq-right">
            <div className="faq-accordion">
              {faqData.faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}>
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      className="faq-icon"
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                    >
                      <path 
                        d="M19 9l-7 7-7-7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
