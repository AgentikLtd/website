import React from 'react';
import { Cloud, Bot, Shield, Zap, Users, BarChart, Headphones, Settings } from 'lucide-react';

const solutions = [
  {
    icon: Cloud,
    title: 'Genesys Cloud CX Implementation',
    description: 'End-to-end deployment and optimisation of your Genesys Cloud CX platform.'
  },
  {
    icon: Bot,
    title: 'GenAI Integration',
    description: 'Advanced AI solutions for automated customer interactions and insights.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Ensuring robust security measures and regulatory compliance.'
  },
  {
    icon: Zap,
    title: 'Performance Optimisation',
    description: 'Enhancing system performance for maximum efficiency.'
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Smooth transition and adoption of new technologies.'
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights for informed decision-making.'
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: '24/7 technical support and system maintenance.'
  },
  {
    icon: Settings,
    title: 'Custom Integration',
    description: 'Seamless integration with existing systems and workflows.'
  }
];

export default function Expertise() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#101012] to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technical Expertise
            </h1>
            <p className="text-xl text-gray-300">
              Leveraging cutting-edge technology to deliver exceptional customer experiences 
              through Genesys Cloud CX and GenAI solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0c0c0e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#1a1a1c] p-6 rounded-xl border border-white/10 hover:border-[#3c7dc3] transition-all duration-300 group hover:-translate-y-1"
              >
                <solution.icon className="w-12 h-12 text-[#3c7dc3] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Industry-Leading Technology Stack
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our expertise spans across the latest technologies in customer experience 
                  and artificial intelligence. We specialise in:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#3c7dc3] rounded-full" />
                    <span>Genesys Cloud CX Platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#3c7dc3] rounded-full" />
                    <span>Generative AI & Machine Learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#3c7dc3] rounded-full" />
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#3c7dc3] rounded-full" />
                    <span>Cloud Infrastructure & DevOps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#3c7dc3] rounded-full" />
                    <span>Data Analytics & Visualisation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Technology Stack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}