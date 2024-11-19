import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Loader2, CheckCircle, AlertCircle, Mail, X } from 'lucide-react';
import { subscribeToNewsletter, unsubscribeFromNewsletter } from '../services/newsletter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isUnsubscribe, setIsUnsubscribe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    try {
      setStatus('loading');
      
      if (isUnsubscribe) {
        await unsubscribeFromNewsletter(email);
        setStatus('success');
        setMessage('You have been unsubscribed successfully');
      } else {
        await subscribeToNewsletter(email);
        setStatus('success');
        setMessage('Thank you for subscribing!');
      }
      
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
        setIsUnsubscribe(false);
      }, 5000);
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-transparent to-[#0c0c0e]/80 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/who-we-are" className="text-gray-400 hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-400 hover:text-white transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-gray-400 hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/agentik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center space-x-2 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Newsletter</h3>
            <p className="text-gray-400">Stay updated with our latest insights</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/5 text-white px-4 py-2 rounded-l-xl border border-white/10 focus:outline-none focus:border-[#3c7dc3] flex-1 placeholder-gray-500 disabled:opacity-50"
                  disabled={status === 'loading' || status === 'success'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`text-white px-4 py-2 rounded-r-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px] ${
                    isUnsubscribe ? 'bg-red-500 hover:bg-red-600' : 'bg-[#3c7dc3] hover:bg-[#2c5a9a]'
                  }`}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : isUnsubscribe ? (
                    'Unsubscribe'
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              {message && (
                <div className={`flex items-center space-x-2 text-sm ${
                  status === 'error' ? 'text-red-400' : 'text-green-400'
                }`}>
                  {status === 'error' ? (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{message}</span>
                </div>
              )}
              <button
                type="button"
                onClick={() => setIsUnsubscribe(!isUnsubscribe)}
                className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 transition-colors"
              >
                {isUnsubscribe ? (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Want to subscribe instead?</span>
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4" />
                    <span>Want to unsubscribe?</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Agentik Limited. Company Registration No: SC815357
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Settings
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                to="/cookie-policy" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Preferences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}