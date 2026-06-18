"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TourCard from "@/components/tours/TourCard";
import { Tour } from "@/lib/api";

const destinations = [
  { name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop", tours: 42 },
  { name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", tours: 56 },
  { name: "Swiss Alps", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop", tours: 28 },
  { name: "Kyoto, Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop", tours: 35 },
];

export default function HomePage({ popularTours }: { popularTours: Tour[] }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Extraordinary <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
              Adventures Await
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          >
            Discover carefully curated tours, breathtaking destinations, and exclusive experiences tailored just for you.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-3 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-3 max-w-4xl mx-auto"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-100">
              <MapPin className="text-[#0EA5E9]" size={20} />
              <input type="text" placeholder="Where are you going?" className="w-full bg-transparent outline-none text-[#0F172A] placeholder-gray-400" />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-100">
              <Calendar className="text-[#0EA5E9]" size={20} />
              <input type="text" placeholder="Dates" className="w-full bg-transparent outline-none text-[#0F172A] placeholder-gray-400" />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
              <Users className="text-[#0EA5E9]" size={20} />
              <input type="text" placeholder="Guests" className="w-full bg-transparent outline-none text-[#0F172A] placeholder-gray-400" />
            </div>
            <button className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] text-white p-4 rounded-2xl md:rounded-full transition-colors flex items-center justify-center">
              <Search size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A] dark:text-white">Trending Destinations</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl">Explore the most sought-after locations for your next getaway.</p>
            </div>
            <Link href="/destinations" className="hidden md:flex items-center gap-1 font-semibold text-[#0EA5E9] hover:text-[#0284C7]">
              View all <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                  <p className="text-sm text-gray-300 font-medium">{dest.tours} Tours</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A] dark:text-white">Handpicked Tours</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Unforgettable journeys tailored to perfection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.length > 0 ? (
              popularTours.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} />
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500 py-12">
                No tours available right now. Check back soon!
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/tours" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#0EA5E9] text-[#0EA5E9] font-bold rounded-xl hover:bg-[#0EA5E9] hover:text-white transition-colors">
              Explore All Tours <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
