import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import idwatch from "../assets/idwatch.png";
import porto from "../assets/porto.png";
import calculator from "../assets/calculator.png";
import jawa from "../assets/jawa.png";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      description: 'A modern e-commerce platform built with Laravel and PostgreSQL. Features include user authentication, payment integration, and real time inventory management.',
      image: idwatch,
      technologies: ['PHP', 'PostgreSQL', 'Cookies'],
      liveUrl: 'https://idwatch.store/',
      githubUrl: 'https://github.com/itsyuenai/TOKOJAM'
    },
    {
      title: 'Creative Portfolio',
      category: 'Frontend Development',
      description: 'A stunning portfolio website for a digital artist featuring smooth animations, interactive galleries, and responsive design across all devices.',
      image: porto,
      technologies: ['React', 'Typescript', 'Tailwind CSS', 'Figma'],
      liveUrl: '#',
      githubUrl: 'https://github.com/itsyuenai/MyPortofolio'
    },
    {
      title: 'Calculator',
      category: 'UI/UX Design',
      description: 'An interactive calculator UI that supports scientific functions, designed with a modern dark theme and user friendly layout for efficient problem solving.',
      image: calculator,
      technologies: ['Figma', 'Javascript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/itsyuenai/calculator'
    },
    {
      title: 'Blog Website',
      category: 'Blog Development',
      description: 'A blog website dedicated to exploring the culture, history, culinary and destinations of Java Island, informative articles, and an engaging reading experience.',
      image: jawa,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://itsyuenai.github.io/',
      githubUrl: 'https://github.com/itsyuenai/itsyuenai.github.io'
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-24 bg-white/50 backdrop-blur-sm relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative h-96 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${600 + index * 200}ms` : '0ms'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform transition-all duration-500">
                <div className={`transition-all duration-500 ${hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  
                  <div className={`transition-all duration-500 ${hoveredProject === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;