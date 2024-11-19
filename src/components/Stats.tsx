import React from 'react';

const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Successful Deployments' },
  { value: '35%', label: 'Cost Reduction' },
  { value: '24/7', label: 'Support Coverage' },
];

export default function Stats() {
  return (
    <div className="bg-[#101012] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#3c7dc3] mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}