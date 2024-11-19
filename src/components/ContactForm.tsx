import React, { useState } from 'react';
import { Send, AlertCircle, Linkedin } from 'lucide-react';
import { submitContactForm } from '../services/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData({ name: '', position: '', email: '', details: '' });
    } catch (err) {
      setError('Failed to submit the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#101012] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Share your project details with us, and we'll help you create exceptional customer experiences.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1a1a1c] rounded-2xl p-8 text-center border border-[#3c7dc3]/30">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3c7dc3]/20 mb-4">
              <Send className="w-8 h-8 text-[#3c7dc3]" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">Message Sent!</h2>
            <p className="text-gray-400">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-[#3c7dc3] hover:text-white transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#1a1a1c] rounded-2xl p-8 space-y-6 border border-white/10">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#101012] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3c7dc3] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                Position
              </label>
              <input
                type="text"
                id="position"
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full bg-[#101012] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3c7dc3] focus:border-transparent transition-all"
                placeholder="CX Manager"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#101012] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3c7dc3] focus:border-transparent transition-all"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">
                Project Details
              </label>
              <textarea
                id="details"
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                rows={4}
                className="w-full bg-[#101012] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3c7dc3] focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project and requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3c7dc3] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2c5a9a] transition-all duration-300 hover:shadow-lg hover:shadow-[#3c7dc3]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us on LinkedIn</h3>
          <a
            href="https://linkedin.com/company/agentik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#0a66c2] text-white px-6 py-3 rounded-xl hover:bg-[#004182] transition-all duration-300 hover:shadow-lg hover:shadow-[#0a66c2]/20"
          >
            <Linkedin className="w-5 h-5" />
            <span>Follow Agentik</span>
          </a>
          <p className="mt-4 text-gray-400">
            Stay updated with our latest news and insights
          </p>
        </div>
      </div>
    </div>
  );
}