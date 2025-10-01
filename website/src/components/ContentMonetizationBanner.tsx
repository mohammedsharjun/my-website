"use client";
import React from 'react';

const ContentMonetizationBanner: React.FC = () => {
  return (
    <section className="relative py-20 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Main Text with Embedded Images */}
          <div className="space-y-4">
            {/* Line 1: "Turn your" + Image + "content into" */}
            <div className="flex items-center justify-center gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span>Turn your</span>
              <div className="relative">
                <div className="w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-xs font-bold text-center">
                    Content<br/>Creator
                  </div>
                </div>
              </div>
              <span>content into</span>
            </div>

            {/* Line 2: "income" with gradient + "– in just" + Image + "three" */}
            <div className="flex items-center justify-center gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span 
                className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
              >
                income
              </span>
              <span>– in just</span>
              <div className="relative">
                <div className="w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-xs font-bold text-center">
                    Team of<br/>Three
                  </div>
                </div>
              </div>
              <span>three</span>
            </div>

            {/* Line 3: "simple steps" */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              simple steps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentMonetizationBanner;
