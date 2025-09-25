"use client";
import React from 'react';
import { RainbowButton } from './ui/rainbow-button';

const Card: React.FC<{
  title: string;
  price: string;
  arr: string;
  sectionTitle?: string;
  features: string[];
  footer?: React.ReactNode;
  recommended?: boolean;
}> = ({ title, price, arr, sectionTitle, features, footer, recommended }) => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#131122] p-7 text-white/80 shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[15px] font-semibold text-[#bda7ff]">{title}</span>
        {recommended && (
          <span className="rounded-full bg-[#251c55] px-3 py-1 text-[11px] font-semibold text-[#c9b8ff] ring-1 ring-[#3e2f85]">
            Recommended
          </span>
        )}
      </div>
      <div className="mb-1 text-[34px] md:text-[40px] font-extrabold leading-none text-white">
        {price}
        <span className="ml-1 align-baseline text-base font-semibold text-white/70">/mo</span>
      </div>
      <div className="mb-6 text-xs">
        Up to <span className="font-semibold text-[#c9b8ff]">{arr}</span> referral ARR
      </div>
      {sectionTitle && (
        <div className="mb-3 text-[13px] font-semibold text-white/80">{sectionTitle}</div>
      )}
      <ul className="space-y-3 text-[13px]">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-3 text-white/70">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#221b3d] text-[#c9b8ff] ring-1 ring-[#3e2f85]">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {footer && <div className="mt-6">{footer}</div>}
    </div>
  );
};



const PricingPlans: React.FC = () => {
  return (
    <section className="relative z-10 bg-[#140c14] py-20">
      
      
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-white">The Perfect Plan for Your Needs</h2>
          <p className="mt-2 text-[13px] text-white/60">Our transparent pricing makes it easy to find a plan that works within your financial constraints.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Free"
            price="$0"
            arr="$5K"
            sectionTitle="Includes:"
            features={[
              'Unlimited referrals',
              'All integrations',
              'Core platform features',
            ]}
          />

          <div className="rounded-[28px] p-[1px] [background:linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]">
            <div className="rounded-[28px] bg-[#131122]">
              <Card
                title="Grow"
                price="$350"
                arr="$50K"
                sectionTitle="Everything in Free, Plus:"
                features={[
                  'In‑brand customization (e.g. colors)',
                  'In‑brand email design widget',
                  'Time‑wise integration',
                ]}
                recommended
                footer={
                  <div className="flex justify-center">
                    <span className="rounded-full bg-[#251c55] px-4 py-1 text-xs font-semibold text-[#c9b8ff] ring-1 ring-[#3e2f85]">Recommended</span>
                  </div>
                }
              />
            </div>
          </div>

          <Card
            title="Scale"
            price="$750"
            arr="$100K"
            sectionTitle="Everything in Grow, Plus:"
            features={[
              'Premium SLAs',
            ]}
          />
        </div>

        <div className="mt-10">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full bg-[linear-gradient(90deg,#3a2d6f,#5b4bb1)] p-2 pl-6 text-white shadow-[0_0_60px_rgba(124,58,237,0.25)] ring-1 ring-[#5b4bb1]">
            <span className="text-sm font-semibold">Grab It Fast to Get Special Price</span>
            <div className="shrink-0">
              <RainbowButton className="text-white bg-[#131122]" size="lg">Book Demo Now!</RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;


