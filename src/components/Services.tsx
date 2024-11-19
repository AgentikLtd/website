import React from 'react';
import { Cloud, Bot, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Genesys Cloud CX Implementation',
    description: 'Expert deployment and optimization of Genesys Cloud CX platforms for seamless customer interactions.',
  },
  {
    icon: Bot,
    title: 'GenAI Integration',
    description: 'Cutting-edge AI solutions that transform customer experience and operational efficiency.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Enhance system performance and reliability through advanced monitoring and optimization.',
  },
  {
    icon: Users,
    title: 'Training & Support',
    description: 'Comprehensive training and ongoing support to maximize your investment.',
  },
];

export default function Services() {
  return (
    <div className="bg-[#0c0c0e] py-24" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leverage our deep expertise in Genesys Cloud CX and GenAI to transform your customer experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#101012] p-6 rounded-xl border border-white/10 hover:border-[#3c7dc3] transition-colors group"
            >
              <service.icon className="w-12 h-12 text-[#3c7dc3] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}