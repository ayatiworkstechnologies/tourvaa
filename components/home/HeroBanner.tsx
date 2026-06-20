import React from 'react';
import { SearchForm } from './SearchForm';

export function HeroBanner() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Premium travel destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/30 tracking-wide uppercase">
          Discover The Extraordinary
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Your Next Great Adventure <br className="hidden md:block" /> Starts Here
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-md font-light">
          Explore curated tours and unforgettable experiences in the world's most breathtaking destinations.
        </p>
      </div>

      <SearchForm />
    </section>
  );
}
