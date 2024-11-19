import React from 'react';
import { useBlogStore } from '../store/blogStore';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function BlogList() {
  const posts = useBlogStore((state) => state.posts);

  return (
    <div className="min-h-screen bg-[#101012] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Latest Insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-[#1a1a1c] rounded-xl overflow-hidden border border-white/10 hover:border-[#3c7dc3] transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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
      </div>
    </div>
  );
}