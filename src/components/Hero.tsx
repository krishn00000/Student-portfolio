import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Popuri Chinni Krishna
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          AI & Machine Learning Engineer
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          BTech CSE Student at SRM University, passionate about crafting intelligent solutions 
          that bridge the gap between cutting-edge AI and real-world applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToAbout}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
          >
            Explore My Work
            <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
          </button>
          
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
            <Download className="inline-block mr-2 w-5 h-5" />
            Download Resume
          </button>
        </div>

        <div className="flex justify-center space-x-6 text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-sm">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4+</div>
            <div className="text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10+</div>
            <div className="text-sm">Technologies</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;