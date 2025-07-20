import React from 'react';
import { Toaster } from 'react-hot-toast'; 

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import WatercolorBackground from './components/WatercolorBackground';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <WatercolorBackground />
      <FloatingElements />
      <BackgroundMusic />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Toaster position="top-center" /> {/* ✅ Ini tetap di sini */}
      <Footer />
    </div>
  );
}

export default App;