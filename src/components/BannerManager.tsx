import React, { useState } from 'react';
import { AlertCircle, Plus, Trash2, Download } from 'lucide-react';
import { createBanner, updateBanner, deleteBanner } from '../services/banner';
import { useBannerStore } from '../store/bannerStore';

export default function BannerManager() {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { banner, setBanner } = useBannerStore();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ebookUrl: '',
    isActive: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (!formData.title || !formData.description || !formData.ebookUrl) {
        throw new Error('Please fill in all fields');
      }

      const newBanner = await createBanner(formData);
      setBanner(newBanner);
      setIsCreating(false);
      setFormData({
        title: '',
        description: '',
        ebookUrl: '',
        isActive: true
      });
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    if (!banner) return;

    try {
      await deleteBanner(banner.id);
      setBanner(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleToggleActive = async () => {
    if (!banner) return;

    try {
      const updates = { isActive: !banner.isActive };
      await updateBanner(banner.id, updates);
      setBanner({ ...banner, ...updates });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-[#1a1a1c] p-6 rounded-xl border border-white/10 mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Banner Management</h2>

      {error && (
        <div className="mb-4 bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      {!banner && !isCreating && (
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center space-x-2 bg-[#3c7dc3] text-white px-4 py-2 rounded-lg hover:bg-[#2c5a9a] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Banner</span>
        </button>
      )}

      {isCreating && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#101012] border border-white/10 rounded-lg px-4 py-2 text-white"
              placeholder="e.g., Download our free eBook"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#101012] border border-white/10 rounded-lg px-4 py-2 text-white"
              placeholder="e.g., Learn about Genesys Cloud CX best practices"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              eBook URL
            </label>
            <input
              type="url"
              value={formData.ebookUrl}
              onChange={(e) => setFormData({ ...formData, ebookUrl: e.target.value })}
              className="w-full bg-[#101012] border border-white/10 rounded-lg px-4 py-2 text-white"
              placeholder="https://example.com/ebook.pdf"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="bg-[#3c7dc3] text-white px-4 py-2 rounded-lg hover:bg-[#2c5a9a] transition-colors"
            >
              Create Banner
            </button>
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {banner && (
        <div className="space-y-4">
          <div className="bg-[#101012] p-4 rounded-lg border border-white/10">
            <h3 className="font-medium text-white mb-2">{banner.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{banner.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleToggleActive}
                  className={`px-3 py-1 rounded-full text-sm ${
                    banner.isActive
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-gray-500/10 text-gray-400'
                  }`}
                >
                  {banner.isActive ? 'Active' : 'Inactive'}
                </button>
                <a
                  href={banner.ebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-[#3c7dc3] hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>View eBook</span>
                </a>
              </div>
              <button
                onClick={handleDelete}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}