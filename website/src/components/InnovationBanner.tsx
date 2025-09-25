"use client";
import React from 'react';

const InnovationBanner: React.FC = () => {
  return (
    <section className="relative bg-[#140c14] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-3xl md:text-6xl leading-[1.15] font-semibold text-white">
          Innovation is central to our ethos. We
          <br className="hidden md:block" /> continually explore new
          <span className="text-blue-400"> technologies </span>
          and strategies to
          <span className="text-pink-300"> revolutionize </span>
          how
          <br className="hidden md:block" /> people interact with finances.
        </p>
      </div>
    </section>
  );
};

export default InnovationBanner;






