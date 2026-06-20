import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';

const dealTours = [
  {
    id: 4,
    slug: 'egypt-nile-cruise',
    title: 'Egypt & The Nile',
    country: 'Egypt',
    duration: 10,
    originalPrice: 2200,
    price: 1850,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    slug: 'australia-highlights',
    title: 'Australia Highlights',
    country: 'Australia',
    duration: 14,
    originalPrice: 3800,
    price: 3230,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
  },
];

export function ToursOnDeals() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-6 w-6 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Special Deals</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl">Don't miss out on these limited-time offers on our premium tours.</p>
          </div>
          <Link href="/deals" className="hidden md:flex items-center text-red-500 font-semibold hover:text-red-600 transition-colors">
            View All Deals <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dealTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none group flex flex-col sm:flex-row">
              <div className="relative h-64 sm:h-auto sm:w-2/5 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                  Save {tour.discount}%
                </div>
              </div>
              <CardContent className="p-6 sm:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {tour.country}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {tour.duration} Days</span>
                </div>
                <Link href={`/tours/${tour.slug}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">{tour.title}</h3>
                </Link>
                <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-sm text-gray-500 line-through mb-1">{formatCurrency(tour.originalPrice)}</p>
                    <p className="text-2xl font-bold text-red-500">{formatCurrency(tour.price)}</p>
                  </div>
                  <Link href={`/tours/${tour.slug}`} className="px-5 py-2.5 bg-gray-900 text-white rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors">
                    View Deal
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/deals" className="inline-flex items-center text-red-500 font-semibold hover:text-red-600 transition-colors">
            View All Deals <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
