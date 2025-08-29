import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Gulyás József
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Digital Marketing & Content Specialist
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-lg">
              I combine creative storytelling, technical skills, and data-driven strategies to build strong digital brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-400 text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-all duration-300">
                <Download className="mr-2" size={20} />
                Download CV
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-gray-100 shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Gulyás József"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-300 rounded-full opacity-20 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;