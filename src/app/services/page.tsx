"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState("performance");

  return (
    <div className="min-h-screen pt-16">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
               }}>
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-800/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            OUR
            <span className="block text-yellow-400">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive athletic performance solutions designed to elevate your game and achieve your goals.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized services tailored to meet your unique athletic needs and performance goals.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {["performance", "assessment", "tracking", "prevention"].map((service) => (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={`px-6 py-3 m-2 rounded-lg font-medium transition-colors ${
                  activeService === service
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {service === "performance" && "Performance Programs"}
                {service === "assessment" && "Team Assessment"}
                {service === "tracking" && "Performance Tracking"}
                {service === "prevention" && "Injury Prevention"}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-gray-50 rounded-xl p-8">
            {activeService === "performance" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Performance Programs</h3>
                <p className="text-gray-600 mb-6">
                  Our comprehensive performance programs are designed to optimize athletic potential across all levels, ensuring holistic support for every athlete.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Elite Performance</h4>
                    <p className="text-gray-600 text-sm mb-4">For professional athletes seeking competitive excellence.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Advanced performance tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Personalized training regimens</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Nutritional planning</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Semi-Elite Performance</h4>
                    <p className="text-gray-600 text-sm mb-4">For competitive athletes bridging to elite levels.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Progressive training programs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Performance benchmarking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Technical skill development</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Beginner Performance</h4>
                    <p className="text-gray-600 text-sm mb-4">For athletes building strong foundations.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Fundamental skill building</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Basic fitness conditioning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Goal setting guidance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeService === "assessment" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Team Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive evaluation of team performance and potential areas for improvement through data-driven analysis.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Individual Assessment</h4>
                    <p className="text-gray-600 text-sm mb-4">Detailed analysis of each team member's capabilities.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Physical performance metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Technical skill evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Mental readiness assessment</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Team Dynamics Analysis</h4>
                    <p className="text-gray-600 text-sm mb-4">Evaluation of team cohesion and synergistic performance.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Communication patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Collaboration effectiveness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Leadership structure analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeService === "tracking" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Performance Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Advanced monitoring systems to track progress and optimize training outcomes with real-time data analytics.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Peak Pro System</h4>
                    <p className="text-gray-600 text-sm mb-4">Our proprietary performance monitoring platform.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Real-time performance metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Progress visualization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Predictive analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Biometric Monitoring</h4>
                    <p className="text-gray-600 text-sm mb-4">Comprehensive physiological tracking systems.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Heart rate variability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Recovery metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Sleep quality analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeService === "prevention" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Injury Prevention</h3>
                <p className="text-gray-600 mb-6">
                  Proactive strategies to minimize injury risk and maximize athlete availability through preventive care.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Preventive Training</h4>
                    <p className="text-gray-600 text-sm mb-4">Specialized exercises to reduce injury risk.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Mobility and flexibility work</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Strength conditioning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Movement pattern correction</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Recovery Management</h4>
                    <p className="text-gray-600 text-sm mb-4">Optimized recovery protocols for performance.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Recovery period planning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Nutritional recovery support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">✓</span>
                        <span className="text-gray-800">Stress management techniques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complementary services to support your athletic journey and overall development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Sports Psychology</h3>
              <p className="text-gray-600 text-sm">
                Mental conditioning and performance psychology to enhance focus, confidence, and competitive mindset.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Nutritional Planning</h3>
              <p className="text-gray-600 text-sm">
                Customized nutrition strategies and meal planning to fuel performance and support recovery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Speed & Agility</h3>
              <p className="text-gray-600 text-sm">
                Specialized training programs to improve speed, quickness, and overall athletic movement patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Performance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our services can help you achieve your athletic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors">
              Get Started Now
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
