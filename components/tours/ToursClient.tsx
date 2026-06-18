"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import TourCard from "@/components/tours/TourCard";
import { useState } from "react";
import { Tour } from "@/lib/api";

export default function ToursClient({ initialTours }: { initialTours: Tour[] }) {
  const [search, setSearch] = useState("");

  const filteredTours = initialTours.filter(tour => 
    tour.title.toLowerCase().includes(search.toLowerCase()) || 
    tour.tour_code?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] pt-28 pb-20">
      
      {/* Header */}
      <div className="bg-[#0F172A] text-white py-16 mb-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Find Your Next Adventure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            Browse our handpicked selection of premium tours and create memories that will last a lifetime.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-white/5 sticky top-28">
              <div className="flex items-center gap-2 font-bold text-lg mb-6 text-[#0F172A] dark:text-white">
                <SlidersHorizontal size={20} className="text-[#0EA5E9]" />
                Filters
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Search</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tours..." 
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0B1120] outline-none focus:border-[#0EA5E9] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Price Range</label>
                <input type="range" className="w-full accent-[#0EA5E9]" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$0</span>
                  <span>$5000+</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</label>
                <div className="space-y-2">
                  {["Adventure", "Cultural", "Relaxation", "Wildlife"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0EA5E9] focus:ring-[#0EA5E9]" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Tour Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-500 font-medium">Showing {filteredTours.length} tours</p>
              <select className="border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2 bg-white dark:bg-[#1E293B] outline-none text-sm font-medium focus:border-[#0EA5E9]">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Short to Long</option>
              </select>
            </div>

            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTours.map((tour, index) => (
                  <TourCard key={tour.id} tour={tour} index={index} />
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-12 text-center border border-gray-100 dark:border-white/5">
                <div className="w-16 h-16 bg-gray-50 dark:bg-[#0B1120] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0F172A] dark:text-white">No tours found</h3>
                <p className="text-gray-500">We couldn't find any tours matching your search criteria.</p>
                <button 
                  onClick={() => setSearch("")}
                  className="mt-6 text-[#0EA5E9] font-bold hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
