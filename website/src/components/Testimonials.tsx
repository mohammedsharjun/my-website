"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const testimonials = [
    {
      name: "Tunde O",
      text: "Loft was a breath of fresh air. The apartment was neat, well-furnished, and in a secure area. I stayed for a work trip in Lekki and didn't want to leave. Great value for money!",
      avatar: "👨‍💼",
      bgColor: "bg-purple-100",
      quoteColor: "text-purple-800"
    },
    {
      name: "Chinelo A",
      text: "From check-in to check-out, everything was smooth. The place was so cozy and had this modern vibe. I even hosted a small hangout with friends. Will definitely book again.",
      avatar: "👩‍💻",
      bgColor: "bg-white",
      quoteColor: "text-gray-700"
    },
    {
      name: "Idris B.",
      text: "I needed a quiet place to relax and Loft delivered. The location was central, the Wi-Fi was strong, and the host was super responsive. 10/10 experience.",
      avatar: "👨‍🎓",
      bgColor: "bg-yellow-100",
      quoteColor: "text-gray-700"
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-10 py-10 sm:py-12 md:py-16 lg:py-20"
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="mx-auto max-w-[95vw] sm:max-w-[90vw] px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-medium text-white mb-2 leading-tight px-4">
            Why Hustlers Choose Fitrova
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/50 text-center italic mb-6 sm:mb-8 md:mb-30 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4">
            Quit the grind. Unlock fast results, real growth, and founder-level speed with Fitrova.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center mx-auto max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-5 md:p-6 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:w-80 shadow-lg relative transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              style={{
                transform: index === 0 
                  ? 'rotate(-5deg) translateY(-10px)' 
                  : index === 1 
                  ? 'rotate(0deg) translateY(-30px)' 
                  : 'rotate(5deg) translateY(-10px)'
              }}
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-xl sm:text-2xl shadow-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="font-bold text-black text-base sm:text-lg">{testimonial.name}</div>
              </div>

              {/* Testimonial Text */}
              <p className={`${testimonial.quoteColor} text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6`}>
                {testimonial.text}
              </p>

              {/* Large Quotation Mark */}
              <div className={`absolute bottom-3 sm:bottom-4 right-3 sm:right-4 ${testimonial.quoteColor} text-3xl sm:text-4xl font-bold opacity-20`}>
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;