"use client";
import React from 'react';

// reserved helper from previous layout; kept for future reuse

const FeatureShowcase: React.FC = () => {
  return (
    <section className="relative bg-transparent z-10">
      <div className="max-w-full mx-auto ">
        {/* Stats row */}
        <div className="mt-30 grid grid-cols-2 md:grid-cols-4 gap-3  text-center">
          <div className='rounded-2xl py-7 bg-[#140c14]'>
            <div className="text-3xl md:text-4xl font-extrabold text-white">5+</div>
            <div className="text-md leading-tight text-white/60 pt-2">Projects <br /> Launched</div>
          </div>
          <div className='rounded-2xl py-7 bg-[#140c14]'>
            <div className="text-3xl md:text-4xl font-extrabold text-white">100%</div>
            <div className="text-md leading-tight text-white/60 pt-2">On-Time <br /> Delivery Rate</div>
          </div>
          <div className='rounded-2xl py-7 bg-[#140c14]'>
            <div className="text-3xl md:text-4xl font-extrabold text-white">15-Day</div>
            <div className="text-md leading-tight text-white/60 pt-2">Launch <br /> Guarantee</div>
          </div>
          <div className='rounded-2xl py-7 bg-[#140c14]'>
            <div className="text-3xl md:text-4xl font-extrabold text-white">4.9/5</div>
            <div className="text-md leading-tight text-white/60 pt-2">Client <br /> Satisfaction</div>
          </div>
        </div>
        

        
      </div>
    </section>
  );
};

export default FeatureShowcase;


