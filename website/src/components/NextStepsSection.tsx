"use client";
import React from 'react';

const NextStepsSection: React.FC = () => {
  return (
    <section className="relative py-16 px-8">
      <div className="max-w-[90vw] mx-auto">
        <div className="bg-[#edcbff] rounded-3xl p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Question */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-black font-medium">What is next</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                How to get started?
              </h2>
            </div>

            {/* Right Side - Content and Buttons */}
            <div className="space-y-8">
              <p className="text-lg text-black leading-relaxed italic">
                Let's bring your vision to life and transform your ideas into a powerful, unforgettable brand that drives growth and success!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Schedule a call button */}
                <button 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 text-black font-medium rounded-xl hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  <span>Schedule a call</span>
                  <span className="text-lg">👋</span>
                </button>
                
                {/* Get pricing info button */}
                <button 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-black text-black font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  <span>Get pricing info</span>
                  <span className="text-lg">💰</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;

