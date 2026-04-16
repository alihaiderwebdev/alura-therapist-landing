import React from "react";


import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Plans from "../../components/Plans/Plans";
import Pricing from "../../components/Pricing/Pricing";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";


function Homepage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      

      {/* Hero Section */}
      <Hero title={{ line1: "Start Fresh:", line2: "Your Reset Begins Here" }}
      description="The Alura Therapist Portal gives you the tools to monitor, guide, and support clients in their journey — with data-driven insights and compassionate technology."/>

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
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      
    </div>
  );
}

export default Homepage;