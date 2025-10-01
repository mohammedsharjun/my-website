"use client";
import React from 'react';
import FeatureShowcase from './FeatureShowcase';
import {  CircleArrowOutUpRight } from 'lucide-react';


const WhoWeAreSection: React.FC = () => {
  return (
    <section className="relative py-20 px-3 ">
      <div className="max-w-[90vw] mx-auto p-10 rounded-4xl bg-[#dea6fc]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Bullet Point and Logo */}
          <div className="space-y-16">
            {/* Bullet Point with "Who we are" */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black text-xl font-medium">Who we are</span>
            </div>
            
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              {/* Abstract 3D Logo */}
              <div className="relative">
                <div className="w-16 h-16 relative">
                  {/* Main overlapping ovals/crescents */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transform rotate-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full transform -rotate-6 translate-x-1"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform rotate-3 translate-x-2"></div>
                  
                  {/* Subtle shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full transform rotate-12 translate-x-1 translate-y-1 opacity-30"></div>
                </div>
              </div>
              
              {/* Company Name */}
              <span className="text-black text-2xl font-light lowercase">deeniac</span>
              
            </div>
            <FeatureShowcase />
          </div>

          {/* Right Column - Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-5xl font-medium text-black leading-tight">
            Your Ally, Driving Bold Progress and Growth
            </h2>
            
            {/* Description Paragraphs */}
            <div className="space-y-4 text-black leading-relaxed">
              <p className="text-lg">
              We partner with ambitious brands and teams to bring high-impact websites to life—quickly and with zero compromise. Our approach is focused on clarity, speed, and real results. You get more than just beautiful code: you get a launchpad for your business growth, delivered on time, every time.
              </p>
              
              <p className="text-lg">
              Our mission is simple—help ambitious founders launch with confidence and scale without limits. Let’s build something remarkable together.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className='flex justify-end'>
              <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 pl-6 pr-2 rounded-full transition-colors duration-200 flex items-center gap-3 group">
              Start Your Project
                <span className="bg-white text-black rounded-full p-2"><CircleArrowOutUpRight className="w-5 h-5 rotate-45" /></span>
                
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;

