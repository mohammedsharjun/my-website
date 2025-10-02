import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#140c14] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
          {/* Left - Headline and CTA */}
          <div className="md:col-span-6">
            <h3 className="text-[42px] leading-[1.1] md:text-[64px] md:leading-[1.05] font-extrabold text-white tracking-tight">
              Have a Cool Idea?
              <br />
              Let’s Collaborate<span className="text-[#dea6fc]">.</span>
            </h3>
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#1a1a1a] px-3 py-2 ring-1 ring-white/10">
              <button className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition">Get In Touch</button>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#dea6fc] text-black text-md">+</span>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-3">
            <h4 className="mb-3 text-[18px] font-semibold text-white">Location</h4>
            <p className="text-sm leading-relaxed text-white/70">
              1330 Huffman Rd, Anchorage,
              <br />
              Alaska, United States
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:justify-self-end">
            <h4 className="mb-3 text-[18px] font-semibold text-white">Contact</h4>
            <p className="text-sm text-white/70">+91 9025677197</p>
            <p className="text-sm text-white/70">Fitrova@deeniac.com</p>
          </div>
        </div>

        {/* Social and Helpful Links */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="mb-3 text-[18px] font-semibold text-white">Social</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> Instagram</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> YouTube</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> Twitter/X</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> Pinterest</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-[18px] font-semibold text-white">Helpful Links</h4>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> Privacy Policy</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> About</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> Services</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> Projects</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dea6fc]" /> FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-6 text-xs md:flex-row">
          <p className="text-white/60">©Fitrova 2025</p>
          <p className="flex items-center gap-2 text-white/60"><span className="h-2 w-2 rounded-full bg-[#dea6fc]" /> Made with Love on Framer</p>
          <div className="flex items-center gap-3 text-white/60">
            <span>Created by</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">🙂</span>
            <span className="italic text-white">Mohammed Sharjun</span>
          </div>
        </div>
    </div>

      {/* pink accent strip */}
      <div className="h-2 w-full bg-[#dea6fc]" />
    </footer>
  );
};

export default Footer;
