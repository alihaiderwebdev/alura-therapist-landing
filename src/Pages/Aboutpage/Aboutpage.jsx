import React from "react";


import About from "../../components/About/About";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Plans from "../../components/Plans/Plans";
import Pricing from "../../components/Pricing/Pricing";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";


function AboutPage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      

      {/* Hero Section */}
      <Hero
  title={{ line1: "About Alura Reset", line2: "What we do & why" }}
  description="A short about-page description goes here." showImage={false}
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

export default AboutPage;