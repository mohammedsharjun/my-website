"use client";
import React from 'react';
import { useRive } from '@rive-app/react-canvas';


const TechStack: React.FC = () => {
  const { RiveComponent } = useRive({
    src: '/rive/techstack.riv',
    artboard: 'techstack',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  return (
    <section className="relative z-40">
      <div className="max-w-[90vw] bg-[#dea6fc] rounded-4xl mx-auto">
        <div className="h-[650px] w-full rounded-2xl relative overflow-hidden">
          <RiveComponent 
            className="w-full h-full"
            style={{ 
              width: '100%', 
              height: '100%',
              position: 'relative',
              zIndex: 50
            }}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-60">
            <div className="text-center max-w-4xl px-8">
              {/* Title */}
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Built With the Best
              </h2>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-black/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                We craft every site using a proven stack of industry-leading tools—React, Next.js, Tailwind, Framer, Firebase, and more—so you get modern, scalable, and lightning-fast results, every time.
              </p>
              
              {/* CTA */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-black mb-6">
                  Ready to launch your dream site?
                </h3>
                <button 
                  className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black/90 transition-colors duration-300 shadow-lg"
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
                  Get Started Today
                </button>
        </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  )
};

  export default TechStack;