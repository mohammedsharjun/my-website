"use client";
import React from 'react';

const ChaoticWorkUI: React.FC = () => {
  return (
    <section className="relative py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Central Statement */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              The current way we work is chaotic.
            </h2>
          </div>

          {/* App Icons with Connections */}
          <div className="relative w-full h-[500px] mb-20">
            
            {/* Three Horizontal Wavy Dashed Lines */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              style={{ zIndex: 1 }}
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Top wavy line */}
              <path
                d="M 50 120 Q 200 80 350 100 Q 500 60 650 90 Q 800 70 950 110"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,6"
                fill="none"
              />
              {/* Middle wavy line */}
              <path
                d="M 80 250 Q 250 220 420 240 Q 580 210 750 230 Q 900 200 950 250"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,6"
                fill="none"
              />
              {/* Bottom wavy line */}
              <path
                d="M 60 380 Q 220 350 380 370 Q 540 340 700 360 Q 860 330 940 380"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,6"
                fill="none"
              />
            </svg>

            {/* App Icons - Precise positioning */}
            <div className="absolute inset-0" style={{ zIndex: 2 }}>
              
              {/* Icon 1 - Figma (Top Left) */}
              <div className="absolute top-8 left-16">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">F</span>
                  </div>
                  {/* Red notification badge */}
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-7 h-5 flex items-center justify-center font-bold">
                    99+
                  </div>
                  {/* ON 31 text below */}
                  <div className="absolute -bottom-6 left-0 text-xs text-gray-600 font-medium">
                    ON 31
                  </div>
                </div>
              </div>

              {/* Icon 2 - Google Drive (Bottom Left) */}
              <div className="absolute bottom-20 left-20">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-b from-blue-500 to-green-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-sm transform rotate-45 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-sm transform -rotate-45"></div>
                    </div>
                  </div>
                  {/* Red dot and Offline text */}
                  <div className="absolute -bottom-6 left-0 flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-600 font-medium">Offline</span>
                  </div>
                </div>
              </div>

              {/* Icon 3 - Messages (Middle Right, slightly below center) */}
              <div className="absolute top-56 right-32">
                <div className="relative">
                  <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  {/* Red notification badge */}
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-7 h-5 flex items-center justify-center font-bold">
                    420
                  </div>
                </div>
              </div>

              {/* Icon 4 - Slack (Top Right Stack - First) */}
              <div className="absolute top-12 right-24">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <div className="grid grid-cols-2 gap-1 w-6 h-6">
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  {/* Red notification badge */}
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-8 h-5 flex items-center justify-center font-bold">
                    1M+
                  </div>
                </div>
              </div>

              {/* Icon 5 - Google Meet (Top Right Stack - Second) */}
              <div className="absolute top-20 right-16">
                <div className="relative">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-3xl flex items-center justify-center shadow-lg">
                    <div className="grid grid-cols-2 gap-1 w-6 h-6">
                      <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                    </div>
                  </div>
                  {/* Blue Join button */}
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-4 py-1 rounded-full font-medium">
                    Join
                  </div>
                </div>
              </div>

              {/* Icon 6 - Mail/Asana (Top Right Stack - Third) */}
              <div className="absolute top-32 right-20">
                <div className="relative">
                  <div className="w-16 h-16 bg-yellow-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-2xl">M</span>
                  </div>
                  {/* Red notification badge */}
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-7 h-5 flex items-center justify-center font-bold">
                    665
                  </div>
                </div>
              </div>

              {/* Icon 7 - Notion (Top Right Stack - Fourth) */}
              <div className="absolute top-44 right-16">
                <div className="relative">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-3xl flex items-center justify-center shadow-lg">
                    <div className="flex items-center gap-1">
                      <span className="text-black font-bold text-2xl">N</span>
                      <div className="w-2 h-2 bg-black transform rotate-45"></div>
                    </div>
                  </div>
                  {/* Black notification badge */}
                  <div className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-8 h-5 flex items-center justify-center font-bold">
                    100 ▲
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium">
                2x more errors occur when switching tasks.
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium">
                Constant multitasking leads to burnout.
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium">
                1.2 months/yr wasted due to channel switching.†
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChaoticWorkUI;
