"use client";

import { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeProgram, setActiveProgram] = useState("elite");

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
                 style={{
                   backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                 }}>
            </div>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-800/40"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              UNLEASHING YOUR FULL
              <span className="block text-yellow-400">PERFORMANCE POTENTIAL</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Growing sports talents to perform at their level best with personalized training regiments that ensure your team performs at it's very best
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Why Player360 Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Player360
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                So many performance and training programs in the world, but why choose us?
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Prevention Focus</h3>
                <p className="text-gray-600">Prevention really is better than cure - we focus on proactive performance management and injury prevention</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Personalized Care</h3>
                <p className="text-gray-600">We truly care about your performance journey and provide personalized attention to help you reach your goals</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Innovation Driven</h3>
                <p className="text-gray-600">Born from innovation programs, we bring cutting-edge solutions to performance optimization and athletic development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sports Performance Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sports Performance Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive programs are designed to optimize athletic potential across three categories, ensuring holistic support for athletes at every level.
              </p>
            </div>

            {/* Program Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              {["elite", "semi-elite", "beginner"].map((program) => (
                <button
                  key={program}
                  onClick={() => setActiveProgram(program)}
                  className={`px-6 py-3 m-2 rounded-lg font-medium transition-colors ${
                    activeProgram === program
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {program === "elite" && "Elite Performance"}
                  {program === "semi-elite" && "Semi-Elite Performance"}
                  {program === "beginner" && "Beginner Performance"}
                </button>
              ))}
            </div>

            {/* Program Details */}
            <div className="bg-gray-50 rounded-xl p-8">
              {activeProgram === "elite" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Elite Performance Program</h3>
                  <p className="text-gray-600 mb-6">
                    Designed for professional athletes and elite competitors who demand the absolute best in performance optimization.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-2 font-bold">✓</span>
                      <span className="text-gray-800">Advanced performance tracking with Peak Pro system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-2 font-bold">✓</span>
                      <span className="text-gray-800">Personalized training regimens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-2 font-bold">✓</span>
                      <span className="text-gray-800">Injury prevention protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-2 font-bold">✓</span>
                      <span className="text-gray-800">Nutritional planning and monitoring</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeProgram === "semi-elite" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Semi-Elite Performance Program</h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for competitive athletes looking to bridge the gap to elite performance levels.
                  </p>
                  <ul className="space-y-3">
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
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-2 font-bold">✓</span>
                      <span className="text-gray-800">Competition preparation</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeProgram === "beginner" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Beginner Performance Program</h3>
                  <p className="text-gray-600 mb-6">
                    Ideal for athletes starting their journey or those looking to build a strong foundation.
                  </p>
                  <ul className="space-y-3">
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
                      <span className="text-gray-800">Injury prevention education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-2 font-bold">✓</span>
                      <span className="text-gray-800">Goal setting and progress tracking</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Additional Services */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-gray-900 ">Team Assessment</h4>
                <p className="text-gray-600">Comprehensive evaluation of team performance and potential areas for improvement.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-gray-900">Performance Tracking</h4>
                <p className="text-gray-600">Advanced monitoring systems to track progress and optimize training outcomes.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-gray-900">Injury Prevention</h4>
                <p className="text-gray-600">Proactive strategies to minimize injury risk and maximize athlete availability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* We Are Winners Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WE ARE CHAMPIONS
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Player360 was born out of a passion for athletic excellence, driven by a mission to address critical gaps in performance training.
                By identifying pressing challenges in sports development and creating innovative solutions, we are pioneering a new era of athletic optimization.
                Player360 is empowering athletes and individuals to take control of their performance—because excellence starts with informed training and dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Our Story
                </button>
                <button className="border-2 border-gray-600 text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-colors">
                  Join the Player360 Community
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                MEET THE TEAM
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our dedicated leadership team brings together expertise in sports performance, training science, and athletic development to drive innovation and excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Diana Wambui</h3>
                <p className="text-gray-600 mb-3">Co-Founder & CEO</p>
                <p className="text-sm text-gray-500">
                  Leading the vision and strategic direction of Player360 with expertise in athletic performance and training innovation.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Brooke Stanley</h3>
                <p className="text-gray-600 mb-3">Co-Founder & CTO</p>
                <p className="text-sm text-gray-500">
                  Driving technological innovation and ensuring our training solutions meet the highest standards of athletic excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                WHAT OUR CLIENTS SAY
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Brain Yegon</h3>
                <p className="text-gray-500 mb-4">Athletics Kenya</p>
                <p className="text-lg leading-relaxed italic text-gray-700">
                  "Training with the trainers from Player360 allowed me to improve my record running time significantly. I particularly enjoyed the Peak Pro system that the trainers use to measure my progress and monitor my stats."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Unleash Your Full Potential?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the Player360 community today and start your journey to peak performance and athletic excellence.
            </p>
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Get Started Now
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
