import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block" />

            <div className="relative">
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative hidden md:block">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse" />
                </div>

                {/* Content */}
                <div className="flex-grow bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Front-End Development Intern
                      </h3>
                      <p className="text-xl text-cyan-400 font-semibold">
                        Edunet Foundation
                      </p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>2023 - 2024</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Gained hands-on experience in modern front-end development practices, 
                      working on real-world projects and collaborating with experienced developers.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4 border border-cyan-500/20">
                        <h4 className="font-semibold text-cyan-300 mb-2">Key Responsibilities</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Developed responsive web interfaces</li>
                          <li>• Collaborated on UI/UX improvements</li>
                          <li>• Implemented modern CSS frameworks</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/20">
                        <h4 className="font-semibold text-blue-300 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {["HTML5", "CSS3", "JavaScript", "React"].map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;