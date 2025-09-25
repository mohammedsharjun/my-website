"use client";
import React from 'react';
import { useRive } from '@rive-app/react-canvas';

const ArrowAnimation: React.FC = () => {
  const { RiveComponent } = useRive({
    src: '/rive/arrow_animation.riv',
    artboard: 'process',
    stateMachines: 'StateMachine',
    autoplay: true,
  });

  return (
    <section className="relative bg-[#160c16] py-20">
      <div className="mx-auto max-w-full px-8">
        <div className="h-[700px] w-full rounded-2xl overflow-hidden">
          <RiveComponent />
        </div>
      </div>
    </section>
  );
};

export default ArrowAnimation;
