"use client";
import React from 'react';
import AviationAccordion from './AviationAccordion';
import MetapicCreatorBenefits from './MetapicCreatorBenefits';
import WhoWeAreSection from './WhoWeAreSection';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Footer from './Footer';
import LightRays from './LightRays';
import ArrowAnimation from './ArrowAnimation';
import MetapicBenefits from './MetapicBenefits';
import SocialProof from './SocialProof';
import CurvedLoop from './CurvedLoop';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import WorkflowBanner from './WorkflowBanner';
import OurValues from './OurValues';

const HeroSection: React.FC = () => {
  const [active, setActive] = React.useState<'home' | 'about' | 'services' | 'blog' | 'contact' | 'Testimonial'>('home');
  // Sliding indicator refs/state
  const groupRef = React.useRef<HTMLDivElement | null>(null);
  const homeRef = React.useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const aboutRef = React.useRef<HTMLAnchorElement | null>(null);
  const servicesRef = React.useRef<HTMLButtonElement | null>(null);
  const blogRef = React.useRef<HTMLAnchorElement | null>(null);
  const contactRef = React.useRef<HTMLAnchorElement | null>(null);
  const TestimonialRef = React.useRef<HTMLAnchorElement | null>(null);
  const [indicator, setIndicator] = React.useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const navItemClass = () => (
    'px-4 py-2 rounded-full text-md font-medium text-white hover:text-white hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition-all duration-300 ease-out'
  );

  // Update indicator position/size when active or on resize
  React.useEffect(() => {
    const map: Record<typeof active, HTMLElement | null> = {
      home: homeRef.current as HTMLElement | null,
      about: aboutRef.current as HTMLElement | null,
      services: servicesRef.current as HTMLElement | null,
      blog: blogRef.current as HTMLElement | null,
      contact: contactRef.current as HTMLElement | null,
      Testimonial: TestimonialRef.current as HTMLElement | null,
    } as const;
    const el = map[active];
    const container = groupRef.current;
    if (!el || !container) return;
    const containerRect = container.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({ left: rect.left - containerRect.left, width: rect.width });
  }, [active]);

  React.useEffect(() => {
    const onResize = () => {
      // Recompute for current active
      const container = groupRef.current;
      if (!container) return;
      const activeEl = (
        active === 'home' ? homeRef.current :
        active === 'about' ? aboutRef.current :
        active === 'services' ? servicesRef.current :
        active === 'blog' ? blogRef.current :
        active === 'Testimonial' ? TestimonialRef.current :
        contactRef.current
      ) as HTMLElement | null;
      if (!activeEl) return;
      const containerRect = container.getBoundingClientRect();
      const rect = activeEl.getBoundingClientRect();
      setIndicator({ left: rect.left - containerRect.left, width: rect.width });
    };
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [active]);
  return (
    <div className="min-h-screen w-full bg-[#140c14] relative overflow-hidden">
      {/* Top Navbar */}
      <header className=" fixed top-2 left-0 right-0 z-20 px-4 ">
        <div className="max-w-6xl mx-auto px-5 py-1.5 rounded-full backdrop-blur-xl border border-[#dea6fc]/45 bg-[#7D5D8EFF]/25 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <nav className="flex items-center justify-between">
            {/* Left: Brand */}
            <a href="#" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-8 rounded-md" />
              <span className="text-white/90 font-semibold text-xl tracking-tight">Fikrova</span>
            </a>

            {/* Center: Navigation group */}
            <div className="hidden md:flex items-center gap-3">
              <div ref={groupRef} className="relative flex items-center gap-1 rounded-full px-1.5 py-1 ">
                {/* Sliding indicator */}
                <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-[40px] rounded-full bg-black/20 ring-1 ring-white/15 transition-all duration-300 ease-out"
                  style={{ left: indicator.left, width: indicator.width }}
                />
                <a ref={homeRef as any} className={navItemClass()} href="#home" onClick={() => setActive('home')}>Home</a>
                <a ref={aboutRef as any} className={navItemClass()} href="#about" onClick={() => setActive('about')}>About</a>
                <button ref={servicesRef as any} className={navItemClass() + ' flex items-center gap-1'} aria-label="Services" onClick={() => setActive('services')}>
                  <span>Services</span>
                </button>
                <a ref={TestimonialRef as any} className={navItemClass()} href="#Testimonial" onClick={() => setActive('Testimonial')}>Testimonial</a>
              </div>     
            </div>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-black  font-bold px-6 py-2"
                  as="button"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e89eff] to-[#8aa8ff]">Contact</span>
                </HoverBorderGradient>
          </nav>
        </div>
      </header>
      
      <div style={{ width: '100%', height: '700px', position: 'absolute' }} >
     <LightRays
       raysOrigin="top-center"
    raysColor='#FF00AA'
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

      {/* main Content */}
      <main className="relative z-10  max-w-screen mx-auto mt-30">
        <div className="text-center flex flex-col items-center justify-center max-w-full px-8  mx-auto ">
          {/* Workflow Banner */}
          <WorkflowBanner />
          
          <h1 className=" md:text-[5rem] font-medium text-white leading-tighter ">
          Your founders-first<span className="text-[#fdaa51]"> web </span>partner
          </h1>
          <p className="text-xl text-[#aca1b7] mb-8 mx-auto">
          We build conversion-driven business sites in 15 days, made to help you sell more—no fluff, just results.
          </p>
          
          <div className="flex mt-4 gap-5">
            
            <HoverBorderGradient
            containerClassName="rounded-full"
            className=" bg-black font-semibold px-8 py-2.5"
            as="button"
          >
            <span className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#e89eff] to-[#8aa8ff]">Request a 15-Day Launch</span>
          </HoverBorderGradient></div>
          {/* Social Proof Section */}
          <SocialProof />
          
          
        </div>

        {/* Curved Loop below CTA */}
        <div className="mt-35 flex justify-center">
            <div className="w-full max-w-screen h-30 flex items-center justify-center overflow-hidden">
              <CurvedLoop 
                marqueeText="TRUSTED BY 1000+ BUSINESSES      • PROVEN RESULTS       • 15-DAY DELIVERY       • "
                speed={1}
                className="text-white/40 text-[50px] w-screen"
                curveAmount={0}
                direction="left"
                interactive={false}
              />
            </div>
          </div>
        {/* Who We Are Section */}
        <WhoWeAreSection />
        
       
       {/* Arrow Animation Section */}
       <ArrowAnimation />
       
       
       
       {/* Chaotic Work UI Section */}
       {/* <ChaoticWorkUI /> */}
       
        {/* Metapic Benefits Section */}
        
       <MetapicBenefits />

       {/* Our Values Section */}
       <OurValues />
      

       {/* <div className="relative px-20 z-10">
        <div className=" flex justify-between items-center">
        <div className="flex-col items-center gap-3">
          <div className='flex items-center gap-3'>
          <div className="w-2 h-2 bg-[#edcbff] rounded-full"></div>
          <span className="text-[#edcbff] font-medium">Your Path Forward</span>
                    </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
              Projects Ongoing
              </h2>
                    </div>
                    
        <div className="relative  z-10 text-right max-w-2xl">
           <p className="text-2xl text-white leading-relaxed italic">
           Let’s bring your vision to life and build a brand that’s unforgettable—driving growth, impact, and lasting success!
              </p>
                  </div>
                </div>

                      </div> */}
      {/* Status Tags Section */}
      {/* <Techstack /> */}
      
      

       <div className="relative px-20 z-10">
        <div className=" flex justify-between items-center">
        <div className="flex-col items-center gap-3">
          <div className='flex items-center gap-3'>
          <div className="w-2 h-2 bg-[#edcbff] rounded-full"></div>
          <span className="text-[#edcbff] font-medium">Your Path Forward</span>
                      </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
              Projects Ongoing
              </h2>
                    </div>
                    
        <div className="relative  z-10 text-right max-w-2xl">
           <p className="text-2xl text-white leading-relaxed italic">
           Let’s bring your vision to life and build a brand that’s unforgettable—driving growth, impact, and lasting success!
              </p>
              </div>
            </div>
            
                    </div>
                    
      {/* Metapic Creator Benefits Section */}
      <MetapicCreatorBenefits />

           
          
    
         

      </main>

    <section className="relative bg-[#140c14]">

      {/* Aviation Accordion Section */}
      <AviationAccordion />
       {/* Testimonials */}
      <Testimonials />

      {/* Tools & Tech Stack Section */}
      {/* <section className="relative py-20 px-8 bg-[#140c14]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-15">
            {/* Apple Card 
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-8 w-80 h-64 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Apple</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All my hardware is Apple. It's simple, reliable, and keeps my workflow smooth.
                </p>
              </div>
                </div>

            {/* Figma Card 
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-8 w-80 h-64 flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-black mb-6">
              Other Design Agencies
            </h2>
            <p className="text-black mb-8 leading-relaxed">
              Other agencies often provide generic solutions with higher costs and limited flexibility, making them less adaptable to unique needs.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Offerings
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">Generic, limited flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">Generic templates, minimal innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">Delays due to complex processes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">High costs, often with hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">Limited, slow response time</span>
              </li>
            </ul>
          </div>
                </div>
              </div>

            
          </div>
        </div>
      </section> */}
      

      <ContactUs />

      {/* Footer */}
      <Footer />
      
      </section>

    </div>
  );
};

export default HeroSection;
