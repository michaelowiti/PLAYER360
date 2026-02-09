


import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-white text-gray-900 overflow-hidden">
      {/* Optional Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/path-to-your-hero-image.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-10"
          fill
          sizes="100vw"
          priority
        />
      </div>

      {/* Full-width content */}
      <div className="z-10 w-full px-6 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-6xl">
          Train Like a Pro, Perform Like a Champion
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-4xl">
          World-class sports performance programs tailored for athletes at every level.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-3xl">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition transform hover:-translate-y-1 w-full md:w-auto">
            Explore Programs
          </button>
          <button className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:-translate-y-1 w-full md:w-auto">
            Find a Location
          </button>
        </div>

        {/* Location Info */}
        <div className="mt-8 text-gray-600 text-sm md:text-base">
          <span>EXOS Atlanta – Alpharetta, GA</span>
        </div>

        {/* Secondary link */}
        <div className="mt-4">
          <button className="text-blue-600 hover:text-blue-500 underline text-sm md:text-base">
            Don’t see your sport?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

