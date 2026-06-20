import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';

const featuredTours = [
  {
    id: 1,
    slug: 'taste-of-italy',
    title: 'Taste of Italy',
    country: 'Italy',
    duration: 8,
    price: 1899,
    rating: 'Leisurely',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'japan-discovery',
    title: 'Japan Discovery',
    country: 'Japan',
    duration: 12,
    price: 2450,
    rating: 'Moderate',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'swiss-alps-adventure',
    title: 'Swiss Alps Adventure',
    country: 'Switzerland',
    duration: 6,
    price: 1550,
    rating: 'Active',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
  },
];

export function FeaturedTours() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Tours</h2>
            <p className="text-gray-600 text-lg max-w-2xl">Unforgettable journeys highly rated by our travellers.</p>
          </div>
          <Link href="/tours" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Tours <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none">
              <Link href={`/tours/${tour.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                    {tour.rating}
                  </div>
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {tour.country}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {tour.duration} Days</span>
                </div>
                <Link href={`/tours/${tour.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">{tour.title}</h3>
                </Link>
                <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Price from</p>
                    <p className="text-xl font-bold text-blue-600">{formatCurrency(tour.price)}</p>
                  </div>
                  <Link href={`/tours/${tour.slug}`} className="text-sm font-semibold text-gray-900 hover:text-blue-600 underline underline-offset-4">
                    View Tour
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/tours" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Tours <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
