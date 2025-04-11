
import React from 'react';
import { Code, Globe, Database, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Front-end",
    icon: <Globe size={24} className="text-blue-600" />,
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Back-end",
    icon: <Database size={24} className="text-blue-600" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 75 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "Tools & Methods",
    icon: <Code size={24} className="text-blue-600" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
      { name: "CI/CD", level: 70 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone size={24} className="text-blue-600" />,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 60 },
      { name: "PWA", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "App Performance", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-center font-bold mb-6">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-10"></div>
          <p className="text-gray-600 text-center max-w-3xl">
            Here are my technical skills and competencies. I continuously improve
            these skills through practice and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-8">
                <div className="mr-4 p-3 bg-blue-100 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
