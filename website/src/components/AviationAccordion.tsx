"use client";
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';



type Row = {
  id: string;
  left: string;
  center: string;
  right: string;
  featured?: boolean;
};

const rows: Row[] = [
  {
    id: 'r1',
    left: 'Tailored invoicing for aviation',
    center: 'API integration',
    right: 'Seamless integration with your aviation ERP and accounting systems.',
  },
  {
    id: 'r2',
    left: 'Client payment portal',
    center: 'Hosted Invoice Page',
    right: 'A secure portal for your clients to view and pay.',
    featured: true,
  },
  {
    id: 'r3',
    left: 'Secure global payments',
    center: 'Bank transfers',
    right: 'Swift and secure global payment settlements platform',
  },
  {
    id: 'r4',
    left: 'Quick receivable management',
    center: 'Smart retries',
    right: 'Intelligent retry system for any failed transactions.',
  },
  {
    id: 'r5',
    left: 'Reconciliation & reporting',
    center: 'Custom reports',
    right: 'Detailed reporting tailored for aviation business insights.',
  },
];

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-3 py-1 text-xs font-semibold text-white/70 shadow-sm">
    {children}
  </span>
);

const AviationAccordion: React.FC = () => {
  return (
    <section className="relative bg-[#140c14] py-20">

      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Automated invoicing for
            <br />
            <span className="text-white/60">the aviation industry</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Badge>Efficiency</Badge>
            <Badge>Streamline</Badge>
            <Badge>Automation</Badge>
          </div>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-5">
          {rows.map((row) => (
            <AccordionItem key={row.id} value={row.id} className="border-none">
              <AccordionTrigger
                className={cn(
                  'group relative w-full rounded-full px-6 py-6 text-base no-underline shadow-sm ring-1 ring-white/10 transition-colors',
                  'data-[state=open]:bg-white data-[state=open]:text-white data-[state=open]:ring-white',
                  '[&>svg]:hidden'
                )}
              >
                <div className="grid w-full grid-cols-12 items-center gap-4">
                  <div className="col-span-5 flex items-center gap-3">
                    <span className={cn('flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/15', 'group-data-[state=open]:ring-white/20')}>
                      <Check className={cn('h-4 w-4 text-white/60', 'group-data-[state=open]:text-white')} />
                    </span>
                    <span className="font-semibold">{row.left}</span>
                  </div>
                  <div className="col-span-3 text-white/50 group-data-[state=open]:text-white/70">
                    {row.center}
                  </div>
                  <div className="col-span-3 text-sm text-white/60 group-data-[state=open]:text-white/80">
                    {row.right}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <span className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/10 transition-colors',
                      'group-data-[state=open]:bg-white group-data-[state=open]:text-white'
                    )}>
                      <ChevronRight className={cn('h-5 w-5 transition-transform duration-200', 'group-data-[state=open]:rotate-90')} />
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="rounded-2xl border border-white/10 bg-purple-300/70 p-6 text-sm text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, libero vitae luctus
                  efficitur, risus turpis laoreet dolor, ut placerat lorem augue at risus.
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AviationAccordion;




