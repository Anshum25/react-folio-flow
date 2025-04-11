
import React from 'react';
import { User, Calendar, GraduationCap, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-center font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-blue-600 rounded-lg"></div>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Front-end Developer with a passion for creating intuitive user interfaces</h3>
            <p className="text-gray-700 mb-6">
              I'm a software developer with 5 years of experience building web applications. 
              I specialize in JavaScript frameworks, particularly React, and have a strong foundation in 
              modern front-end development technologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-3 mt-1 bg-blue-100 p-2 rounded-md">
                  <User size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Name</h4>
                  <p className="text-gray-600">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1 bg-blue-100 p-2 rounded-md">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Experience</h4>
                  <p className="text-gray-600">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1 bg-blue-100 p-2 rounded-md">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-600">john@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1 bg-blue-100 p-2 rounded-md">
                  <GraduationCap size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Education</h4>
                  <p className="text-gray-600">B.Sc. Computer Science</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-block btn-primary"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
