import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { auth } from '../config/firebase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { user, clearUser } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    clearUser();
    navigate('/');
  };

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className={`max-w-7xl mx-auto rounded-[30px] transition-all duration-300 ${
        isScrolled ? 'bg-[#101012]/80' : 'bg-transparent'
      } backdrop-blur-lg border border-white/10`}>
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/agentikwebsite.firebasestorage.app/o/AgenkitLogo.png?alt=media&token=5e9fffb9-b540-40f3-81bd-16caf343873f" 
                alt="Agentik Logo"
                className="h-16 w-auto"
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/who-we-are" 
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base px-4 py-2 rounded-full hover:bg-white/5"
              >
                Who We Are
              </Link>
              <Link 
                to="/expertise" 
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base px-4 py-2 rounded-full hover:bg-white/5"
              >
                Expertise
              </Link>
              <Link 
                to="/why-us" 
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base px-4 py-2 rounded-full hover:bg-white/5"
              >
                Why Us
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base px-4 py-2 rounded-full hover:bg-white/5"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="bg-[#3c7dc3] text-white px-6 py-2.5 rounded-full hover:bg-[#2c5a9a] transition-colors text-sm lg:text-base shadow-lg hover:shadow-[#3c7dc3]/20"
              >
                Contact Us
              </Link>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden border-t border-white/10 mt-2">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                to="/who-we-are" 
                className="block px-4 py-2.5 text-gray-300 hover:text-white rounded-2xl hover:bg-white/5 transition-colors"
              >
                Who We Are
              </Link>
              <Link 
                to="/expertise" 
                className="block px-4 py-2.5 text-gray-300 hover:text-white rounded-2xl hover:bg-white/5 transition-colors"
              >
                Expertise
              </Link>
              <Link 
                to="/why-us" 
                className="block px-4 py-2.5 text-gray-300 hover:text-white rounded-2xl hover:bg-white/5 transition-colors"
              >
                Why Us
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-2.5 text-gray-300 hover:text-white rounded-2xl hover:bg-white/5 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2.5 bg-[#3c7dc3] text-white rounded-2xl hover:bg-[#2c5a9a] transition-colors text-center shadow-lg hover:shadow-[#3c7dc3]/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}