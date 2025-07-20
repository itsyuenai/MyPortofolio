import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/90 backdrop-blur-md'
    } px-8 py-4 rounded-full border border-pink-200/30`}>
      <ul className="flex gap-8 list-none">
        {[
          { name: 'Home', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'Projects', id: 'projects' },
          { name: 'Skills', id: 'skills' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-gray-600 font-medium hover:text-pink-500 transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;