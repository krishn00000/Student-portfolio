import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "popuri.ck@example.com",
      href: "mailto:popuri.ck@example.com",
      color: "red"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/popuri-chinni-krishna",
      href: "https://linkedin.com/in/popuri-chinni-krishna",
      color: "blue"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/popurick",
      href: "https://github.com/popurick",
      color: "gray"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in AI and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or collaborations in AI, machine learning, and web development. 
                  Let's create something amazing together!
                </p>

                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className={`p-3 bg-gradient-to-r from-${link.color}-600 to-${link.color}-500 rounded-lg group-hover:shadow-lg group-hover:shadow-${link.color}-500/25 transition-all duration-300`}>
                        <div className="text-white">
                          {link.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                          {link.label}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {link.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full group px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 Popuri Chinni Krishna. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;