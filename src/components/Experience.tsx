import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: '2022 - Present',
      title: 'Digital Marketing Specialist',
      company: 'Creative Agency',
      location: 'Budapest, Hungary',
      description: 'Leading digital marketing campaigns, content creation, and web development projects. Achieved 500K+ organic views on social media and top Google rankings for client websites.',
      achievements: [
        'Grew social media following by 300% through strategic content creation',
        'Developed 15+ WordPress websites with SEO optimization',
        'Created viral video content with Final Cut Pro and drone footage'
      ]
    },
    {
      year: '2020 - 2022',
      title: 'Marketing & Recruitment Coordinator',
      company: 'Tech Solutions Ltd.',
      location: 'Budapest, Hungary',
      description: 'Combined marketing responsibilities with recruitment and HR support, managing job advertisements, candidate sourcing, and onboarding processes.',
      achievements: [
        'Streamlined recruitment process reducing hiring time by 40%',
        'Designed marketing materials increasing application quality by 60%',
        'Managed end-to-end recruitment for 50+ positions'
      ]
    },
    {
      year: '2019 - 2020',
      title: 'IT Support & Project Assistant',
      company: 'Solar Energy Group',
      location: 'Budapest, Hungary',
      description: 'Provided technical support and project coordination for solar energy installations, managing permits and client communications.',
      achievements: [
        'Coordinated 100+ solar installation projects',
        'Implemented IT support ticketing system',
        'Reduced project completion time by 25% through process optimization'
      ]
    },
    {
      year: '2017 - 2019',
      title: 'Freelance Designer & Developer',
      company: 'Self-Employed',
      location: 'Remote',
      description: 'Provided graphic design, web development, and digital marketing services to small businesses and startups.',
      achievements: [
        'Delivered 30+ design projects with 98% client satisfaction',
        'Built responsive websites using WordPress and custom HTML/CSS',
        'Created brand identities for 12 local businesses'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through diverse roles that shaped my unique blend of marketing, technical, and strategic skills
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-16 ml-20 md:ml-0' : 'md:pl-16 ml-20 md:ml-0'
                }`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center text-sm text-blue-400 font-medium mb-2">
                      <Calendar size={16} className="mr-2" />
                      {exp.year}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full mx-3"></div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <ChevronRight size={16} className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
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

export default Experience;