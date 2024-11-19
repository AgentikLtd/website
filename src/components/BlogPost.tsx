import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useBlogStore } from '../store/blogStore';
import { format } from 'date-fns';

export default function BlogPost() {
  const { id } = useParams();
  const posts = useBlogStore((state) => state.posts);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-[#3c7dc3] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-[#3c7dc3] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-transparent to-transparent" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div 
              className="bg-[#1a1a1c] rounded-xl p-8 border border-white/10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}