import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";

import "./global.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

    </div>
  );
}

export default App;