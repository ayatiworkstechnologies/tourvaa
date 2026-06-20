import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';

const allDeals = [
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
  {
    id: 6,
    slug: 'taste-of-italy',
    title: 'Taste of Italy',
    country: 'Italy',
    duration: 8,
    originalPrice: 2100,
    price: 1890,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1516483638261-f40889f08a63?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    slug: 'peru-machu-picchu',
    title: 'Peru & Machu Picchu',
    country: 'Peru',
    duration: 9,
    originalPrice: 1950,
    price: 1560,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1526392060635-9d60198d3fe3?q=80&w=800&auto=format&fit=crop',
  }
];

export default function DealsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Tag className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Special Offers & Deals</h1>
          <p className="text-xl text-gray-600">
            Incredible experiences at unbeatable prices. Book these limited-time offers before they're gone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allDeals.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-none group flex flex-col sm:flex-row bg-white">
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

      </div>
    </div>
  );
}
