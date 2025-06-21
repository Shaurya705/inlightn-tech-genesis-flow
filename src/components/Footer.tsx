
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              Inlighn Tech
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Transforming aspiring minds into tech leaders. We bridge the gap between curiosity 
              and capability, empowering the next generation of innovators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Cybersecurity</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Full Stack Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Data Science</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Data Analysis</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#programs" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Programs</a></li>
              <li><a href="#verify" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Verify Certificate</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-slate-300">Get the latest updates on programs, events, and industry insights.</p>
          </div>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-r-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Inlighn Tech. All rights reserved. Crafted with passion for the future of technology.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-300">Terms of Service</a>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group"
              >
                <ArrowUp size={16} className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
