import React from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: '10 Instagram Reels Ideas That Generate 100K+ Views',
      excerpt: 'Discover the content strategies and techniques I use to create viral Instagram Reels that consistently achieve high engagement and reach.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'WordPress SEO: How I Achieved #1 Google Rankings',
      excerpt: 'A step-by-step guide to the SEO strategies and WordPress optimizations that helped my clients reach the top of search results.',
      date: 'March 8, 2024',
      readTime: '8 min read',
      category: 'SEO & Web Development',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'The Future of Digital Marketing: Trends for 2024',
      excerpt: 'Exploring emerging technologies, platforms, and strategies that will shape digital marketing in the coming year.',
      date: 'February 28, 2024',
      readTime: '6 min read',
      category: 'Digital Strategy',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights & Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge about digital marketing trends, creative strategies, and technical insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={14} className="mr-2" />
                  <span>{post.readTime}</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full mx-3"></div>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-blue-400 font-medium hover:text-blue-500 transition-colors duration-300">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-all duration-300">
            <BookOpen className="mr-2" size={20} />
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;