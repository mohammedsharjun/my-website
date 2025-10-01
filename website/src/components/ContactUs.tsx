"use client";
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');

  const interests = [
    'Branding',
    'Website Design', 
    'UX/UI',
    'Motion Design',
    'Landing page',
    'Content Creation',
    'Webflow Development'
  ];

  const budgets = ['Free', '≤ $10k', '> $10k'];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Section */}
          <div className="space-y-8">
            {/* Contact us button */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <button className="bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Contact us
              </button>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl font-bold text-black leading-tight">
              Let's make<br />
              an impact
            </h2>

            {/* Our Testimonials section */}
            <div className="mt-20">
              <h3 className="text-lg font-medium text-black mb-6">Our Testimonials:</h3>
              <div className="flex gap-4">
                {/* Testimonial icons */}
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white">
            <form className="space-y-8">
              {/* Personal and Company Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Evan"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Microsoft"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="evan@microsoft.com"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Your Phone</label>
                  <input
                    type="tel"
                    placeholder="Your number phone"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
              </div>

              {/* Interests Section */}
              <div>
                <h3 className="text-lg font-medium text-black mb-4">I'm interested in...</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedInterests.includes(interest)
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-300 hover:border-black'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Budget Section */}
              <div>
                <h3 className="text-lg font-medium text-black mb-4">Project Budget (USD)</h3>
                <div className="flex gap-3">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedBudget === budget
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-300 hover:border-black'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-medium text-black mb-4">Tell us about your project.</h3>
                <textarea
                  placeholder="Write something concise..."
                  rows={6}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none bg-transparent"
                />
                {/* Resize icon */}
                <div className="flex justify-end mt-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                    <path d="M22 22L12 12M22 22V16M22 22H16M12 12L2 2M12 12V8M12 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
