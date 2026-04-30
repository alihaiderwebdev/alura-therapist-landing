import React from "react";


import About from "../../components/About/About";


import Hero from "../../components/Hero/Hero";


function AboutPage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      

      {/* Hero Section */}
      <Hero
  title={{ line1: "About Alura Reset", line2: "Who We Are & Our Mission" }}
  description="Learn more about our vision, values, and the passion driving Alura Therapist to support your mental wellness journey." showImage={false}
/>

      {/* About Section */}
      <About />


      {/* Testimonials Section */}
   
    </div>
  );
}

export default AboutPage;