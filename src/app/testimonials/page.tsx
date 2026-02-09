"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Brian Yegon",
      role: "Professional Athlete",
      organization: "Athletics Kenya",
      program: "elite",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      testimonial: "Training with the trainers from Player360 allowed me to improve my record running time significantly. I particularly enjoyed the Peak Pro system that the trainers use to measure my progress and monitor my stats. The personalized attention and data-driven approach made all the difference in my performance.",
      results: ["15% improvement in race times", "Enhanced recovery protocols", "Injury-free season"],
      featured: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Team Captain",
      organization: "Atlanta United FC",
      program: "semi-elite",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      testimonial: "Our team's performance has transformed since partnering with Player360. The semi-elite program provided the perfect bridge for our players to reach the next level. The team assessment and group training sessions created incredible cohesion and measurable improvements.",
      results: ["Team performance increased by 25%", "Reduced injury rates", "Improved team dynamics"],
      featured: false
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "High School Athlete",
      organization: "Westlake High School",
      program: "beginner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      testimonial: "As a beginner athlete, I was nervous about starting serious training. The Player360 team made me feel comfortable and created a program that built my confidence while developing my skills. The injury prevention education was invaluable.",
      results: ["Made varsity team", "Improved confidence", "Learned proper techniques"],
      featured: false
    },
    {
      id: 4,
      name: "Amanda Rodriguez",
      role: "Marathon Runner",
      organization: "Personal Achievement",
      program: "elite",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594736797933-d0351d2b0a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      testimonial: "The elite performance program at Player360 exceeded my expectations. The combination of advanced tracking, nutritional planning, and mental conditioning helped me achieve a personal best in my latest marathon. Their holistic approach is unmatched.",
      results: ["Personal best marathon time", "Enhanced mental toughness", "Optimized nutrition"],
      featured: false
    },
    {
      id: 5,
      name: "David Thompson",
      role: "Basketball Coach",
      organization: "Georgia Tech Basketball",
      program: "team",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      testimonial: "Player360's team assessment and training program revolutionized how we approach player development. The data-driven insights and customized regimens helped each player reach their potential while building team chemistry.",
      results: ["30% improvement in team metrics", "Enhanced player development", "Better injury prevention"],
      featured: false
    },
    {
      id: 6,
      name: "Emily Watson",
      role: "Triathlete",
      organization: "Amateur Competition",
      program: "semi-elite",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      testimonial: "The semi-elite program provided the structure and support I needed to progress from amateur to competitive triathlon. The progressive training approach and performance benchmarking kept me motivated and on track.",
      results: ["Qualified for national competition", "Improved endurance", "Better race strategy"],
      featured: false
    }
  ];

  const filters = [
    { value: "all", label: "All Testimonials" },
    { value: "elite", label: "Elite Program" },
    { value: "semi-elite", label: "Semi-Elite Program" },
    { value: "beginner", label: "Beginner Program" },
    { value: "team", label: "Team Programs" }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => 
    activeFilter === "all" || testimonial.program === activeFilter
  );

  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
               }}>
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-800/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SUCCESS
            <span className="block text-yellow-400">STORIES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Hear from athletes and teams who have transformed their performance with Player360's proven training methodologies and expert guidance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Athletes Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <p className="text-gray-600">Teams Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === filter.value
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {activeFilter === "all" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Outstanding achievements from our elite performers
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {featuredTestimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 mb-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <p className="text-sm text-gray-500">{testimonial.organization}</p>
                        </div>
                        <div className="ml-auto">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.testimonial}</p>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {testimonial.results.map((result, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real athletes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    width={64}
                    height={64}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.organization}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-4">
                  {testimonial.testimonial}
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {testimonial.program} Program
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No testimonials found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hear From Our Athletes
            </h2>
            <p className="text-xl text-gray-600">
              Watch their stories in their own words
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-gray-50 rounded-2xl overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">Video Testimonial {video}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">Athlete Success Story {video}</h3>
                  <p className="text-sm text-gray-600">Watch how Player360 transformed their performance</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the hundreds of athletes who have transformed their performance with Player360. Your journey to excellence starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
