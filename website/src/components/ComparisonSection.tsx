"use client";
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="relative py-20 px-8 bg-[#140c14]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column - Other Design Agencies */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gray-200 rounded-2xl p-8 overflow-hidden">
            <h2 className="text-3xl font-bold text-black mb-6">
              Other Design Agencies
            </h2>
            <p className="text-black mb-8 leading-relaxed">
              Other agencies often provide generic solutions with higher costs and limited flexibility, making them less adaptable to unique needs.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Offerings
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">Generic, limited flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">Generic templates, minimal innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">Delays due to complex processes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">High costs, often with hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mb-30 flex-shrink-0"></div>
                <span className="text-black">Limited, slow response time</span>
              </li>
            </ul>
            </div>
          </div>

          {/* Right Column - Deeniac */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-purple-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 z-20">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 right-16 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
            </div>
            
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              </div>
              <span className="text-white text-xl font-semibold">Deeniac</span>
            </div>
            
            <p className="text-white mb-8 leading-relaxed">
              We strike the perfect balance between high-quality outcomes, reliable timelines, and transparent pricing, delivering results that exceed expectations.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Key benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white">Customized, tailored to your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white">Premium quality, attention to detail</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white">Clear deadlines, always on time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white">Transparent, no hidden costs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white">Dedicated team with responsive support</span>
              </li>
            </ul>
            
            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 px-6 rounded-full transition-colors duration-200 flex items-center gap-2">
                Let's Talk
                <span className="text-lg">👋</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ComparisonSection;


