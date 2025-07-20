import React from 'react';
import { Brain, Code, Laptop } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Experienced in developing intelligent systems using modern ML algorithms and frameworks."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in building end-to-end web applications with modern technologies and frameworks."
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Skilled in creating custom WordPress solutions and dynamic content management systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-cyan-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate Technology Enthusiast
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a dedicated BTech Computer Science Engineering student at SRM University, 
                specializing in Artificial Intelligence and Machine Learning. My journey in technology 
                is driven by a passion for creating innovative solutions that make a real impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in both theoretical concepts and practical implementation, 
                I thrive on solving complex problems and building scalable applications that bridge 
                the gap between cutting-edge AI research and real-world applications.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20">
              <p className="text-cyan-100 text-lg font-medium text-center">
                "Transforming ideas into intelligent solutions through code and creativity"
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <div className="text-white">
                      {strength.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {strength.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
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