// "use client";
// import React, { useState } from 'react';

// const ContactUs: React.FC = () => {
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [selectedBudget, setSelectedBudget] = useState<string>('');

//   const interests = [
//     'Portfolio',
//     'E-Commerce', 
//     'UX/UI',
//     'E-Learning',
//     'Landing page',
//     'Social Media',
//     'Blog Website',
//     'Other'
//   ];

//   const budgets = ['≤ $2k', '> $2k', '> $5k'];

//   const handleInterestToggle = (interest: string) => {
//     setSelectedInterests(prev => 
//       prev.includes(interest) 
//         ? prev.filter(i => i !== interest)
//         : [...prev, interest]
//     );
//   };

//   return (
//     <section className="relative  py-20">
//       <div className="max-w-[90vw] p-12 rounded-4xl bg-[#dea6fc] mx-auto ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
//           {/* Left Section */}
//           <div className="space-y-8">
//             {/* Contact us button */}
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 bg-black rounded-full"></div>
//               <button className=" hover:bg-gray-200 text-black py-2 rounded-lg text-lg font-medium transition-colors">
//                 Contact us
//               </button>
//             </div>

//             {/* Main heading */}
//             <h2 className="text-7xl font-medium text-black leading-tighter">
//               Let's make<br />
//               an impact
//             </h2>

//             {/* Our Testimonials section */}
//             <div className="absolute bottom-30 ">
//               <h3 className="text-lg font-medium text-black mb-6">Our Testimonials:</h3>
//               <div className="flex gap-4">
//                 {/* Testimonial icons */}
//                 <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold text-sm">C</span>
//                 </div>
//                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//                   <div className="w-6 h-6 bg-black rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Contact Form */}
//           <div>
//             <form className="space-y-8">
//               {/* Personal and Company Details */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-2">Name</label>
//                   <input
//                     type="text"
//                     placeholder="Evan"
//                     className="w-full px-0 py-3 border-0 border-b-2 border-b-2lack text-black placeholder-[#140c16] focus:outline-none focus:border-b-2lack transition-colors bg-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-2">Company</label>
//                   <input
//                     type="text"
//                     placeholder="Microsoft"
//                     className="w-full px-0 py-3 border-0 border-b-2 border-b-2lack text-black placeholder-[#140c16] focus:outline-none focus:border-b-2lack transition-colors bg-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-2">Your Email</label>
//                   <input
//                     type="email"
//                     placeholder="evan@microsoft.com"
//                     className="w-full px-0 py-3 border-0 border-b-2 border-b-2lack text-black placeholder-[#140c16] focus:outline-none focus:border-b-2lack transition-colors bg-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-2">Your Phone</label>
//                   <input
//                     type="tel"
//                     placeholder="Your number phone"
//                     className="w-full px-0 py-3 border-0 border-b-2 border-b-2lack text-black placeholder-[#140c16] focus:outline-none focus:border-b-2lack transition-colors bg-transparent"
//                   />
//                 </div>
//               </div>

//               {/* Interests Section */}
//               <div>
//                 <h3 className="text-lg font-medium text-black mb-4">I'm interested in...</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {interests.map((interest) => (
//                     <button
//                       key={interest}
//                       type="button"
//                       onClick={() => handleInterestToggle(interest)}
//                       className={`px-6 py-2.5 rounded-full text-md font-medium border transition-colors ${
//                         selectedInterests.includes(interest)
//                           ? 'bg-black text-white border-b-2lack'
//                           : 'bg-[#dea6fc] text-[#140c16] border-black border-2 border-b-2lack hover:border-b-2lack'
//                       }`}
//                     >
//                       {interest}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Budget Section */}
//               <div>
//                 <h3 className="text-lg font-medium text-black mb-4">Project Budget (USD)</h3>
//                 <div className="flex gap-3">
//                   {budgets.map((budget) => (
//                     <button
//                       key={budget}
//                       type="button"
//                       onClick={() => setSelectedBudget(budget)}
//                       className={`px-6 py-2.5 rounded-full text-md font-medium border transition-colors ${
//                         selectedBudget === budget
//                           ? 'bg-black text-white border-b-2lack'
//                           : 'bg-[#dea6fc] text-black border-b-2lack hover:border-b-2lack'
//                       }`}
//                     >
//                       {budget}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Description */}
//               <div>
//                 <h3 className="text-lg font-medium text-black mb-2">Tell us about your project.</h3>
//                 <textarea
//                   placeholder="Write something concise..."
//                   rows={4}
//                   className="w-full px-0 py-3 pb-1 border-0 border-b-2 border-b-2lack text-black placeholder-[#140c16] focus:outline-none focus:border-b-2lack transition-colors resize-none bg-transparent"
//                 /> 
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 cursor-pointer transition-colors text-lg"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import {  addDoc, collection, serverTimestamp } from "firebase/firestore";

const ContactUs: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const interests = [
    "Portfolio",
    "E-Commerce",
    "UX/UI",
    "E-Learning",
    "Landing page",
    "Social Media",
    "Blog Website",
    "Other",
  ];

  const budgets = ["≤ $2k", "> $2k", "> $5k"];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const validate = () => {
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return "Enter a valid email";
    if (!message.trim()) return "Project description is required";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setToast({ type: "error", text: err });
      return;
    }
    try {
      setSubmitting(true);
      await addDoc(collection(db, "contacts"), {
        name: name.trim(),
        company: company.trim() || null,
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        interests: selectedInterests,
        budget: selectedBudget || null,
        message: message.trim(),
        source: "website",
        timestamp: serverTimestamp(),
      });
      setToast({ type: "success", text: "Thanks! We’ll get back soon." });
      // Reset form
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setSelectedInterests([]);
      setSelectedBudget("");
      setMessage("");
    } catch (error: any) {
      setToast({ type: "error", text: "Submission failed. Try again." });
      // Optionally log error to monitoring
    } finally {
      setSubmitting(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <>
      {/* Top Alert Notification */}
      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
          <div className={`px-6 py-4 rounded-lg shadow-lg border-2 max-w-md mx-auto ${
            toast.type === "success" 
              ? "bg-green-50 text-green-800 border-green-300" 
              : "bg-red-50 text-red-800 border-red-300"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                toast.type === "success" ? "bg-green-200" : "bg-red-200"
              }`}>
                {toast.type === "success" ? (
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="font-medium">{toast.text}</span>
              <button 
                onClick={() => setToast(null)}
                className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="relative py-20">
        <div className="max-w-[90vw] p-12 rounded-4xl bg-[#dea6fc] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section */}
          <div className="space-y-8 relative">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <button
                type="button"
                className="hover:bg-gray-200 text-black py-2 rounded-lg text-lg font-medium transition-colors"
                onClick={() => {
                  const el = document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Contact us
              </button>
            </div>

            <h2 className="text-7xl font-medium text-black leading-tighter">
              Let&apos;s make
              <br />
              an impact
            </h2>

            <div className="absolute bottom-0">
              <h3 className="text-lg font-medium text-black mb-6">Our Testimonials:</h3>
              <div className="flex gap-4">
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
          <div>
            <form id="contact-form" onSubmit={onSubmit} className="space-y-8">
              {/* Personal and Company Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Evan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-0 py-3 border-0 border-b-2 border-black text-black placeholder-[#140c16] focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Microsoft"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-0 py-3 border-0 border-b-2 border-black text-black placeholder-[#140c16] focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="evan@microsoft.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-0 py-3 border-0 border-b-2 border-black text-black placeholder-[#140c16] focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Your Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-0 py-3 border-0 border-b-2 border-black text-black placeholder-[#140c16] focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>
              </div>

              {/* Interests Section */}
              <div>
                <h3 className="text-lg font-medium text-black mb-4">I&apos;m interested in...</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-6 py-2.5 rounded-full text-md font-medium border transition-colors ${
                        selectedInterests.includes(interest)
                          ? "bg-black text-white border-black"
                          : "bg-[#dea6fc] text-[#140c16] border-black border-2 hover:border-black"
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
                      className={`px-6 py-2.5 rounded-full text-md font-medium border transition-colors ${
                        selectedBudget === budget
                          ? "bg-black text-white border-black"
                          : "bg-[#dea6fc] text-black border-black hover:border-black"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-medium text-black mb-2">Tell us about your project.</h3>
                <textarea
                  placeholder="Write something concise..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-0 py-3 pb-1 border-0 border-b-2 border-black text-black placeholder-[#140c16] focus:outline-none focus:border-black transition-colors resize-none bg-transparent"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 cursor-pointer transition-colors text-lg disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
