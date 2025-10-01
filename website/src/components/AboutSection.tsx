"use client";
import React from 'react';
import CurvedLoop from './CurvedLoop';
const AboutSection: React.FC = () => {
  return (
    <section className="relative py-16">
      <div className="max-w-full mx-auto px-6">
        
        {/* First Row: Profile Card + Navigation Bar */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* Profile Card (Left) */}
          <div className="w-[50%]">
            <div className="bg-[#1a1a1a] rounded-[30px] p-8 h-[320px] relative border border-white/5">
              <div className="flex gap-8 h-full">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-65 h-65 relative overflow-hidden">
                    {/* Profile image with blue background */}
                    <img 
                      src="/images/profile.png" 
                      alt="Mohammed Sharjun" 
                      className="w-full h-full object-cover border border-white/25 rounded-tl-3xl rounded-br-3xl"
                    />
                    
                  </div>
                </div>
                
                {/* Profile Text */}
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-white/50 text-[15px] font-medium  uppercase mb-2 leading-none">A WEB DESIGNER</p>
                  <h2 className="text-[40px] font-medium text-white mb-3 leading-10">Mohammed <br /> Sharjun M.</h2>
                  <p className="text-white/50 text-[20px] leading-tight">
                    I am a Web Designer based <br /> in san francisco.
                  </p>
                </div>
              </div>
              
              {/* Bottom Right Icon */}
              <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/70">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Bar (Top Right) */}
          <div className="w-[50%] flex-col items-start">
            <div className="bg-[#1a1a1a] rounded-[20px] p-4 h-[60px] w-full border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center pt-10 justify-center">
                <CurvedLoop 
                  marqueeText="LATEST WORK AND FEATURED • "
                  speed={1}
                  className="text-white/50 text-[65px]"
                  curveAmount={0}
                  direction="left"
                  interactive={false}
                />
              </div>
            </div>
            {/* Second Row: Credentials + Projects Cards */}
        <div className="flex flex-col lg:flex-row mt-5 gap-6 mb-6">
          {/* Credentials Card */}
          <div className="lg:w-1/2">
            <div className="bg-[#1a1a1a] rounded-[20px] p-6 h-[240px] relative border border-white/5">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Signature */}
                  <div className="mb-6">
                    <div className="text-white/80 text-[14px] font-medium" style={{fontFamily: 'cursive'}}>
                      David Henderson
                    </div>
                  </div>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase mb-2 leading-none">MORE ABOUT ME</p>
                  <h3 className="text-[18px] font-bold text-white leading-tight">Credentials</h3>
                </div>
                
                {/* Bottom Right Icon */}
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div className="lg:w-1/2">
            <div className="bg-[#1a1a1a] rounded-[20px] p-6 h-[240px] relative border border-white/5">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Laptop mockup */}
                  <div className="mb-6">
                    <div className="w-16 h-10 bg-gray-700 rounded-sm relative overflow-hidden">
                      <div className="absolute inset-1 bg-white rounded-sm flex items-center justify-center">
                        <div className="text-black text-[6px] font-bold text-center leading-tight">
                          <div>MEDITATION</div>
                          <div>COURSE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase mb-2 leading-none">SHOWCASE</p>
                  <h3 className="text-[18px] font-bold text-white leading-tight">Projects</h3>
                </div>
                
                {/* Bottom Right Icon */}
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>

        

        {/* Third Row: Blog + Services + Profiles Cards */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Blog Card */}
          <div className="lg:w-1/3">
            <div className="bg-[#2a2a2a] rounded-[20px] p-6 h-[200px] relative border border-white/10 shadow-lg">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Colorful logo */}
                  <div className="mb-8">
                    <div className="relative w-16 h-12">
                      {/* Blue B rectangle */}
                      <div className="absolute top-0 left-0 w-10 h-8 bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">B</span>
                      </div>
                      {/* Yellow triangle pointing right */}
                      <div className="absolute top-1 right-0 w-0 h-0 border-l-[18px] border-l-transparent border-b-[22px] border-b-yellow-400"></div>
                      {/* Red circles */}
                      <div className="absolute -top-1 left-8 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute top-3 right-2 w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase mb-3 leading-none">BLOG</p>
                  <h3 className="text-[18px] font-bold text-white leading-tight">GFonts</h3>
                </div>
                
                {/* Bottom Right Icon */}
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/80">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="lg:w-1/3">
            <div className="bg-[#2a2a2a] rounded-[20px] p-6 h-[200px] relative border border-white/10 shadow-lg">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Icons row */}
                  <div className="mb-8">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/80">
                          <path d="M23 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/80">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/80">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/80">
                          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase mb-3 leading-none">SPECIALIZATION</p>
                  <h3 className="text-[18px] font-bold text-white leading-tight">Services Offering</h3>
                </div>
                
                {/* Bottom Right Icon */}
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/80">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Profiles Card */}
          <div className="lg:w-1/3">
            <div className="bg-[#2a2a2a] rounded-[20px] p-6 h-[200px] relative border border-white/10 shadow-lg">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Social buttons */}
                  <div className="mb-8 flex justify-end">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/80">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/80">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase mb-3 leading-none">STAY WITH ME</p>
                  <h3 className="text-[18px] font-bold text-white leading-tight">Profiles</h3>
                </div>
                
                {/* Bottom Right Icon */}
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/80">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Row: Stats + CTA */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Stats Section */}
          <div className="lg:w-3/4">
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 h-[140px] border border-white/5">
              <div className="grid grid-cols-3 gap-8 h-full">
                <div className="text-center flex flex-col justify-center">
                  <div className="text-[32px] font-bold text-white mb-1 leading-none">07</div>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight">YEARS</p>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight">EXPERIENCE</p>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <div className="text-[32px] font-bold text-white mb-1 leading-none">+125</div>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight">CLIENTS</p>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight">WORLDWIDE</p>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <div className="text-[32px] font-bold text-white mb-1 leading-none">+210</div>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight">TOTAL</p>
                  <p className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight">PROJECTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:w-1/4">
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 h-[140px] relative border border-white/5">
              <div className="flex flex-col h-full justify-center">
                {/* Top Left Star */}
                <div className="absolute top-6 left-6">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="text-center">
                  <h3 className="text-[16px] font-bold text-white leading-tight">
                    Let's work <span className="text-blue-500">together.</span>
                  </h3>
                </div>
                
                {/* Bottom Right Icon */}
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;