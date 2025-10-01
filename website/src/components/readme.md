{/* Pricing Section */}
        {/* <section className="relative py-20 px-8 bg-[#140c14]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header 
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Choose Your <span className="text-[#fdaa51]">Perfect Plan</span>
              </h2>
              <p className="text-xl text-[#aca1b7] max-w-2xl mx-auto">
                Select the plan that fits your business needs and start growing today
              </p>
            </div>

            {/* Pricing Cards 
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan 
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                    <p className="text-[#aca1b7] text-sm">Perfect for startups</p>
                  </div>
                  
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-white mb-2">$99</div>
                    <p className="text-[#aca1b7] text-sm">per month</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Up to 5 projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Basic support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Standard templates</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Pro Plan - Featured 
              <div className="relative group md:-mt-4">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/30 to-pink-500/30 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300">
                  {/* Popular Badge 
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                  
                  <div className="text-center mb-8 mt-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-[#aca1b7] text-sm">Best for growing businesses</p>
                  </div>
                  
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-white mb-2">$199</div>
                    <p className="text-[#aca1b7] text-sm">per month</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Up to 25 projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Priority support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Premium templates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Analytics dashboard</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Enterprise Plan 
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-[#aca1b7] text-sm">For large organizations</p>
        </div>
                  
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-white mb-2">$499</div>
                    <p className="text-[#aca1b7] text-sm">per month</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Unlimited projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">24/7 dedicated support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Custom solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">Advanced analytics</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA 
            <div className="text-center mt-16">
              <p className="text-[#aca1b7] text-lg mb-6">
                All plans include a 14-day free trial. No credit card required.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-white/20">
                  View All Features
                </button>
                <button className="bg-gradient-to-r from-[#e89eff] to-[#8aa8ff] hover:from-[#d88eff] hover:to-[#7a98ff] text-white px-6 py-3 rounded-xl transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section> 

        {/* Before/After Cards */}
        {/* <div className="flex justify-center items-center gap-8 my-16 mt-20 mx-15 relative"> 
          {/* Before Card *
          <div className="relative transform -  hover:scale-105 transition-all duration-300">
            <div className="text-gray-400 text-sm font-semibold mb-2 text-center">Before</div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-2 w-full shadow-2xl relative">
              <img src="/images/badui.jpg" alt="Before UI" className="w-200 h-100 object-cover rounded-xl" />
            </div>
            {/* Metric Boxes for Before 
            {/* <div className="absolute -top-2 left-5 bg-red-50 text-red-600 border border-red-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↓</span>
              <span>Followers -25</span>
            </div>
            <div className="absolute top-5 -right-5 bg-red-50 text-red-600 border border-red-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↓</span>
              <span>Profile views -14%</span>
            </div> *
          </div>

          {/* Transformation Arrow 
          <div className="text-4xl text-blue-500 font-bold   -rotate-25">
            <img src="/images/arroww.png" alt="Arrow" className="w-30 h-15" />
          </div>

          {/* After Card 
          <div className="relative transform  hover:scale-105 transition-all duration-300">
            <div className="text-gray-400 text-sm font-semibold mb-2 text-center">After</div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-2 w-full shadow-2xl relative">
              <img src="/images/goodui.jpg" alt="After UI" className="w-200 h-100 object-cover rounded-xl" />
            </div>
            {/* Metric Boxes for After */}
            {/* <div className="absolute -top-2 left-5 bg-green-50 text-green-600 border border-green-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↑</span>
              <span>Followers 2400+</span>
            </div>
            <div className="absolute top-5 -right-5 bg-green-50 text-green-600 border border-green-200 rounded-lg px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1">
              <span className="text-lg font-bold">↑</span>
              <span>Profile views 300%</span>
            </div>
          </div>
        </div> */}

              
      
        {/* Behind the Designs Section */}
        {/* <section className="relative my-20 px-8 mt-25">
            <div className="max-w-full  mx-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content 
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-orange-500 text-2xl font-semibold tracking-wide">
                      Behind the Designs
                    </h3>
                    <h2 className="text-5xl lg:text-[3.8rem] font-bold text-white leading-tight">
                      Shaping <br /> Experiences That Make Life Simpler
                    </h2>
                  </div>
                </div>

                {/* Right Content 
                <div className="space-y-8">
                  <p className="text-4xl font-semibold text-white leading-10">
                    I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
                  </p>
                  
                  <div className="space-y-6 mt-25 flex items-start justify-start gap-10">
                    <p className="text-white/40 text-2xl">
                      Let's Build Something <br /> Meaningful Together
                    </p>
                    
                    <button className="group relative inline-flex items-center gap-3 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold pl-5 pr-2 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                      <span>Get in touch</span>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg 
                          className="w-4 h-4 text-orange-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
              </div>
              </button>
                  </div>
                </div>
              </div>
            </div>
          </section> */}



    {/* New Services Section */}
      {/* <section className="relative py-20 px-8 bg-[#140c14]">
        <div className="max-w-7xl mx-auto">
          {/* Header 
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#fdaa51]">Services</span>
            </h2>
            <p className="text-xl text-[#aca1b7] max-w-3xl mx-auto">
              We provide comprehensive solutions to help your business grow and succeed in the digital world.
            </p>
          </div>

          {/* Services Grid 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Custom websites and web applications built with modern technologies for optimal performance and user experience.
                </p>
              </div>
            </div>

            {/* Service Card 2 
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Mobile Apps</h3>
                <p className="text-gray-400 leading-relaxed">
                  Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
                </p>
              </div>
            </div>

            {/* Service Card 3 
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
                <p className="text-gray-400 leading-relaxed">
                  Speed up your website and improve user experience with our comprehensive performance optimization services.
                </p>
              </div>
            </div>

            {/* Service Card 4 
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
                <p className="text-gray-400 leading-relaxed">
                  Data-driven insights and analytics to help you understand your users and optimize your digital presence.
                </p>
              </div>
            </div>

            {/* Service Card 5 
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Solutions</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive security measures to protect your digital assets and ensure data privacy and compliance.
                </p>
              </div>
            </div>

            {/* Service Card 6 
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Round-the-clock technical support and maintenance to keep your systems running smoothly at all times.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section 
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-black font-semibold px-8 py-3"
                as="button"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e89eff] to-[#8aa8ff]">Get Started Today</span>
              </HoverBorderGradient>
              <button className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section> 

    



{/* Trusted By Section */}
            {/* <section className="relative py-16 px-8">
              <div className="max-w-7xl mx-auto">
                {/* Top Banner 
                <div className="flex items-center justify-center mb-12">
                  <div className="flex items-center gap-8">
                    {/* Left decorative line 
                    <div className="w-16 h-px bg-gray-400 relative">
                      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                    
                    {/* Banner 
                    <div className="bg-gray-800 border border-gray-600 rounded-lg px-6 py-3 shadow-lg">
                      <p className="text-white text-lg font-medium">Trusted over 2k+ company</p>
                    </div>
                    
                    {/* Right decorative line 
                    <div className="w-16 h-px bg-gray-400 relative">
                      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Company Logos 
                <div className="flex flex-col items-center gap-6">
                  {/* Top Row 
                  <div className="flex items-center gap-6">
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">                          
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Logoipsum</span>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Logoipsum</span>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Logoipsum</span>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7-2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
                </svg>
                      </div>
                      <span className="text-white font-medium">Logoipsum</span>
              </div>
            </div>
            
                  {/* Bottom Row 
                  <div className="flex items-center gap-6">
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Logoipsum</span>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Logoipsum</span>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Logoipsum</span>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}








