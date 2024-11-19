import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <div className="bg-[#101012] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#3c7dc3]/10 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101012] via-transparent to-[#101012]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you leverage Genesys Cloud CX and GenAI to create exceptional customer experiences.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center bg-[#3c7dc3] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2c5a9a] transition-all duration-300 hover:shadow-lg hover:shadow-[#3c7dc3]/20"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}