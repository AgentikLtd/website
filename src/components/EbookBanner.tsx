import React, { useState } from 'react';
import { X, Download, AlertCircle, CheckCircle, Loader2, BookOpen } from 'lucide-react';
import { useBannerStore } from '../store/bannerStore';
import { submitEbookDownload } from '../services/banner';

export default function EbookBanner() {
  const { banner } = useBannerStore();
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  if (!banner || !banner.isActive || !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setStatus('loading');
      await submitEbookDownload(email);
      setStatus('success');
      
      setTimeout(() => {
        window.open(banner.ebookUrl, '_blank');
        setIsOpen(false);
      }, 2000);
    } catch (error: any) {
      setStatus('error');
      setError(error.message);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 max-w-sm w-full animate-slide-up">
      <div className="relative bg-gradient-to-r from-[#1a1a1c] to-[#2a2a2c] rounded-lg shadow-2xl border border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3c7dc3] via-[#7400b8] to-[#3c7dc3] opacity-30 animate-gradient-x" />
        
        <div className="relative p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-all hover:rotate-90 duration-300"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start space-x-3 mb-4">
            <div className="bg-gradient-to-br from-[#3c7dc3] to-[#7400b8] p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1 animate-fade-in">
                {banner.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed animate-fade-in-delay">
                {banner.description}
              </p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="flex items-center space-x-2 bg-green-500/10 text-green-400 p-3 rounded-lg animate-fade-in text-sm">
              <CheckCircle className="w-4 h-4 animate-bounce" />
              <span>Thank you! Your eBook download will begin shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {error && (
                <div className="flex items-center space-x-2 text-red-400 text-xs bg-red-500/10 p-2 rounded-lg animate-shake">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-[#101012] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#3c7dc3] focus:ring-1 focus:ring-[#3c7dc3]/20 transition-all duration-300"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-gradient-to-r from-[#3c7dc3] to-[#7400b8] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1.5 group hover:shadow-lg hover:shadow-[#3c7dc3]/20 text-sm"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Download Now</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}