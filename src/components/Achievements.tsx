import React from 'react';
import { Award, Star } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full blur-xl animate-pulse" />
              </div>

              <div className="flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                      MongoDB Node.js Developer Certification
                    </h3>
                    <p className="text-lg text-green-400 font-semibold">
                      MongoDB University
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Successfully completed comprehensive certification program covering MongoDB fundamentals, 
                  Node.js integration, database design patterns, and advanced querying techniques. 
                  Demonstrated proficiency in building scalable applications with MongoDB.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4 border border-green-500/20">
                    <h4 className="font-semibold text-green-300 mb-2">Core Skills</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Database Design</li>
                      <li>• Query Optimization</li>
                      <li>• Aggregation Framework</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4 border border-blue-500/20">
                    <h4 className="font-semibold text-blue-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "Node.js", "Express", "Mongoose"].map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-500/20">
                    <h4 className="font-semibold text-purple-300 mb-2">Achievement</h4>
                    <p className="text-gray-300 text-sm">
                      Earned with distinction, demonstrating mastery of modern database technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional achievements showcase */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Academic Excellence", value: "8.5+ CGPA", color: "cyan" },
              { title: "Problem Solving", value: "100+ DSA", color: "blue" },
              { title: "Open Source", value: "5+ Contributions", color: "green" }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-${item.color}-600/20 to-${item.color}-500/20 backdrop-blur-sm rounded-xl p-6 border border-${item.color}-500/20 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className={`text-3xl font-bold text-${item.color}-400 mb-2`}>
                  {item.value}
                </div>
                <div className={`text-${item.color}-300 font-medium`}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;