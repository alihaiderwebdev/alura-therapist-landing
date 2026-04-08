import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getFAQs } from "../../api/faq";
import { faqData as fallbackData } from "./data";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqData, setFaqData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        console.log("🔄 Fetching FAQs from backend...");
        const apiResponse = await getFAQs();
        
        console.log("✅ Backend FAQs received:", apiResponse);
        
        // API returns array of FAQ objects: [{ question, answer, ... }]
        // Transform to match existing UI structure
        const transformedData = {
          header: fallbackData.header, // Keep static header
          title: fallbackData.title,   // Keep static title
          videoThumbnail: fallbackData.videoThumbnail, // Keep static video
          faqs: apiResponse.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        };
        
        console.log("✅ Transformed FAQ data:", transformedData);
        setFaqData(transformedData);
      } catch (error) {
        console.error("❌ FAQ API Error:", error);
        toast.error(error.message || "Failed to load FAQs");
        // Keep using fallback data on error
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (loading) {
    return (
      <section className="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h3>Loading FAQs...</h3>
          </div>
        </div>
      </section>
    );
  }

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
