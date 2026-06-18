"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

const allDestinations = [
  { name: "Santorini, Greece", region: "Europe", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop", tours: 42 },
  { name: "Bali, Indonesia", region: "Asia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", tours: 56 },
  { name: "Swiss Alps", region: "Europe", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop", tours: 28 },
  { name: "Kyoto, Japan", region: "Asia", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop", tours: 35 },
  { name: "Machu Picchu, Peru", region: "South America", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop", tours: 15 },
  { name: "Banff, Canada", region: "North America", image: "https://images.unsplash.com/photo-1544646879-6a34ea3954bb?q=80&w=800&auto=format&fit=crop", tours: 22 },
  { name: "Serengeti, Tanzania", region: "Africa", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop", tours: 18 },
  { name: "Amalfi Coast, Italy", region: "Europe", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop", tours: 45 },
];

export default function DestinationsPage() {
  const [search, setSearch] = useState("");

  const filtered = allDestinations.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
          alt="Destinations Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Explore The World
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by city, country, or region..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-white/95 backdrop-blur-sm text-[#0F172A] outline-none shadow-xl focus:ring-4 focus:ring-[#0EA5E9]/30 transition-all font-medium text-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 max-w-7xl pt-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/tours?search=${encodeURIComponent(dest.name)}`} className="group block relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                    {dest.region}
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#0EA5E9] transition-colors">{dest.name}</h3>
                    <p className="text-sm text-gray-300 font-medium">{dest.tours} Premium Tours</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
