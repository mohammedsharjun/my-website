"use client";
import React from 'react';
import Services from './Services';

const MetapicBenefits: React.FC = () => {
 
  return (
    <section className="relative py-20 px-8 overflow-hidden">
      <div className="max-w-[90vw] bg-[#dea6fc] mx-auto rounded-4xl py-5 relative z-10">
      <div className='flex items-center justify-center gap-3'>
          <div className="w-2 h-2 bg-[#333333] rounded-full"></div>
             <span className="text-[#333333] font-medium">Your Path Forward</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-5 font-medium text-center text-black leading-tight">
            Projects Ongoing
          </h2>
            
            
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Services Animation */}
          <div className="flex-1 flex justify-center relative z-20">
            <div className="relative w-full max-w-lg">
              <div className="relative z-30">
                <Services />
              </div>
              
              {/* Background decorative elements */}
              {/* <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-50 rounded-full opacity-30 z-10"></div> */}
            </div>
          </div>

          {/* Right Side - Benefits List */}
          <div className="flex-1 max-w-lg">
            
            
            <div className="space-y-8">
              {/* Benefit 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black ">
                  Rapid, Reliable Launches
                  </h3>
                  
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black ">
                  Fast, On-Time Delivery
                  </h3>
                  
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black ">
                  Designs That Convert and Impress
                  </h3>
                  
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black ">
                  Tailored to Your Brand Vision
                  </h3>
                  
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black ">
                  Transparent, Step-by-Step Process
                  </h3>
                  
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black ">
                  Support Beyond Launch
                  </h3>
                  
                </div>
              </div>
            </div>

            
          </div>
          
        </div>
        {/* Bottom text */}
        <div className="mt-2 text-lg text-center">
              <p className="text-gray-600">
                All the benefits for brands and creators in one platform.
              </p>
            </div>
      </div>
    </section>
  );
};

export default MetapicBenefits;

