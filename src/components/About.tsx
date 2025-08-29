import React from 'react';
import { Target, Users, Code, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Marketing',
      description: 'Data-driven campaigns across all digital platforms'
    },
    {
      icon: Users,
      title: 'Content Creation',
      description: 'Engaging visuals and videos with millions of views'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'SEO-optimized websites with top Google rankings'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: 'Proven track record of building strong digital brands'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As a Digital Marketing & Content Specialist, I excel at creating integrated marketing strategies 
              that merge creative content production with technical expertise. My background spans across 
              digital marketing, SEO-driven web development, and social media growth, delivering results 
              that drive brand awareness and engagement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              What sets me apart is my ability to bridge the gap between marketing and technology. 
              I bring additional value through my experience in IT support and recruitment, making me 
              a versatile professional who can adapt and contribute across various industries and business functions.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">500K+</span>
                <span className="text-sm text-gray-600">Organic Views</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">50+</span>
                <span className="text-sm text-gray-600">Projects Completed</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">5+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;