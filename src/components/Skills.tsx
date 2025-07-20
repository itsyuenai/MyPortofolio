import React from 'react';
import { Code, Palette, Database} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Using React, Vue.js, and modern JavaScript. Creating responsive and interactive user interfaces.',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server side applications with Laravel and various databases.',
      technologies: ['PHP', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences with delightful design principles.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    },
  ];

  const runningSkills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 
    'Tailwind CSS', 'Figma', 'Git', 'C++', 'Java', 'Adobe XD', 'REST APIs', 'Laravel'
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-pink-100/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
              }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{skill.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-400/10 text-pink-600 rounded-full text-sm font-medium border border-pink-200/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100/50 overflow-hidden transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <div className="relative">
            <div className="flex animate-scroll">
              {[...runningSkills, ...runningSkills].map((skill, index) => (
                <span
                  key={index}
                  className="inline-block text-2xl font-bold text-gray-600 mr-24 whitespace-nowrap bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: `gradientShift 3s ease-in-out infinite ${index * 0.1}s`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;