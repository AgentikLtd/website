import React from 'react';
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Clock, 
  Zap,
  Users,
  BarChart,
  Brain,
  Target,
  Shield,
  Settings,
  LineChart
} from 'lucide-react';

const valueProps = [
  {
    icon: Brain,
    title: 'Holistic Transformation',
    description: 'Genesys Cloud, deployed optimally, becomes greater than the sum of its parts, transforming ways of working to deliver exceptional customer experiences.'
  },
  {
    icon: Shield,
    title: 'Future-Ready Deployments',
    description: 'Safe and scalable CCaaS technology implementations leveraging DevOps methods for rapid adoption of emerging technologies.'
  },
  {
    icon: Zap,
    title: 'Empowering Operational Change',
    description: 'Enabling businesses to react swiftly to evolving customer needs and efficiently manage change processes.'
  },
  {
    icon: Settings,
    title: 'Comprehensive Services',
    description: 'From full platform design and implementation to personalised training, we help IT organisations maximize their Genesys Cloud and Generative AI investments.'
  },
  {
    icon: Target,
    title: 'Flexible Support',
    description: 'Sensitive to your evolving business needs, we provide adaptable solutions for agent desktops, target operating models, and beyond.'
  },
  {
    icon: LineChart,
    title: 'Maximising ROI',
    description: 'Helping clients implement cutting-edge technologies like Agent Copilot, Gamification, and Speech & Text Analytics to achieve higher returns.'
  }
];

const stats = [
  {
    value: '50+',
    label: 'Successful Implementations'
  },
  {
    value: '15+',
    label: 'Years Genesys Experience'
  },
  {
    value: '24/7',
    label: 'Support Coverage'
  },
  {
    value: '35%',
    label: 'Average Cost Reduction'
  }
];

const testimonials = [
  {
    quote: "Agentik's expertise in Genesys Cloud CX transformed our customer service operations. The results exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CX Director",
    company: "Global Retail Corp"
  },
  {
    quote: "The GenAI integration has revolutionized how we handle customer interactions. Our efficiency has improved by 45%.",
    author: "Michael Chen",
    position: "Head of Operations",
    company: "TechServe Solutions"
  },
  {
    quote: "Professional, knowledgeable, and always available. Agentik is more than a vendor - they're a true partner.",
    author: "Emma Rodriguez",
    position: "VP of Customer Success",
    company: "FinanceHub Inc"
  }
];

export default function WhyUs() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#101012] via-[#101012]/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1516618317270-b99d1715c58d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Customer Experience Innovation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Us
            </h1>
            <p className="text-xl text-gray-300">
              We don't just implement technology – we architect transformative experiences that delight customers and empower employees
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0c0c0e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#1a1a1c] to-[#101012] p-8 rounded-xl border border-white/10 hover:border-[#3c7dc3] transition-all duration-300 group hover:-translate-y-1"
              >
                <prop.icon className="w-12 h-12 text-[#3c7dc3] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-3">{prop.title}</h3>
                <p className="text-gray-400">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-[#101012]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Proven Track Record</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our experience and dedication to excellence have delivered measurable results 
              for organisations across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#3c7dc3] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1c] p-8 rounded-xl border border-white/10 hover:border-[#3c7dc3] transition-all duration-300 group"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="inline-block w-5 h-5 text-[#3c7dc3] fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-[#3c7dc3] text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0c0c0e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1a1a1c] to-[#101012] rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Navigate the Future with Confidence</h2>
                <p className="text-gray-300 mb-6">
                  Turn Genesys Cloud's rapid innovation into your competitive advantage. We curate and prioritise product updates, beta features, and new capabilities that matter most to your business.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Our Roadmap Service</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#3c7dc3]" />
                        <span className="text-gray-300">Tailored feature prioritisation aligned to your goals</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#3c7dc3]" />
                        <span className="text-gray-300">Early access programme management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#3c7dc3]" />
                        <span className="text-gray-300">Strategic implementation planning</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#3c7dc3]" />
                        <span className="text-gray-300">Value-driven release tracking</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-300 italic">
                    Skip the information overload. Get clear, actionable insights that keep you ahead of the curve.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Strategic Planning"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3c7dc3]/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}