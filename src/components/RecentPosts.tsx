import React, { useState } from 'react';
import { useBlogStore } from '../store/blogStore';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function RecentPosts() {
  const posts = useBlogStore((state) => state.posts);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((current) => 
      current === 0 ? posts.length - 3 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((current) => 
      current === posts.length - 3 ? 0 : current + 1
    );
  };

  if (posts.length === 0) return null;

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-[#0c0c0e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on Genesys Cloud CX and GenAI innovations
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#1a1a1c]/80 text-white p-2 rounded-full hover:bg-[#3c7dc3] transition-colors z-10 hidden md:block"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#1a1a1c]/80 text-white p-2 rounded-full hover:bg-[#3c7dc3] transition-colors z-10 hidden md:block"
            aria-label="Next posts"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-[#101012] rounded-xl overflow-hidden border border-white/10 hover:border-[#3c7dc3] transition-all duration-300 hover:shadow-lg hover:shadow-[#3c7dc3]/10 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#3c7dc3] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    By {post.author} • {format(new Date(post.date), 'MMMM d, yyyy')}
                  </p>
                  <p className="text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <div className="text-[#3c7dc3] font-semibold flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: posts.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#3c7dc3] w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}