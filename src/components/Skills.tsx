import React from 'react';
import { 
  Megaphone, 
  Palette, 
  Video, 
  Globe, 
  Users, 
  Monitor, 
  Briefcase 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Megaphone,
      title: 'Digital Marketing Strategy',
      skills: ['LinkedIn Marketing', 'Facebook Advertising', 'Instagram Growth', 'TikTok Strategy', 'Reels with 500K+ views'],
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      icon: Palette,
      title: 'Content Creation',
      skills: ['Canva Design', 'Adobe Creative Suite', 'Photoshop & Illustrator', 'Lightroom Editing', 'Brand Identity'],
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      icon: Video,
      title: 'Video Production',
      skills: ['Final Cut Pro', 'Drone Videography', 'Mavic Air Operation', 'Social Media Videos', 'Commercial Content'],
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      icon: Globe,
      title: 'Web Development & SEO',
      skills: ['WordPress Development', 'HTML/PHP', 'CMS Management', 'Google Rankings', 'Technical SEO'],
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    },
    {
      icon: Users,
      title: 'Recruitment & HR',
      skills: ['Job Advertisement', 'Candidate Sourcing', 'Pre-screening', 'Onboarding Process', 'HR Systems'],
      color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
    },
    {
      icon: Monitor,
      title: 'IT & Technical Support',
      skills: ['Windows Administration', 'Microsoft Office', 'Network Troubleshooting', 'Ticketing Systems', 'WordPress Support'],
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    },
    {
      icon: Briefcase,
      title: 'Project Coordination',
      skills: ['Solar Energy Projects', 'Permit Management', 'Client Communication', 'Process Optimization', 'Quality Control'],
      color: 'bg-teal-50 border-teal-200 hover:bg-teal-100'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set combining creative marketing, technical development, and strategic business support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${category.color}`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <category.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;