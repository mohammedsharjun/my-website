"use client";
import React from 'react';

const WebDesignSection: React.FC = () => {
  return (
    <section className="relative py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-black leading-tight">
              Web Design
            </h2>
            
            <p className="text-black text-lg leading-relaxed">
              We craft custom websites that combine unique visuals with seamless functionality, helping your startup stand out and succeed.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-black mb-6">
                Services:
              </h3>
              <ul className="space-y-4 text-black">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Custom Website Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>UX/UI Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>E-commerce</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Webflow Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>CMS Implementation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>SEO</span>
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-4 px-8 rounded-full transition-colors duration-200 flex items-center gap-3 group">
                More Info
                <svg 
                  className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            {/* Laptop and Stand */}
            <div className="relative mx-auto" style={{ width: '600px', height: '400px' }}>
              {/* Laptop Stand */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-80 h-16 bg-white rounded-lg shadow-lg">
                  {/* Stand tiers */}
                  <div className="absolute -top-2 left-4 w-72 h-4 bg-white rounded-t-lg"></div>
                  <div className="absolute -top-4 left-8 w-64 h-4 bg-white rounded-t-lg"></div>
                </div>
              </div>
              
              {/* Laptop */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Laptop Base */}
                  <div className="w-80 h-52 bg-gray-800 rounded-lg shadow-2xl">
                    {/* Keyboard area */}
                    <div className="absolute bottom-2 left-4 right-4 h-16 bg-gray-900 rounded"></div>
                    {/* Trackpad */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-700 rounded"></div>
                  </div>
                  
                  {/* Laptop Screen */}
                  <div className="absolute -top-40 left-0 w-80 h-48 bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Screen Content - Gradient Background */}
                    <div className="w-full h-full bg-gradient-to-b from-pink-300 via-orange-200 to-white relative">
                      {/* Navigation */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                        <div className="text-white font-medium text-sm">incipet</div>
                        <div className="flex gap-4 text-white text-sm">
                          <span>Home</span>
                          <span>Pricing</span>
                          <span>Features</span>
                          <button className="bg-white text-pink-300 px-3 py-1 rounded-full text-xs">Connect</button>
                        </div>
                      </div>
                      
                      {/* Main Title */}
                      <div className="absolute bottom-8 left-6">
                        <h1 className="text-white text-3xl font-bold">Incipet</h1>
                      </div>
                      
                      {/* Abstract Shapes/Office Elements */}
                      <div className="absolute top-20 right-8">
                        <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="absolute top-32 right-16">
                        <div className="w-8 h-8 bg-white/30 rounded"></div>
                      </div>
                      <div className="absolute bottom-16 right-12">
                        <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;




