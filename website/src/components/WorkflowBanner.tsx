"use client";
import React from 'react';
import ShinyText from './ShinyText';

const WorkflowBanner: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center pt-5 mb-7">
      {/* Left Glowing Line with Arrow */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <div className="w-32 h-[1px] bg-white/20 relative">
          <div className="absolute -left-52 top-1/2 transform -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent to-white/40"></div>
          {/* Left Circle */}
          <div className="absolute -left-22 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)]"></div>
        </div>
      </div>

      {/* Central Glassmorphism Pill */}
      <div className="relative z-10">
        <div className="bg-blacl backdrop-blur-xl border border-white/20 rounded-full px-5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
          {/* Glassy inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-full"></div>
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {/* Text with subtle glow */}
          <div className="relative z-10">
            <ShinyText 
              text="(No More Waiting, No More Agency Fluff.)" 
              className="text-xs font-medium tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              speed={3}
            />
          </div>
          
          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-[20px] bg-gradient-to-b from-purple-800/15 to-transparent rounded-full"></div>
          {/* Bottom inner shadow */}
          
        </div>
      </div>

      {/* Right Glowing Line with Arrow */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <div className="w-32 h-[1px] bg-white/20 relative">
          <div className="absolute -right-52 top-1/2 transform -translate-y-1/2 w-32 h-[1px] bg-gradient-to-l from-transparent to-white/40"></div>
          {/* Right Circle */}
          <div className="absolute -right-22 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)]"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowBanner;
