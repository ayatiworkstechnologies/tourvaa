import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const destinations = [
  { id: 1, name: 'Italy', tours: 124, image: 'https://images.unsplash.com/photo-1516483638261-f40889f08a63?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Japan', tours: 86, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Switzerland', tours: 52, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Egypt', tours: 41, image: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?q=80&w=600&auto=format&fit=crop' },
];

export function PopularDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 text-lg max-w-2xl">Explore our top-rated locations around the globe and find the perfect setting for your next holiday.</p>
          </div>
          <Link href="/destinations" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link key={dest.id} href={`/tours?country=${dest.name.toLowerCase()}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] block shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-y-[-4px] transition-transform">{dest.name}</h3>
                <p className="text-white/80 text-sm font-medium group-hover:translate-y-[-4px] transition-transform delay-75">{dest.tours} Tours</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/destinations" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Destinations <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
