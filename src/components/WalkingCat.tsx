import React, { useState, useEffect } from 'react';

const WalkingCat = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev + (direction * 0.5);
        
        // Change direction when reaching edges
        if (newPosition >= 90) {
          setDirection(-1);
          return 90;
        } else if (newPosition <= 0) {
          setDirection(1);
          return 0;
        }
        
        return newPosition;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div 
      className="absolute bottom-20 transition-all duration-75 ease-linear z-20"
      style={{ 
        left: `${position}%`,
        transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)'
      }}
    >
      <div className="text-4xl animate-bounce">
        🐱
      </div>
    </div>
  );
};

export default WalkingCat;