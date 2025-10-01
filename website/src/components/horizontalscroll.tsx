import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './horizontalscroll.css';

const images = [
  { src: '/images/goodui.jpg', description: 'Good UI Design' },
  { src: '/images/badui.jpg', description: 'Bad UI Design' },
  { src: '/images/profile.png', description: 'Profile Image' },
  { src: '/images/lanyard.png', description: 'Lanyard Design' },
  { src: '/images/goodui.jpg', description: 'Good UI Design' },
  { src: '/images/badui.jpg', description: 'Bad UI Design' },
  { src: '/images/profile.png', description: 'Profile Image' },
  { src: '/images/lanyard.png', description: 'Lanyard Design' },
];

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate scroll distance
  const [scrollDistance, setScrollDistance] = useState(0);
  
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollDistance(-(scrollWidth - viewportWidth));
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, scrollDistance]);

  return (
    <div ref={containerRef} className="relative bg-[#140c14]" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-[#140c14]">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Our Recent Work
        </h2>
        
        <div className="w-full h-[500px] flex items-center overflow-hidden">
          <motion.div 
            ref={scrollRef}
            className="flex gap-8 px-16"
            style={{ x, willChange: 'transform' }}
          >
            {images.map((image, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center"
                style={{ width: '300px' }}
              >
                <img 
                  src={image.src} 
                  alt={image.description} 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
                <p className="text-white text-center mt-4 font-medium text-sm">
                  {image.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
