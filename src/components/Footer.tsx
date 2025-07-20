import React from 'react';
import { Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer 
      ref={ref}
      className={`bg-white/80 backdrop-blur-sm py-8 text-center relative z-10 border-t border-pink-100/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-pink-500 fill-current" /> by Yuen
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © 2025 Yuen Portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;