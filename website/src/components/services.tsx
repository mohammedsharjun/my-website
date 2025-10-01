"use client";
import React from 'react';
import { useRive } from '@rive-app/react-canvas';


const Services: React.FC = () => {
  const { RiveComponent } = useRive({
    src: '/rive/service.riv',
    artboard: 'services',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  return (
    <section className="relative z-40">
      <div className="max-w-full mx-auto">
        <div className="h-[500px] w-[450px] rounded-2xl relative overflow-hidden">
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
    </section>
  )
};

export default Services;