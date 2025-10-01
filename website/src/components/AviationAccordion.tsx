"use client";
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { cn } from '../lib/utils';

type Row = {
  id: string;
  question: string;
  answer: string;
};

const rows: Row[] = [
  {
    id: 'r1',
    question: 'Is my data safe with your platform?',
    answer: 'Yes, we use enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards to ensure your data is completely safe and protected.',
  },
  {
    id: 'r2',
    question: 'What kind of customer support do you offer?',
    answer: 'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to help you with any questions or issues.',
  },
  {
    id: 'r3',
    question: 'How does the pricing for your SaaS solution work?',
    answer: 'Our pricing is based on a flexible tier system that scales with your needs. We offer monthly and annual plans with transparent pricing and no hidden fees. You can upgrade or downgrade at any time.',
  },
  {
    id: 'r4',
    question: 'Can I cancel my subscription at any time?',
    answer: 'Absolutely! You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period, and you can reactivate anytime.',
  },
  {
    id: 'r5',
    question: 'Can I upgrade or downgrade my subscription plan?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate any billing differences to ensure you only pay for what you use.',
  },
];

const AviationAccordion: React.FC = () => {
  return (
    <section className="relative bg-[#140c14] py-10">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        
        <div className="mb-12 text-center">

          {/* FAQ Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-1 rounded-full bg-[#250f27] text-[#cf52da] text-sm font-medium border border-[#cf52da]">
              FAQ
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl font-medium text-white mb-2">
            Some of the things you <br /> may want to know
          </h2>
          
          {/* Subheading */}
          <p className="text-lg text-gray-400">
            We answered questions so you don't have to ask them.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {rows.map((row) => (
            <AccordionItem key={row.id} value={row.id} className="border-none">
              <AccordionTrigger
                className={cn(
                  'group relative w-full rounded-2xl px-6 py-5 text-left transition-all duration-200',
                  'bg-[#250f27] text-white  hover:no-underline cursor-pointer hover:bg-[#231224]',
                  'shadow-lg hover:shadow-xl',
                  
                )}
              >
                <div className="flex-col items-center justify-between w-full">
                  <span className="font-medium text-xl text-white pr-4">{row.question}</span>
                  <AccordionContent>
                <div className=" mt-3 rounded-2xl text-white/50 text-[15px] leading-relaxed">
                  {row.answer}
                </div>
              </AccordionContent>
                </div>
              </AccordionTrigger>
             
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AviationAccordion;




