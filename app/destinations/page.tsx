import React from 'react';
import Link from 'next/link';

const allDestinations = [
  { id: 1, name: 'Italy', tours: 124, region: 'Europe', image: 'https://images.unsplash.com/photo-1516483638261-f40889f08a63?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Japan', tours: 86, region: 'Asia', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Switzerland', tours: 52, region: 'Europe', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Egypt', tours: 41, region: 'Africa', image: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?q=80&w=600&auto=format&fit=crop' },
  { id: 5, name: 'Australia', tours: 63, region: 'Oceania', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=600&auto=format&fit=crop' },
  { id: 6, name: 'Greece', tours: 95, region: 'Europe', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop' },
  { id: 7, name: 'Peru', tours: 38, region: 'South America', image: 'https://images.unsplash.com/photo-1526392060635-9d60198d3fe3?q=80&w=600&auto=format&fit=crop' },
  { id: 8, name: 'Thailand', tours: 112, region: 'Asia', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop' },
];

export default function DestinationsPage() {
  // Group by region for potential filtering, but keeping it simple for now
  
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Destinations</h1>
          <p className="text-xl text-gray-600">
            From ancient ruins to modern metropolises, find the perfect backdrop for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allDestinations.map((dest) => (
            <Link key={dest.id} href={`/tours?country=${dest.name.toLowerCase()}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] block shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
                {dest.region}
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-y-[-4px] transition-transform">{dest.name}</h3>
                <p className="text-white/80 text-sm font-medium group-hover:translate-y-[-4px] transition-transform delay-75">{dest.tours} Tours</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
