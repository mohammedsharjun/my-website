"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const MetapicCreatorBenefits: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Set to 2x speed (change as desired)
    }
  }, []);
  return (
    <section className="relative py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8" ref={sectionRef}>
      
      <div className="max-w-[95vw] sm:max-w-[90vw] mx-auto p-6 sm:p-8 md:p-10 lg:p-12 bg-[#dea6fc] rounded-3xl sm:rounded-4xl">
      
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Tablet/Screen UI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ willChange: 'opacity, transform' }}
            className="relative flex flex-col"
          >
            {/* Title Above Video */}
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
                Projects in Progress
              </h3>
            </div>

            {/* Main Tablet/Screen */}
            <div className="relative bg-black rounded-2xl sm:rounded-3xl w-full max-w-[600px] mx-auto aspect-video sm:aspect-[6/4] p-3 sm:p-4 shadow-2xl">
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

            {/* Description Below Video */}
            <div className="mt-4 sm:mt-5 md:mt-6 max-w-full sm:max-w-[600px] mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-black/70 text-center leading-relaxed px-2">
                Watch your website come to life in real-time. Track every milestone as we build your conversion-driven site with complete transparency.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={{ willChange: 'opacity, transform' }}
            className="relative flex flex-col"
          >
            {/* Title Above Video */}
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
                Epic Automations
              </h3>
            </div>

            {/* Main Tablet/Screen */}
            <div className="relative bg-black rounded-2xl sm:rounded-3xl w-full max-w-[600px] mx-auto aspect-video sm:aspect-[6/4] p-3 sm:p-4 shadow-2xl">
              {/* Tablet Screen with Video */}
              <div className="w-full  h-full bg-black rounded-2xl overflow-hidden relative">
                {/* Video Container */}
                <video 
                  className="w-full h-full object-fill rounded-2xl"
                  src="/videos/epic.mp4"
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

            {/* Description Below Video */}
            <div className="mt-4 sm:mt-5 md:mt-6 max-w-full sm:max-w-[600px] mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-black/70 text-center leading-relaxed px-2">
                Smart automations that work 24/7. From lead capture to email sequences, we build systems that convert visitors into customers on autopilot.
              </p>
            </div>
          </motion.div>
        </div>
        

       
      </div>
    </section>
  );
};

export default MetapicCreatorBenefits;
