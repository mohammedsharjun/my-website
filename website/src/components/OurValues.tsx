"use client";
import React from 'react';

const OurValues: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Launch like a PRO",
      description: "Build fast, launch faster. We turn ideas into high-impact websites in days, not months—so you never lose momentum.",
      colors: {
        iconBg: "from-purple-400/20 to-pink-400/20",
        iconBorder: "border-purple-400/30",
        iconColor: "text-purple-400 group-hover:text-white",
        cardBg: "bg-[#140c14]",
        cardBorder: "border-[#dea6fc] group-hover:border-[#dea6fc]",
        titleColor: "text-purple-300",
        descriptionColor: "text-purple-100/80"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
      title: "Make It Yours",
      description: "No cookie-cutter sites. Every project is handcrafted, branded, and tailored for your startup's personality and goals.",
      colors: {
        iconBg: "from-black to-black",
          iconBorder: "border-black",
          iconColor: "text-purple-400 group-hover:text-white",
        cardBg: "bg-[#dea6fc]",
        cardBorder: "border-[#140c14] border-3 group-hover:border-[#140c14]",
        titleColor: "text-[#140c14]",
        descriptionColor: "text-black/70"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Effortless Experience",
      description: "Streamlined process, clear updates, and a team that knows how founders work—just sit back and watch it come alive.",
      colors: {
        iconBg: "from-purple-400/20 to-pink-400/20",
        iconBorder: "border-purple-400/30",
        iconColor: "text-purple-400 group-hover:text-white",
        cardBg: "bg-[#140c14]",
        cardBorder: "border-[#dea6fc] group-hover:border-[#dea6fc]",
        titleColor: "text-purple-300",
        descriptionColor: "text-purple-100/80"
      }
    },
    
  ];

  return (
    <section className="relative  py-10 mb-30 px-8 overflow-hidden">
      {/* Glassy Background */}
      <div className="absolute inset-0  backdrop-blur-3xl"></div>
      
      
      {/* Content */}
      <div className="relative z-10 max-w-[90vw] bg-[#dea6fc] p-12 rounded-4xl mx-auto text-center">
        {/* About Us Button */}
        <div className="inline-flex items-center justify-center mb-1">
        <div className='flex items-center gap-3'>
          <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
          <span className="text-[#282828] font-medium">Founder’s Shortcut to Power</span>
                      </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl lg:text-5xl font-medium text-black mb-2 leading-tight">
        Why Hustlers Choose Fitrova
        </h2>

        {/* Description */}
        <p className="text-lg text-black/50 italic mb-12 max-w-2xl mx-auto leading-relaxed">
        Quit the grind. Unlock fast results, real growth, and founder-level speed with Fitrova.
        </p>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative"
            >
               {/* Glassy Card Background */}
               <div className={`absolute inset-0  ${value.colors.cardBg} ${value.colors.cardBorder} rounded-2xl backdrop-blur-xl border transition-all duration-300`}></div>
              
               
               {/* Card Content */}
               <div className="relative z-10 p-8 text-center">
                 {/* Icon */}
                 <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.colors.iconBg} rounded-xl backdrop-blur-sm border ${value.colors.iconBorder} mb-6`}>
                   <div className={`${value.colors.iconColor} transition-colors duration-300`}>
                     {value.icon}
                   </div>
                 </div>

                 {/* Title */}
                 <h3 className={`text-[1.8rem] w-full font-medium ${value.colors.titleColor} mb-4`}>
                   {value.title}
                 </h3>

                 {/* Description */}
                 <p className={`${value.colors.descriptionColor} leading-relaxed text-lg`}>
                   {value.description}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
