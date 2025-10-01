"use client";
import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import ShinyText from './ShinyText';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';
const ArrowAnimation: React.FC = () => {
  const { RiveComponent } = useRive({
    src: '/rive/arrow_animationn.riv',
    artboard: 'process',
    stateMachines: 'StateMachine',
    autoplay: true,
  });

  return (
    <section className="relative">
      <div className="max-w-[95%] mx-auto">
        <div className="h-[700px] w-full rounded-2xl relative overflow-hidden">
          <RiveComponent />

          
          
         {/* Title and Subtitle - Top Left */}
           <div className="absolute top-10 left-18 z-10">
           <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#edcbff] rounded-full"></div>
                <span className="text-[#edcbff] font-medium">Your Path Forward</span>
            </div>

              <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
              From Idea to Launch
              </h2>
              <div className="flex mt-2 gap-5">
            
            <HoverBorderGradient
            containerClassName="rounded-full"
            className=" bg-black font-semibold px-4 py-2"
            as="button"
          >
            <span className="text-transparent text-md bg-clip-text bg-gradient-to-r from-[#e89eff] to-[#8aa8ff]">Schedule a Call</span>
          </HoverBorderGradient></div>
            </div>
          </div> 
          
          {/* Description and CTA - Bottom Right */}
           <div className="absolute bottom-15 right-15 z-10 text-right max-w-2xl">
           <p className="text-2xl text-white leading-relaxed italic">
           Let’s bring your vision to life and build a brand that’s unforgettable—driving growth, impact, and lasting success!
              </p>
          </div>
        </div> 
      
    </section>
  );
};

export default ArrowAnimation;
