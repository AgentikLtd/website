import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'We put our clients\' success at the heart of everything we do, ensuring solutions that deliver real value.'
  },
  {
    icon: Target,
    title: 'Innovation-Driven',
    description: 'Constantly exploring and implementing cutting-edge technologies to keep our clients ahead.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality solutions and exceptional service standards.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Drawing from worldwide expertise to deliver locally optimised solutions.'
  }
];

export default function WhoWeAre() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#101012] via-[#101012]/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pioneering the Future of Customer Experience
            </h1>
            <p className="text-xl text-gray-300">
              At Agentik, we're more than consultants – we're your partners in transformation, 
              dedicated to revolutionising customer experience through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0c0c0e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Agentik was born from a passion for transforming customer experiences and a belief in doing things differently. We're more than consultants – we're your long-term partners in building sustainable, high-performing contact centre operations.
                </p>
                <p>
                  What sets us apart is our commitment to empowering your technical teams. We don't just design, build, and hand off your Genesys Cloud implementation. Instead, we work with you to establish modern ways of working that teach your resources how to operate, maintain, and continuously improve the platform.
                </p>
                <p>
                  With expertise rooted in DevOps and mature engineering practices, we guide you in adopting scalable continuous deployment and improvement strategies. Our approach ensures your organisation isn't just keeping up but staying ahead, capable of adapting to evolving customer needs and technological advancements.
                </p>
                <p>
                  By combining technical excellence with a human-first mindset, we help organisations unlock the full potential of Genesys Cloud, creating exceptional customer experiences that drive loyalty and growth. Our goal is to help you achieve lasting transformation – reducing costs, improving efficiency, and empowering your team to innovate and thrive.
                </p>
                <p>
                  At Agentik, we're driven by a simple mission: to help you build a foundation for continuous improvement in CX and create a competitive advantage for the AI age.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Modern Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core principles guide our approach and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#1a1a1c] p-6 rounded-xl border border-white/10 hover:border-[#3c7dc3] transition-all duration-300 group"
              >
                <value.icon className="w-12 h-12 text-[#3c7dc3] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}