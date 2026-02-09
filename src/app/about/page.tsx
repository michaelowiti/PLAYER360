"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const AboutPage = () => {
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
            ABOUT
            <span className="block text-yellow-400">PLAYER360</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering athletes to achieve their highest potential through world-class training and performance optimization.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                From passion to profession, building champions one athlete at a time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
              <p className="text-gray-700 leading-relaxed mb-6">
                Player360 was born out of a passion for athletic excellence and a deep understanding of what it takes to reach the pinnacle of sports performance. Founded by former athletes and performance experts, we recognized a critical gap in the market: the need for comprehensive, personalized training solutions that address every aspect of an athlete&apos;s development.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                What started as a small training facility has grown into a premier athletic performance center, serving thousands of athletes across multiple sports disciplines. Our journey has been marked by innovation, dedication, and an unwavering commitment to helping our clients achieve their dreams.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Player360 stands as a testament to the power of scientific training methodologies combined with genuine care for each athlete&apos;s individual journey. We continue to push the boundaries of what&apos;s possible in athletic performance, always staying true to our core mission of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600">
                Driving excellence through innovation and personalized attention.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We pursue excellence in everything we do, from training methodologies to client service, ensuring the highest standards of athletic development.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Personalization</h3>
                <p className="text-gray-600 text-sm">
                  Every athlete is unique. We create customized training programs that address individual strengths, weaknesses, and goals.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  We operate with transparency and honesty, building trust through consistent results and ethical practices in all our interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team brings together expertise in sports performance, training science, and athletic development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">Diana Wambui</h3>
              <p className="text-gray-600 mb-3">Co-Founder & CEO</p>
              <p className="text-sm text-gray-700">
                Former professional athlete with 15+ years in performance training and sports psychology.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">Brooke Stanley</h3>
              <p className="text-gray-600 mb-3">Co-Founder & CTO</p>
              <p className="text-sm text-gray-700">
                Sports technology expert specializing in performance analytics and training optimization systems.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200/50">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">Marcus Chen</h3>
              <p className="text-gray-600 mb-3">Head Performance Coach</p>
              <p className="text-sm text-gray-700">
                Olympic-level coaching experience with expertise in strength conditioning and injury prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.3)] border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-gray-300">Athletes Trained</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.3)] border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.3)] border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <p className="text-gray-300">Success Rate</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.3)] border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-gray-300">Championships Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Join the Player360 family and discover what you&apos;re truly capable of achieving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.2)] border border-gray-600/50">
              Get Started Today
            </Link>
            <Link href="/programs" className="border-2 border-gray-600 text-gray-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 hover:text-white transition-colors">
              View Our Programs
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
