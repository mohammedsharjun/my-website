"use client";
import React from 'react';
import VerticalBeamShowcase from './VerticalBeamShowcase';
import AviationAccordion from './AviationAccordion';
import { RainbowButton } from './ui/rainbow-button';
import InnovationBanner from './InnovationBanner';
import PricingPlans from './PricingPlans';
import Footer from './Footer';
import CircularGallery from './CircularGallery';
import LightRays from './LightRays';
import ArrowAnimation from './ArrowAnimation';
import { Compare } from "../components/ui/compare";

// const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
//   <svg viewBox="0 0 48 48" className={className} aria-hidden>
//     <path d="M22 4h4v40h-4zM4 22h40v4H4z" fill="currentColor" />
//   </svg>
// );
const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#140c14] relative overflow-hidden">
      
      {/* Top Navbar */}
      <header className=" absolute top-4 left-0 right-0 z-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md px-4 py-2 shadow-lg">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Logo" className="h-9 w-auto" />
            </a>
            {/* CTA */}
            <RainbowButton asChild size="sm" className='text-white p-5 rounded-xl font-bold'>
              <a href="#contact" >Book a Call</a>
            </RainbowButton>
          </div>
        </div>
      </header>
      
      <div style={{ width: '100%', height: '1000px', position: 'absolute' }} >
  <LightRays
    raysOrigin="top-center"
    raysColor='#cc5aa6'
    raysSpeed={1.5}
    lightSpread={2.8}
    rayLength={2.5}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />

      </div>

      

      

      {/* Hero Content */}
      <main className="relative z-10  max-w-screen mx-auto mt-30">
        <div className="text-center max-w-7xl px-8 pt-8 py-3 mx-auto ">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Turn Your <span className="text-[#fdbb51] font-black text-5xl md:text-6xl mx-2">in</span> LinkedIn Profile Into a Fundraising Machine
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We help startups get investor meetings by making their LinkedIn clear, convincing, and ready to pitch.
          </p>
          <RainbowButton size="lg" className='text-white font-bold'>Book a Free Audit →</RainbowButton>
        </div>

         {/* Circular Gallery Section */}
       
         <div className="max-w-screen">
           <div className="h-[420px] w-full rounded-2xl  overflow-hidden">
             <CircularGallery />
           </div>
         </div>
         
         {/* Innovation banner (below main hero) */}
         <InnovationBanner />
         {/* Arrow Animation Section */}
         <ArrowAnimation />

        {/* Before/After Cards */}
         {/*<div className="flex justify-center items-center gap-8 mt-16 relative"> */}
          {/* Before Card */}
          {/* <div className="relative transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
            <div className="text-gray-400 text-sm font-semibold mb-2 text-center">Before</div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-2 w-full shadow-2xl relative">
              <img src="/images/badui.jpg" alt="Before UI" className="w-180 h-80 object-cover rounded-xl" />
            </div> */}
            {/* Metric Boxes for Before */}
            {/* <div className="absolute -top-2 left-5 bg-red-50 text-red-600 border border-red-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↓</span>
              <span>Followers -25</span>
            </div>
            <div className="absolute top-5 -right-5 bg-red-50 text-red-600 border border-red-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↓</span>
              <span>Profile views -14%</span>
            </div>
          </div> */}

          {/* Transformation Arrow */}
          {/* <div className="text-4xl text-blue-500 font-bold mx-4  -rotate-25">
            <img src="/images/arroww.png" alt="Arrow" className="w-30 h-15" />
          </div> */}

          {/* After Card */}
          {/* <div className="relative transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
            <div className="text-gray-400 text-sm font-semibold mb-2 text-center">After</div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-2 w-full shadow-2xl relative">
              <img src="/images/goodui.jpg" alt="After UI" className="w-180 h-80 object-cover rounded-xl" />
            </div> */}
            {/* Metric Boxes for After */}
            {/* <div className="absolute -top-2 left-5 bg-green-50 text-green-600 border border-green-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↑</span>
              <span>Followers 2400+</span>
            </div>
            <div className="absolute top-5 -right-5 bg-green-50 text-green-600 border border-green-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↑</span>
              <span>Profile views 300%</span>
            </div>
          </div>
        </div> */}
      </main>

    <section className="relative bg-[#140c14]">
      {/* About Me Section */}
      {/* <section className="relative z-10 py-20 ">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(600px_220px_at_6%_6%,#5b4bb133,transparent),radial-gradient(420px_220px_at_94%_18%,#5b4bb133,transparent),radial-gradient(520px_260px_at_50%_100%,#5b4bb122,transparent)]" />
      {/* Decorative plus icons and glows 
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-4 top-36 text-[#45348f] opacity-60">
          <PlusIcon className="h-20 w-20" />
        </div>
        <div className="absolute right-8 top-16 text-[#45348f] opacity-60">
          <PlusIcon className="h-12 w-12" />
        </div>
        <div className="absolute -bottom-10 -right-8 h-64 w-64 rounded-full bg-[#7c5cf626] blur-2xl" />
        <div className="absolute bottom-10 left-24 h-48 w-48 rounded-full bg-[#7c5cf61f] blur-2xl" />
      </div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between gap-16">
            {/* Left Section - Text Content 
            <div className="flex-1 max-w-2xl">
              <h2 className="text-8xl font-bold text-white mb-8 leading-none">
                Hi.
              </h2>
              
              <div className="space-y-6 text-lg text-white leading-relaxed">
                <p>
                  I'm <span className="font-semibold">Mohammed Sharjun M</span>, a digital designer from the vibrant city of Amsterdam, 
                  specializing in branding and web design, helping businesses worldwide to stand out with memorable visuals.
                </p>
                
                <p>
                  From crafting sleek logos to building full-scale brand identities, my primary focus lays on designs 
                  that are both visually pleasing and differ from your competitors.
                </p>
                
                <p>
                  Outside of design, I love unique culinary experiences, reading books and playing the guitar.
                </p>
              </div>
              
              {/* CTA Button 
              <RainbowButton size="lg" className="mt-8 inline-flex gap-3 text-white">
                Say Hi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </RainbowButton>
              
              {/* Handwritten Annotation 
              <div className="mt-12 relative">
                <div className="absolute -left-4 -top-2 text-2xl font-handwriting text-white transform -rotate-12">
                  Brand + Web Designer
                </div>
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Right Section - Profile Image 
            <div className="flex-1 max-w-md">
              <div className="relative">
                {/* Profile Card Container 
                <div className="relative bg-white border-4 border-[#a857ff] rounded-2xl p-2 shadow-lg">
                  {/* Webcam Indicator 
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
                  
                  {/* Profile Image 
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="/images/profile.png" 
                      alt="Mohammed Sharjun" 
                      className="w-full h-96 object-cover"
                    />
                    
                    {/* Name Overlay 
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black text-white px-4 py-2 rounded-lg">
                        <span className="text-lg font-medium italic">Mohammed Sharjun</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Vertical Beams Section (below About Me) */}
      <VerticalBeamShowcase />

      

      {/* Before/After Cards */}
         <div className="flex justify-center items-center gap-8 my-16 mx-20 relative"> 
          {/* Before Card */}
           <div className="relative transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
            <div className="text-gray-400 text-sm font-semibold mb-2 text-center">Before</div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-2 w-full shadow-2xl relative">
              <img src="/images/badui.jpg" alt="Before UI" className="w-180 h-80 object-cover rounded-xl" />
            </div> 
            {/* Metric Boxes for Before */}
             <div className="absolute -top-2 left-5 bg-red-50 text-red-600 border border-red-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↓</span>
              <span>Followers -25</span>
            </div>
            <div className="absolute top-5 -right-5 bg-red-50 text-red-600 border border-red-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↓</span>
              <span>Profile views -14%</span>
            </div>
          </div> 

          {/* Transformation Arrow */}
           <div className="text-4xl text-blue-500 font-bold mx-4  -rotate-25">
            <img src="/images/arroww.png" alt="Arrow" className="w-30 h-15" />
          </div> 

          {/* After Card */}
           <div className="relative transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
            <div className="text-gray-400 text-sm font-semibold mb-2 text-center">After</div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-2 w-full shadow-2xl relative">
              <img src="/images/goodui.jpg" alt="After UI" className="w-180 h-80 object-cover rounded-xl" />
            </div> 
            {/* Metric Boxes for After */}
             <div className="absolute -top-2 left-5 bg-green-50 text-green-600 border border-green-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↑</span>
              <span>Followers 2400+</span>
            </div>
            <div className="absolute top-5 -right-5 bg-green-50 text-green-600 border border-green-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↑</span>
              <span>Profile views 300%</span>
            </div>
          </div>
        </div> 

      {/* Aviation Accordion Section */}
      <AviationAccordion />

      

      {/* Icon Cluster Section */}
      {/* <IconCluster /> */}

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* Footer */}
      <Footer /></section>
      

      {/* What I Do Section
      <section className="relative z-10 py-20 bg-black">
        <h2 className="text-center text-7xl font-bold text-white mb-8">
          What I Do
        </h2>
        
        {/* SVG Mask Effect Section 
        <div className="relative bg-violet-900/25 rounded-3xl border border-white/30 backdrop-blur-sm mx-4 z-10">
          <div className="flex h-[25rem] w-full items-center justify-center overflow-hidden">
            <MaskContainer
              revealText={
                <p className="mx-auto max-w-5xl text-center text-5xl font-bold text-slate-800 dark:text-white">
                  Websites for startups—delivered in 10 days. <br />
                  Built with style, usability, and real results. <br />
                  Work with a pro who respects your deadline.
                </p>
              }
              className="h-[25rem] w-full text-white dark:text-black"
            >
              Skip cookie-cutter sites—get a website that stands out with real results, fast. <br />
              <span className="text-violet-500">5+</span> projects before 22 | <span className="text-violet-500">₹60K</span> first client win. <br />
              Let's build something you'll be<span className="text-violet-500"> proud to show off (and maybe… brag about). 😁</span>
            </MaskContainer>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HeroSection;
