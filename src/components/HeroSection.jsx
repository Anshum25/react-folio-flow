
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-blue-600 font-medium mb-3 opacity-0 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-center md:text-left font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
            <span className="block">John Doe</span>
            <span className="text-blue-600">Software Developer</span>
          </h1>
          <p className="max-w-2xl text-center md:text-left text-gray-600 text-lg mb-8 opacity-0 animate-fade-in animate-delay-200">
            I build exceptional digital experiences with clean, efficient code.
            Specializing in full-stack development with a focus on React, Node.js, and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start opacity-0 animate-fade-in animate-delay-300">
            <Button className="btn-primary">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex space-x-5 opacity-0 animate-fade-in animate-delay-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:info@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-100 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-green-100 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
