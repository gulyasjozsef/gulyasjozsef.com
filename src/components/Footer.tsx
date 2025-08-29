import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gulyás József</h3>
            <p className="text-gray-400 leading-relaxed">
              Digital Marketing & Content Specialist passionate about creating 
              impactful brand experiences through creative content and technical excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors duration-300">Digital Marketing Strategy</li>
              <li className="hover:text-white transition-colors duration-300">Content Creation</li>
              <li className="hover:text-white transition-colors duration-300">Web Development</li>
              <li className="hover:text-white transition-colors duration-300">SEO Optimization</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-400" /> in Budapest, Hungary
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            © 2024 Gulyás József. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;