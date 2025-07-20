import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import WalkingCat from './WalkingCat';
import CurtainAnimation from './CurtainAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    // Start curtain animation immediately
    const curtainTimer = setTimeout(() => {
      setCurtainOpen(true);
    }, 500);

    // Show content after curtain opens
    const contentTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative z-10">
      <CurtainAnimation isOpen={curtainOpen} />
      <WalkingCat />
      <div className={`max-w-4xl px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          Hello, I'm Yuen
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Student & UI/UX Designer
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful digital experiences that blend creativity with functionality. 
          Welcome to my colorful world of code and design.
        </p>
        
        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-400 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/25 relative overflow-hidden"
        >
          <span className="relative z-10">Explore My Work</span>
          <ChevronDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;