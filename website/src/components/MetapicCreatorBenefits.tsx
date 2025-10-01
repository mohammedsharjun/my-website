"use client";
import React, { useRef, useEffect } from 'react';

const MetapicCreatorBenefits: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set to 2x speed (change as desired)
    }
  }, []);
  return (
    <section className="relative py-10 px-8 ">
      
      <div className="max-w-[90vw] mx-auto p-12 bg-[#dea6fc] rounded-4xl">
      
    
        <div className="grid lg:grid-cols-2 gap-16  items-start">
          
          {/* Left Column - Tablet/Screen UI */}
          <div className="relative">
            {/* Decorative Frame Elements */}
            {/* <div className="absolute -top-4 -left-4 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform rotate-0 opacity-80"></div>
            <div className="absolute -bottom-4 -right-3 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform -rotate-0 opacity-80"></div>
            <div className="absolute -top-4 -right-3 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform rotate-0 opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform -rotate-0 opacity-80"></div> */}
            
            {/* Main Tablet/Screen */}
            <div className="relative bg-black rounded-3xl w-[600px] h-[400px] p-4 shadow-2xl" style={{ aspectRatio: '5/4' }}>
              {/* Tablet Screen with Video */}
              <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                {/* Video Container */}
                <video 
                  className="w-full h-full object-fill rounded-2xl"
                  src="/videos/Projectongoing.mp4"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='12'%3EVideo%3C/text%3E%3C/svg%3E"
                  
                />
                  
                
                 
                
                {/* Optional overlay elements to maintain tablet feel */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Subtle border highlight */}
                  <div className="absolute inset-2 border border-white/10 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits List */}
          <div className="relative ">
            {/* Decorative Frame Elements */}
            {/* <div className="absolute -top-4 -left-4 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform rotate-0 opacity-80"></div>
            <div className="absolute -bottom-4 -right-3 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform -rotate-0 opacity-80"></div>
            <div className="absolute -top-4 -right-3 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform rotate-0 opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-20 bg-[#ffdda9] rounded-xl rounded-br-2xl transform -rotate-0 opacity-80"></div> */}
            
            {/* Main Tablet/Screen */}
            <div className="relative bg-black rounded-3xl w-[600px] h-[400px] p-4 shadow-2xl" style={{ aspectRatio: '5/4' }}>
              {/* Tablet Screen with Video */}
              <div className="w-full  h-full bg-black rounded-2xl overflow-hidden relative">
                {/* Video Container */}
                <video 
                  className="w-full h-full object-fill rounded-2xl"
                  src="/videos/Projectongoingg.mp4"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  ref={videoRef}
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='12'%3EVideo%3C/text%3E%3C/svg%3E"
                  
                />
                  
                
                 
                
                {/* Optional overlay elements to maintain tablet feel */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Subtle border highlight */}
                  <div className="absolute inset-2 border border-white/10 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

       
      </div>
    </section>
  );
};

export default MetapicCreatorBenefits;
