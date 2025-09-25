"use client";
import React, { useRef } from 'react';
import { AnimatedBeam } from './ui/animated-beam';
import { RainbowButton } from './ui/rainbow-button';
import { cn } from '../lib/utils';



const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 24" className={className} aria-hidden fill="currentColor">
    <path d="M16.365 12.79c.03 3.296 2.892 4.396 2.925 4.41-.024.078-.456 1.56-1.503 3.09-.905 1.316-1.848 2.63-3.33 2.658-1.452.026-1.916-.86-3.578-.86-1.662 0-2.178.833-3.55.886-1.43.053-2.52-1.425-3.435-2.737-1.87-2.688-3.298-7.592-1.38-10.91.954-1.657 2.66-2.71 4.524-2.737 1.414-.027 2.747.936 3.578.936.83 0 2.46-1.156 4.152-.988.707.029 2.695.287 3.97 2.157-.103.064-2.364 1.382-2.373 4.055ZM13.498 3.86c.757-.917 1.264-2.19 1.125-3.46-1.09.045-2.414.73-3.2 1.646-.704.81-1.32 2.127-1.156 3.37 1.22.094 2.474-.64 3.23-1.556Z"/>
  </svg>
);

const Card: React.FC<{ title?: string; children?: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => {
  // Unified neon gradient frame to match reference card
  const gradientFrame = 'bg-gradient-to-tr from-[#ff5e8a] via-[#ff4d9d] to-[#ffb347]';
  const glowShadow = 'shadow-[0_0_40px_-10px_rgba(255,100,150,0.6)]';

  return (
    <div className={cn('group relative rounded-[28px] p-[2px]', gradientFrame, glowShadow)}>
      <div className="rounded-[26px] h-[320px] w-[280px] sm:h-[340px] sm:w-[300px] lg:w-[300px] bg-[#121214] text-white flex flex-col justify-between overflow-hidden">
        <div className="p-5">
          <div className="h-8 w-8 text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">
            {icon ?? <AppleIcon />}
          </div>
        </div>
        <div className="p-6">
          {title && <div className="text-xl font-semibold tracking-tight mb-2">{title}</div>}
          <div className="text-sm leading-relaxed text-white/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalBeamShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Top row (4 cards)
  const top1Ref = useRef<HTMLDivElement | null>(null);
  const top2Ref = useRef<HTMLDivElement | null>(null);
  const top3Ref = useRef<HTMLDivElement | null>(null);
  const top4Ref = useRef<HTMLDivElement | null>(null);

  // Center single card
  const centerRef = useRef<HTMLDivElement | null>(null);

  // Bottom row (4 cards)
  const bottom1Ref = useRef<HTMLDivElement | null>(null);
  const bottom2Ref = useRef<HTMLDivElement | null>(null);
  const bottom3Ref = useRef<HTMLDivElement | null>(null);
  const bottom4Ref = useRef<HTMLDivElement | null>(null);

  // Final single card below
  const finalRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative bg-[#140c14] py-20">
     
      
      <div className="mx-auto max-w-7xl px-8">
        <h3 className="mb-10 text-center text-4xl font-bold text-white">Flow with Vertical Beams</h3>
        <div ref={containerRef} className="relative flex flex-col items-center gap-20 lg:gap-24">
          {/* Top row: four cards (problems) */}
          <div className="flex w-full flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-8 lg:gap-6">
            <div ref={top1Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
            <div ref={top2Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
            <div ref={top3Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
            <div ref={top4Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
          </div>

          {/* Center card */}
          <div ref={centerRef} className="relative z-10">
            <Card>
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-sm font-semibold">The Problems I Solve for Founders & Businesses</p>
                <p className="max-w-xl">I help founders turn ideas into real apps/websites, fast & affordable — guiding from concept to launch.</p>
                <RainbowButton asChild size="lg" className="text-white">
                  <a href="#contact">Book a Call</a>
                </RainbowButton>
              </div>
            </Card>
          </div>

          {/* Bottom row: four cards (solutions) */}
          <div className="flex w-full flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-8 lg:gap-6">
            <div ref={bottom1Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
            <div ref={bottom2Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
            <div ref={bottom3Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
            <div ref={bottom4Ref} className="relative z-10">
              <Card title="Apple">
                <p>All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
              </Card>
            </div>
          </div>

          {/* Final single card below */}
          <div ref={finalRef} className="relative z-10">
            <Card title="Apple">
              <p className="text-center">All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.</p>
            </Card>
          </div>

          {/* Beams overlay - top row to center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={top1Ref}
            toRef={centerRef}
            curvature={-60}
            pathColor="#797979FF"
            pathOpacity={0.5}
            pathWidth={2}
            gradientStartColor="#60a5fa"
            gradientStopColor="#a78bfa"
            duration={6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={top2Ref}
            toRef={centerRef}
            curvature={-20}
            pathColor="#8B8B8BFF"
            pathOpacity={0.5}
            pathWidth={2}
            gradientStartColor="#34d399"
            gradientStopColor="#60a5fa"
            duration={5.5}
            delay={0.3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={top3Ref}
            toRef={centerRef}
            curvature={20}
            pathColor="#9D9D9DFF"
            pathOpacity={0.5}
            pathWidth={2}
            gradientStartColor="#f59e0b"
            gradientStopColor="#ef4444"
            duration={5.8}
            delay={0.6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={top4Ref}
            toRef={centerRef}
            curvature={60}
            pathColor="#949494FF"
            pathOpacity={0.5}
            pathWidth={2}
            gradientStartColor="#06b6d4"
            gradientStopColor="#6366f1"
            duration={6.2}
            delay={0.9}
          />

          {/* Beams overlay - bottom row to center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom1Ref}
            toRef={centerRef}
            curvature={-40}
            pathColor="#C5C5C5FF"
            pathOpacity={0.5}
            pathWidth={2}
            gradientStartColor="#f472b6"
            gradientStopColor="#60a5fa"
            duration={5.6}
            delay={0.2}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom2Ref}
            toRef={centerRef}
            curvature={-20}
            pathColor="#BEBEBEFF"
            pathOpacity={0.5}
            pathWidth={2}
            gradientStartColor="#fb7185"
            gradientStopColor="#f472b6"
            duration={5.4}
            delay={0.4}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom3Ref}
            toRef={centerRef}
            curvature={20}
            pathColor="#AFAFAFFF"
            pathOpacity={0.5}
            pathWidth={2}
            gradientStartColor="#fdba74"
            gradientStopColor="#fb7185"
            duration={5.7}
            delay={0.6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom4Ref}
            toRef={centerRef}
            curvature={40}
            pathColor="#FFFFFFFF"
            pathOpacity={0.3}
            pathWidth={2}
            gradientStartColor="#facc15"
            gradientStopColor="#fdba74"
            duration={6}
            delay={0.8}
          />

          {/* Beams from bottom row to final card */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom1Ref}
            toRef={finalRef}
            curvature={10}
            pathColor="#CFCFCFFF"
            pathOpacity={0.5}
            pathWidth={3}
            gradientStartColor="#22d3ee"
            gradientStopColor="#10b981"
            duration={5.2}
            delay={0.2}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom2Ref}
            toRef={finalRef}
            curvature={0}
            pathColor="#CFCFCFFF"
            pathOpacity={0.5}
            pathWidth={3}
            gradientStartColor="#60a5fa"
            gradientStopColor="#a78bfa"
            duration={5.4}
            delay={0.35}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom3Ref}
            toRef={finalRef}
            curvature={-10}
            pathColor="#CFCFCFFF"
            pathOpacity={0.5}
            pathWidth={3}
            gradientStartColor="#f59e0b"
            gradientStopColor="#ef4444"
            duration={5.6}
            delay={0.5}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottom4Ref}
            toRef={finalRef}
            curvature={-20}
            pathColor="#CFCFCFFF"
            pathOpacity={0.45}
            pathWidth={3}
            gradientStartColor="#06b6d4"
            gradientStopColor="#6366f1"
            duration={5.8}
            delay={0.65}
          />
        </div>
      </div>
    </section>
  );
};

export default VerticalBeamShowcase;


