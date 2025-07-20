import React from 'react';
import profile from "../assets/profile.jpg";
import { MapPin, GraduationCap, Mail, BriefcaseBusiness, Heart} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Bogor, Indonesia' },
    { icon: GraduationCap, label: 'Education', value: 'Tarumanagara University' },
    { icon: Mail, label: 'Email', value: 'naisyayr09@gmail.com' },
    { icon: BriefcaseBusiness, label: 'Profession', value: 'Student' },
    { icon: Heart, label: 'Interests', value: 'Art, Music, Ice Cream' }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="space-y-6">
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Hi there! I'm Naisya Yuen Ra'af, a student who loves bringing ideas to life through code and design. 
                I specialize in creating beautiful, functional, and 
                user friendly digital experiences.
              </p>
              <p>
                My journey started with a love for art and technology, which naturally led me to the world of web development. 
                I believe that great design and clean code go hand in hand, and I'm always excited to work on projects that 
                challenge me to grow and learn new things.
              </p>
              <p>
                When I'm not coding, you can find me exploring art galleries, listening to music, or planning my next travel adventure. 
                I'm always open to new opportunities and collaborations!
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-400 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <img
                src={profile}
                alt="Sarah - Creative Developer"
                className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100 mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 bg-white/60 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-400 p-3 rounded-xl text-white mx-auto">
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                  <p className="text-gray-800 font-semibold">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;