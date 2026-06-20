"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    rating: 5,
    message: 'An absolutely incredible experience in Japan. The tour guide was exceptionally knowledgeable, and the itinerary was perfectly balanced between sightseeing and free time.',
    tour: 'Japan Discovery',
    date: 'March 2026',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    message: 'Booking through Tourvaa was seamless. The Switzerland trip exceeded all our expectations. Highly recommend the optional Alpine train extension!',
    tour: 'Swiss Alps Adventure',
    date: 'February 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emma Roberts',
    rating: 4,
    message: 'Great value for money. The accommodations in Italy were beautiful and centrally located. The wine tasting experience was the highlight of our trip.',
    tour: 'Taste of Italy',
    date: 'January 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'David Wilson',
    rating: 5,
    message: 'Unforgettable memories made in Egypt. The logistics were handled perfectly so we could just relax and enjoy the incredible history.',
    tour: 'Egypt & The Nile',
    date: 'December 2025',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
  },
];

export function CustomerReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Travellers Say</h2>
            <p className="text-gray-600 text-lg">Read reviews from real customers who booked their dream vacations with Tourvaa.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button 
              onClick={scrollPrev} 
              className="p-3 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext} 
              className="p-3 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-4">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
                <Card className="h-full bg-gray-50 border-none shadow-sm relative pt-8">
                  <div className="absolute top-6 right-6 text-blue-100">
                    <Quote className="h-12 w-12 fill-current" />
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-8 min-h-[100px] leading-relaxed">"{review.message}"</p>
                    <div className="flex items-center gap-4 mt-auto border-t border-gray-200 pt-6">
                      <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full object-cover shadow-sm" />
                      <div>
                        <p className="font-bold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.tour} &bull; {review.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
