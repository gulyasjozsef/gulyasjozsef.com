import React from 'react';
import { ExternalLink, Play, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      category: 'Social Media Campaign',
      title: 'Instagram Reels Strategy',
      description: 'Created viral content that achieved 500K+ organic views across multiple reels, significantly increasing brand awareness and engagement.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['500K+ Views', '25% Engagement Rate', '2K+ Followers Growth'],
      type: 'video'
    },
    {
      category: 'Web Development',
      title: 'E-commerce WordPress Site',
      description: 'Developed a full-featured WordPress website with custom theme, achieving #1 Google rankings for target keywords.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['#1 Google Ranking', '150% Traffic Increase', '40% Conversion Rate'],
      type: 'web'
    },
    {
      category: 'Print Design',
      title: 'Brand Identity Package',
      description: 'Complete visual identity including brochures, flyers, and vehicle wraps for construction company rebrand.',
      image: 'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['5 Print Materials', '100% Brand Consistency', '3-Month Timeline'],
      type: 'design'
    },
    {
      category: 'Video Production',
      title: 'Drone Marketing Content',
      description: 'Produced promotional video content for construction machinery using Mavic Air drone, showcasing equipment capabilities.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['4K Resolution', '10+ Video Assets', 'Client Satisfaction 100%'],
      type: 'video'
    },
    {
      category: 'Digital Marketing',
      title: 'LinkedIn B2B Campaign',
      description: 'Developed comprehensive LinkedIn strategy for B2B lead generation, resulting in significant engagement growth.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['300% Reach Increase', '50+ Quality Leads', '20% Connection Rate'],
      type: 'marketing'
    },
    {
      category: 'Recruitment Project',
      title: 'HR Process Optimization',
      description: 'Streamlined recruitment workflow with custom job advertisements and candidate pre-screening systems.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['60% Faster Hiring', '95% Candidate Quality', '40+ Successful Placements'],
      type: 'hr'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'web': return ExternalLink;
      default: return TrendingUp;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful campaigns, creative projects, and technical solutions that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  {React.createElement(getIcon(project.type), { size: 16, className: 'text-gray-700' })}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{metric}</span>
                    </div>
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

export default Portfolio;