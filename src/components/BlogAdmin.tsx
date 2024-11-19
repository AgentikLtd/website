import React, { useState } from 'react';
import { useBlogStore } from '../store/blogStore';
import { BlogPost } from '../types/blog';
import { Pencil, Trash2, Plus } from 'lucide-react';
import BannerManager from './BannerManager';
import RichTextEditor from './RichTextEditor';

export default function BlogAdmin() {
  const { posts, addPost, deletePost, updatePost } = useBlogStore();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updatePost(isEditing, formData);
      setIsEditing(null);
    } else {
      addPost({
        ...formData as BlogPost,
        id: Date.now().toString(),
        date: new Date().toISOString()
      });
    }
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      author: '',
      imageUrl: ''
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsEditing(post.id);
    setFormData(post);
  };

  return (
    <div className="min-h-screen bg-[#101012] pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
        
        <BannerManager />
        
        <h2 className="text-2xl font-bold text-white mb-6">Blog Management</h2>
        
        <form onSubmit={handleSubmit} className="bg-[#1a1a1c] p-6 rounded-lg mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#101012] text-white px-4 py-2 rounded border border-white/10 focus:outline-none focus:border-[#3c7dc3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full bg-[#101012] text-white px-4 py-2 rounded border border-white/10 focus:outline-none focus:border-[#3c7dc3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Author</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full bg-[#101012] text-white px-4 py-2 rounded border border-white/10 focus:outline-none focus:border-[#3c7dc3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full bg-[#101012] text-white px-4 py-2 rounded border border-white/10 focus:outline-none focus:border-[#3c7dc3] h-20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
            <RichTextEditor
              content={formData.content || ''}
              onChange={(content) => setFormData({ ...formData, content })}
            />
          </div>

          <button
            type="submit"
            className="bg-[#3c7dc3] text-white px-6 py-2 rounded-lg hover:bg-[#2c5a9a] transition-colors flex items-center space-x-2"
          >
            {isEditing ? (
              <>
                <Pencil className="w-4 h-4" />
                <span>Update Post</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add Post</span>
              </>
            )}
          </button>
        </form>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#1a1a1c] p-6 rounded-lg flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  By {post.author} on {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Pencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}