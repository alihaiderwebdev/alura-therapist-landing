import React from "react";



import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Plans from "../../components/Plans/Plans";
import Pricing from "../../components/Pricing/Pricing";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";


function HowThisWorks() {
  return (
    <div className="homepage">
      {/* Navbar */}
      

      {/* Hero Section */}
      <Hero
  title={{ line1: "How it works", line2: "Our Process & Benefits" }}
  description="Discover how Alura Therapist supports your mental wellness journey and the steps we take to help you thrive." showImage={false}
/>

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Plans Section */}
      <Plans />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials header="Testimonials"
  title={{ line1: "Progess Your Can", line2: "Feel And See" }}
  description="Some custom about-page testimonials text.And beautiful layouts"
  showImage={false} />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      
    </div>
  );
}

export default HowThisWorks;