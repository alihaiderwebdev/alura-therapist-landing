import React from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Hero from "../../components/Hero/Hero";



function HowThisWorks() {
  return (
    <div className="homepage">
      {/* Navbar */}
      

      {/* Hero Section */}
      <Hero
  title={{ line1: "How it works", line2: "Our Process & Benefits" }}
  description="Discover how Alura Therapist supports your mental wellness journey and the steps we take to help you thrive." showImage={false}
/>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Plans Section */}

      {/* Pricing Section */}

      
    </div>
  );
}

export default HowThisWorks;