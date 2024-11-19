import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#101012] via-[#101012]/80 to-[#7400b8]/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
          alt="Customer Experience Innovation"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming businesses with{' '}
            <span className="text-[#ff451a]">Genesys Cloud CX</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unleash the Power of Genesys Cloud CX and AI to Revolutionise Your Customer Experience
          </p>
          <Link
            to="/who-we-are"
            className="group inline-flex bg-gradient-to-r from-[#7400b8] to-[#3c7dc3] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 items-center space-x-2 hover:shadow-lg hover:shadow-[#7400b8]/20"
          >
            <span>Get Started</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}