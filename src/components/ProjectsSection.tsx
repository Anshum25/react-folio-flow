
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment processing, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
    tags: ["react", "node", "mongodb", "express"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "fullstack"
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop",
    tags: ["react", "typescript", "redux", "firebase"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "frontend"
  },
  {
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?q=80&w=1974&auto=format&fit=crop",
    tags: ["socket.io", "react", "node", "mongodb"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "fullstack"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    tags: ["react", "api", "tailwind", "chartjs"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "frontend"
  },
  {
    title: "Restaurant Booking System",
    description: "A restaurant booking system with table management and reservation tracking.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    tags: ["node", "express", "mongodb", "react"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "backend"
  },
  {
    title: "Personal Budget Tracker",
    description: "A budget tracking application with expense categorization and visualization.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    tags: ["react", "redux", "firebase", "chartjs"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "frontend"
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Full Stack", value: "fullstack" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-center font-bold mb-6">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-10"></div>
          <p className="text-gray-600 text-center max-w-3xl mb-8">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="card group overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <Github size={20} className="text-blue-800" />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <ExternalLink size={20} className="text-blue-800" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
