import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    emoji: string;
    left: number;
    animationDuration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const emojis = ['⭐', '🌸', '✨', '💫', '🌙', '🦋', '🌺', '💖'];
    
    const createFloatingElement = () => {
      const newElement = {
        id: Date.now() + Math.random(),
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 4,
        delay: Math.random() * 2
      };
      
      setElements(prev => [...prev, newElement]);
      
      setTimeout(() => {
        setElements(prev => prev.filter(el => el.id !== newElement.id));
      }, (newElement.animationDuration + newElement.delay) * 1000);
    };

    const interval = setInterval(createFloatingElement, 3000);
    
    // Create initial elements
    for (let i = 0; i < 3; i++) {
      setTimeout(createFloatingElement, i * 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-2xl opacity-70 animate-float-up"
          style={{
            left: `${element.left}%`,
            bottom: '-50px',
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.emoji}
        </div>
      ))}
      
      {/* Static floating elements for background */}
      <div className="absolute top-20 left-10 text-pink-300 opacity-60 animate-float">⭐</div>
      <div className="absolute top-40 right-20 text-purple-300 opacity-60 animate-float" style={{ animationDelay: '2s' }}>🌸</div>
      <div className="absolute top-60 left-1/4 text-blue-300 opacity-60 animate-float" style={{ animationDelay: '4s' }}>✨</div>
      <div className="absolute bottom-40 right-10 text-pink-300 opacity-60 animate-float" style={{ animationDelay: '1s' }}>💫</div>
      <div className="absolute bottom-60 left-20 text-purple-300 opacity-60 animate-float" style={{ animationDelay: '3s' }}>🌙</div>
    </div>
  );
};

export default FloatingElements;