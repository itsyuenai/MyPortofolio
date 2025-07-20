import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import loversong from '../assets/Taylor-Swift-Lover.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume] = useState(0.5); // Default volume at 50%

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      
      // Try to auto-play when component mounts
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Auto-play prevented by browser:', error);
          // Auto-play was prevented, user will need to click play
        }
      };

      // Add a small delay to ensure the component is fully mounted
      setTimeout(playAudio, 1000);
    }
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (audio) {
      try {
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          await audio.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Playback error:', error);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Audio element - you would replace this URL with a legal source */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Note: Replace this with a legal audio source */}
        <source src={loversong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Panel */}
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-pink-200/50 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          
          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-pink-500 transition-colors duration-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        <div className="text-xs text-gray-600 font-medium">
          <div className="text-pink-600">♪ Lover</div>
          <div className="text-gray-500">Taylor Swift</div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #a855f7);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #a855f7);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default BackgroundMusic;