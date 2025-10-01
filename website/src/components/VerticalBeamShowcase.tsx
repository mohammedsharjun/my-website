"use client";
import React, { useRef } from 'react';
import { AnimatedBeam } from './ui/animated-beam';
import { RainbowButton } from './ui/rainbow-button';
import { cn } from '../lib/utils';
import { AppleIcon } from 'lucide-react';



// Icons for different content sections
const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

const DesignIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ChainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
  </svg>
);

const WorkflowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2.5s8 4.5 8 11.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-3.5-2.5-6-6-6s-6 2.5-6 6c0 1.1-.9 2-2 2s-2-.9-2-2c0-7 8-11.5 8-11.5zm0 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
);

const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const Card: React.FC<{ title?: string; children?: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => {
  // Unified neon gradient frame to match reference card
  const gradientFrame = 'bg-gradient-to-tr from-[#ff5e8a] via-[#ff4d9d] to-[#ffb347]';
  const glowShadow = 'shadow-[0_0_40px_-10px_rgba(255,100,150,0.6)]';

  return (
    <div className={cn('group relative rounded-[28px] p-[2px]', gradientFrame, glowShadow)}>
      <div className="rounded-[26px] h-[320px] w-[280px] sm:h-[200px] sm:w-[300px] lg:w-[300px] bg-[#121214] text-white flex flex-col justify-between overflow-hidden">
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
     
      
      <div className="ml-18 max-w-7xl ">
        <h3 className="mb-10 text-center text-4xl font-bold text-white">Flow with Vertical Beams</h3>
        <div ref={containerRef} className="relative flex flex-col items-center gap-20 lg:gap-30">
          {/* Top row: four cards (problems) */}
          <div className="flex w-full flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-8 lg:gap-13">
            <div ref={top1Ref} className="relative z-10">
              <Card title="Extended Timelines" icon={<CalendarIcon />}>
                <p>Projects delayed for months; launch dates constantly slip.</p>
              </Card>
            </div>
            <div ref={top2Ref} className="relative z-10">
              <Card title="Uninspired Design" icon={<DesignIcon />}>
                <p>Off-the-shelf templates fail to reflect your brand's identity.</p>
              </Card>
            </div>
            <div ref={top3Ref} className="relative z-10">
              <Card title="Inconsistent Delivery" icon={<ChainIcon />}>
                <p>Multiple agencies, unclear processes, unreliable outcomes.</p>
              </Card>
            </div>
            <div ref={top4Ref} className="relative z-10">
              <Card title="Complex Workflow" icon={<WorkflowIcon />}>
                <p>Endless revisions and feedback cycles—no clear finish line.</p>
              </Card>
            </div>
          </div>

          {/* Center card */}
          <div ref={centerRef} className="ml-8 relative z-10">
            <Card>
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-lg font-semibold">Our Approach</p>
                <p className="max-w-xl">Bridging the gap between vision and execution. Personal, transparent, and results-driven support from day one.</p>
                <RainbowButton asChild size="lg" className="text-white">
                  <a href="#contact">Book a Call</a>
                </RainbowButton>
              </div>
            </Card>
          </div>

          {/* Bottom row: four cards (solutions) */}
          <div className="flex w-full flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-8 lg:gap-13">
            <div ref={bottom1Ref} className="relative z-10">
              <Card title="Rapid Launch" icon={<RocketIcon />}>
                <p>Streamlined development; your website is live in just 15 days.</p>
              </Card>
            </div>
            <div ref={bottom2Ref} className="relative z-10">
              <Card title="Tailored Experience" icon={<PaletteIcon />}>
                <p>Bespoke designs created to elevate your unique brand.</p>
              </Card>
            </div>
            <div ref={bottom3Ref} className="relative z-10">
              <Card title="Direct Communication" icon={<PhoneIcon />}>
                <p>One team, one point of contact, full accountability.</p>
              </Card>
            </div>
            <div ref={bottom4Ref} className="relative z-10">
              <Card title="Efficient Delivery" icon={<CheckCircleIcon />}>
                <p>Structured feedback, minimal revisions—on time, every time.</p>
              </Card>
            </div>
          </div>

          {/* Final single card below */}
          <div ref={finalRef} className="relative ml-6 z-10">
            <Card title="Client Success" icon={<ArrowUpIcon />}>
              <p className="text-center">Fast, reliable results. A high-performance website, ready to drive growth from day one.</p>
            </Card>
          </div>

          {/* Beams overlay - top row to center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={top1Ref}
            toRef={centerRef}
            curvature={-60}
            pathColor="#3D3D3DFF"
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
            pathColor="#3D3D3DFF"
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
            curvature={-100}
            pathColor="#3D3D3DFF"
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
            curvature={-60}
            pathColor="#3D3D3DFF"
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
            pathColor="#3D3D3DFF"
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
            pathColor="#3D3D3DFF"
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
            curvature={80}
            pathColor="#3D3D3DFF"
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
            curvature={-10}
            pathColor="#3D3D3DFF"
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
            pathColor="#3D3D3DFF"
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
            pathColor="#3D3D3DFF"
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
            pathColor="#3D3D3DFF"
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
            pathColor="#3D3D3DFF"
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


