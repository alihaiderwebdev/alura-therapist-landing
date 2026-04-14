import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Features from "./Features/Features";
import HowItWorks from "./HowItWorks/HowItWorks";
import Plans from "./Plans/Plans";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";

function Homepage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

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
      <Footer />
    </div>
  );
}

export default Homepage;