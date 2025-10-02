"use client";
import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { RiveComponent } = useRive({
    src: '/rive/servicesss.riv',
    artboard: 'services',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-40 py-8 sm:py-10 md:py-12 lg:py-16"
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6 px-4">
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#dac6ff] rounded-full"></div>
          <span className="text-[#dac6ff] font-medium text-xs sm:text-sm md:text-base">Founder's Shortcut to Power</span>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-medium text-white mb-2 sm:mb-3 md:mb-4 leading-tight px-4">
        Why Hustlers Choose Fitrova
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/50 text-center italic mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4">
        Quit the grind. Unlock fast results, real growth, and founder-level speed with Fitrova.
      </p>

      <div className="max-w-full flex justify-center items-center mb-16 sm:mb-20 md:mb-24 lg:mb-30 mx-auto px-4">
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[90vw] sm:max-w-[750px] md:max-w-[900px] lg:max-w-[1050px] justify-center items-center rounded-xl sm:rounded-2xl relative overflow-hidden">
          <RiveComponent 
            className="w-full h-full"
            style={{ 
              width: '100%', 
              height: '100%',
              position: 'relative',
              zIndex: 50
            }}
          />
        </div>
      </div>
    </motion.section>
  )
};

export default Services;