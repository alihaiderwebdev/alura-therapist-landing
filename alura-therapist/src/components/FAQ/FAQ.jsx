import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the difference between mindfulness coaching and therapy?",
      answer: "Coaching: Present focus & skills for stress, focus, and well-being. Therapy: Deeper dive & healing for past experiences and mental health challenges."
    },
    {
      question: "Do I need any prior experience with meditation to benefit from coaching?",
      answer: "No prior experience is needed. Our programs are designed for all levels, from complete beginners to experienced practitioners looking to deepen their practice."
    },
    {
      question: "What can I expect from a typical mindfulness coaching session?",
      answer: "Each session includes guided meditation, personalized techniques, progress tracking, and actionable strategies tailored to your specific needs and goals."
    },
    {
      question: "How long does it take to see results from mindfulness practices?",
      answer: "Many users notice improvements in stress levels and focus within 2-3 weeks of consistent practice. Long-term benefits develop with regular engagement over months."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h3>Frequently Asked Questions</h3>
        </div>

        {/* Content */}
        <div className="faq-content">
          {/* Left Side - Video and Title */}
          <div className="faq-left">
            <h2 className="faq-title">
              Empowering individuals<br />
              to find <span className="highlight">inner peace</span> and<br />
              <span className="highlight">navigate</span> life <span className="highlight">mindfully.</span>
            </h2>

            <div className="faq-video">
              <div className="video-thumbnail">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop" 
                  alt="Mindfulness coaching" 
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
              {faqs.map((faq, index) => (
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
