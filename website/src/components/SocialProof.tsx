"use client";
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      
      <div className="text-white/60 text-sm font-medium">
        Trusted by
      </div>
      {/* Overlapping Profile Pictures */}
      <div className="flex -space-x-3">
        {/* Profile 1 - Person with dark hair, red top */}
        <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80" 
            alt="Happy client" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile 2 - Person with light brown hair, light top */}
        <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80" 
            alt="Happy client" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile 3 - Person with dark hair, teal top */}
        <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80" 
            alt="Happy client" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile 4 - Person with dark hair, light top */}
        <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80" 
            alt="Happy client" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile 5 - Person with light brown hair, dark top */}
        <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80" 
            alt="Happy client" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stars Rating */}
      {/* <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-300 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div> */}
    
      {/* Business Count Text */}
      <div className="text-white/60 text-sm font-medium">
    5+ founders
      </div>
    </div>
  );
};

export default SocialProof;
