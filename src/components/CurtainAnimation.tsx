// components/CurtainAnimation.tsx

import React, { useMemo } from 'react';

// --- Komponen Panel Tirai didefinisikan di dalam file yang sama ---
interface CurtainPanelProps {
  isOpen: boolean;
  position: 'left' | 'right';
}

const CurtainPanel: React.FC<CurtainPanelProps> = ({ isOpen, position }) => {
  const isLeft = position === 'left';

  return (
    <div
      className={`
        absolute top-0 h-full w-1/2 bg-gradient-to-r from-pink-600 via-purple-600 to-purple-700
        transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${isLeft ? 'left-0' : 'right-0'}
        ${isOpen 
          ? (isLeft ? '-translate-x-full' : 'translate-x-full') 
          : 'translate-x-0'
        }
      `}
    >
      {/* Gradients untuk pencahayaan dan bayangan */}
      <div className={`absolute inset-0 bg-gradient-to-${isLeft ? 'br' : 'bl'} from-pink-500/20 to-transparent`}></div>
      <div className={`absolute top-0 h-full w-8 bg-gradient-to-${isLeft ? 'l' : 'r'} from-black/30 to-transparent ${isLeft ? 'right-0' : 'left-0'}`}></div>
      
      {/* Tekstur Tirai */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-white/10 to-transparent bg-repeat-y" style={{ backgroundSize: '100% 40px' }}></div>
      </div>
      
      {/* Lipatan Tirai */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute top-0 h-full w-1 bg-gradient-to-b from-white/20 via-transparent to-white/10" style={isLeft ? { left: `${(i + 1) * 12}%` } : { right: `${(i + 1) * 12}%` }}></div>
        ))}
      </div>
    </div>
  );
};

// --- Komponen Animasi Utama ---
interface CurtainAnimationProps {
  isOpen: boolean;
}

const CurtainAnimation: React.FC<CurtainAnimationProps> = ({ isOpen }) => {
  // Optimasi efek kilau dengan useMemo
  const sparkles = useMemo(() => 
    [...Array(25)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${0.5 + Math.random() * 1}rem`,
    })), []);

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
      {/* Panel Tirai Kiri dan Kanan */}
      <CurtainPanel isOpen={isOpen} position="left" />
      <CurtainPanel isOpen={isOpen} position="right" />

      {/* Batang Tirai */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-800 to-gray-600 shadow-lg z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute top-1 w-2 h-2 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-sm" style={{ left: `${8 + i * 7}%` }}></div>
        ))}
      </div>

      {/* Efek Kilau */}
      <div className={`absolute inset-0 transition-opacity duration-1000 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {sparkles.map((style, i) => (
          <div key={i} className="absolute text-yellow-300 animate-flicker" style={style}>✨</div>
        ))}
      </div>
    </div>
  );
};

export default CurtainAnimation;