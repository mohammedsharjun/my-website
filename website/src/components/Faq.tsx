"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

const AviationAccordion: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const accordionItems = [
    {
      title: "Is my data safe with your platform?",
      content: "Absolutely. We use enterprise-grade security measures including SSL encryption, secure servers, and regular backups to protect your data."
    },
    {
      title: "What kind of customer support do you offer?",
      content: "We provide 24/7 customer support via email, chat, and phone. Our dedicated support team is always ready to help you succeed."
    },
    {
      title: "How does the pricing for your SaaS solution work?",
      content: "Our pricing is transparent and flexible. Choose from our monthly or annual plans, with no hidden fees or surprise charges."
    },
    {
      title: "Can I cancel my subscription at any time?",
      content: "Yes, you can cancel your subscription at any time with no penalties. Your access will continue until the end of your current billing period."
    },
    {
      title: "Can I upgrade or downgrade my subscription plan?",
      content: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
    }
  ];

  return (
    <section className="relative py-20 px-8 bg-transparent overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-purple-400 text-black px-3 py-1 rounded-full text-sm font-bold uppercase">
              FAQ
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-medium text-white mb-3 leading-tighter">
            Some of the things <br /> you may want to know
          </h2>
          
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We answered questions so you don't have to ask them.
          </p>
        </div>

        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="group bg-[#5B2F72FF]/35 rounded-2xl overflow-hidden  transition-all duration-200"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between transition-all duration-300 ease-in-out"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-400 transition-all duration-300 ease-in-out ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className={`transition-all duration-300 ease-in-out ${
                    openItems.includes(index) ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-4 opacity-0'
                  }`}>
                    <p className="text-gray-300 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AviationAccordion;