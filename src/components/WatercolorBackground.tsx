import React from 'react';

const WatercolorBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
      
      {/* Animated watercolor blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-pink-200/40 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-purple-200/40 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-blue-200/40 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-yellow-200/40 to-transparent rounded-full blur-3xl animate-blob animation-delay-6000"></div>
        
        {/* Additional smaller blobs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-pink-300/30 to-transparent rounded-full blur-2xl animate-blob animation-delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-radial from-purple-300/30 to-transparent rounded-full blur-2xl animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-blue-300/30 to-transparent rounded-full blur-2xl animate-blob animation-delay-5000"></div>
      </div>
    </div>
  );
};

export default WatercolorBackground;