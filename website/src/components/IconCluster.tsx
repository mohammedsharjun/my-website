"use client";
import React from 'react';

const Pill: React.FC<{ bg: string; children?: React.ReactNode; className?: string }>=({ bg, children, className })=> (
  <div className={`rounded-[22px] px-5 py-7 text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10 ${bg} ${className||''}`}>{children}</div>
);

const Mini: React.FC<{ children?: React.ReactNode; className?: string }>=({ children, className })=> (
  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white text-sm shadow-lg ${className||''}`}>{children}</div>
);

const CenterTile: React.FC<{ children?: React.ReactNode }>=({ children })=> (
  <div className="rounded-[28px] bg-black p-10 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-2 ring-white">
    {children}
  </div>
);

const IconCluster: React.FC = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative mx-auto grid w-full max-w-4xl grid-cols-5 auto-rows-min place-items-center gap-6">
          {/* Top padlock */}
          <div className="col-start-3 row-start-1">
            <Mini>🔒</Mini>
          </div>

          {/* Second row - crossed arrows (left) and presentation board (right) */}
          <div className="col-start-1 row-start-2">
            <Pill bg="bg-[#D7E6EA]">
              <div className="h-14 w-28 rounded-xl bg-gradient-to-b from-slate-400/20 to-slate-800/40 mx-auto flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-slate-300 to-slate-600" />
              </div>
            </Pill>
          </div>
          <div className="col-start-5 row-start-2">
            <Pill bg="bg-[#F5C648]">
              <div className="h-14 w-28 rounded-xl bg-gradient-to-b from-yellow-200/30 to-yellow-700/40 mx-auto flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-yellow-300 to-yellow-600" />
              </div>
            </Pill>
          </div>

          {/* Third row - cloud (left), database (center), thumbs-up (right) */}
          <div className="col-start-1 row-start-3">
            <Pill bg="bg-[#CDB7FF]">
              <div className="h-14 w-28 rounded-xl bg-gradient-to-b from-purple-200/30 to-purple-700/40 mx-auto flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-300 to-purple-600" />
              </div>
            </Pill>
          </div>
          <div className="col-start-3 row-start-3">
            <CenterTile>
              <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-b from-neutral-100/80 to-neutral-700/80" />
            </CenterTile>
          </div>
          <div className="col-start-5 row-start-3">
            <Pill bg="bg-[#D7E6EA]">
              <div className="h-14 w-28 rounded-xl bg-gradient-to-b from-slate-300/30 to-slate-700/40 mx-auto flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-slate-300 to-slate-600" />
              </div>
            </Pill>
          </div>

          {/* Fourth row - mouse pointer (far left), person with arrow (center-left), globe (center-right), thumbs-up (far right) */}
          <div className="col-start-1 row-start-4">
            <Mini>🖱️</Mini>
          </div>
          <div className="col-start-2 row-start-4">
            <Pill bg="bg-[#F5C648]">
              <div className="h-14 w-28 rounded-xl bg-gradient-to-b from-yellow-200/30 to-yellow-700/40 mx-auto flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-yellow-300 to-yellow-600" />
              </div>
            </Pill>
          </div>
          <div className="col-start-4 row-start-4">
            <Pill bg="bg-[#CDB7FF]">
              <div className="h-14 w-28 rounded-xl bg-gradient-to-b from-purple-200/30 to-purple-700/40 mx-auto flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-300 to-purple-600" />
              </div>
            </Pill>
          </div>
          <div className="col-start-5 row-start-4">
            <Mini>👍</Mini>
          </div>

          {/* Fifth row - hexagonal network (center) */}
          <div className="col-start-3 row-start-5">
            <Pill bg="bg-[#D7E6EA]">
              <div className="h-14 w-28 rounded-xl bg-gradient-to-b from-slate-300/30 to-slate-700/40 mx-auto flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-slate-300 to-slate-600" />
              </div>
            </Pill>
          </div>

          {/* Curvy connectors overlay */}
          <svg className="pointer-events-none absolute inset-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1000 1000">
            <g stroke="#111" strokeWidth="28" strokeOpacity="0.9">
              {/* shadow behind white */}
              <path d="M500 110 C 500 180, 500 210, 500 260" />
              <path d="M330 240 C 420 240, 430 300, 500 330" />
              <path d="M670 240 C 580 240, 570 300, 500 330" />
              <path d="M330 560 C 420 560, 430 500, 500 470" />
              <path d="M670 560 C 580 560, 570 500, 500 470" />
              <path d="M500 730 C 500 660, 500 610, 500 560" />
            </g>
            <g stroke="#fff" strokeWidth="14">
              <path d="M500 110 C 500 180, 500 210, 500 260" />
              <path d="M330 240 C 420 240, 430 300, 500 330" />
              <path d="M670 240 C 580 240, 570 300, 500 330" />
              <path d="M330 560 C 420 560, 430 500, 500 470" />
              <path d="M670 560 C 580 560, 570 500, 500 470" />
              <path d="M500 730 C 500 660, 500 610, 500 560" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IconCluster;


