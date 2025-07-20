import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning model using advanced algorithms to detect fraudulent credit card transactions with high accuracy and real-time processing capabilities.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
      type: "AI/ML Project",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "News Website",
      description: "Dynamic news platform with real-time updates, category filtering, search functionality, and responsive design for optimal user experience.",
      technologies: ["React", "Node.js", "MongoDB", "News API", "CSS"],
      type: "Full-Stack Web App",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "ChatApp",
      description: "Real-time messaging application with user authentication, group chats, message history, and modern UI for seamless communication.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      type: "Real-Time Application",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Hostel Management System",
      description: "Comprehensive system for managing hostel operations including room allocation, student records, fee management, and administrative features.",
      technologies: ["Java", "MySQL", "Swing", "JDBC", "MVC"],
      type: "Desktop Application",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-cyan-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of innovative solutions demonstrating technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/20 mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/10 rounded-full hover:bg-cyan-600/20 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-cyan-600/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
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

export default Projects;