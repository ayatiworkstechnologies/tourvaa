"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Star, Clock, CheckCircle2, Navigation, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/lib/api";

export default function TourDetailsClient({ tour }: { tour: Tour }) {
  const defaultImage = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] pb-24">
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={tour.banner_image || defaultImage}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 w-full p-6 z-10 pt-28">
          <div className="container mx-auto px-6 max-w-7xl">
            <Link href="/tours" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
              <ArrowLeft size={18} /> Back to Tours
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-12 z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 text-[#0EA5E9] font-bold mb-4 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                <MapPin size={16} /> {tour.city_name}, {tour.country_name}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {tour.title}
              </h1>
              {tour.subtitle && (
                <p className="text-xl text-gray-300 font-medium mb-8">
                  {tour.subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 max-w-7xl -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Details */}
          <div className="flex-1 space-y-8">
            {/* Quick Stats Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-xl shadow-black/5 border border-gray-100 dark:border-white/5 flex flex-wrap gap-6 items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 rounded-full flex items-center justify-center text-[#0EA5E9]">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Duration</p>
                  <p className="font-bold text-[#0F172A] dark:text-white">
                    {tour.number_of_days || 1} Days {tour.number_of_hours ? `/ ${tour.number_of_hours} Hours` : ""}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FEF3C7] dark:bg-[#F59E0B]/20 rounded-full flex items-center justify-center text-[#F59E0B]">
                  <Star size={24} className="fill-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Rating</p>
                  <p className="font-bold text-[#0F172A] dark:text-white">
                    {tour.rating || "5.0"} <span className="text-gray-400 font-normal text-sm">({tour.reviews || 0} reviews)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#DCFCE7] dark:bg-[#22C55E]/20 rounded-full flex items-center justify-center text-[#22C55E]">
                  <Navigation size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Tour Code</p>
                  <p className="font-bold text-[#0F172A] dark:text-white uppercase">
                    {tour.tour_code}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Overview Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-white/5"
            >
              <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Overview</h2>
              {tour.short_description && (
                <p className="text-lg text-[#0F172A] dark:text-gray-200 font-medium mb-6 leading-relaxed">
                  {tour.short_description}
                </p>
              )}
              {tour.long_description ? (
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: tour.long_description }}
                />
              ) : (
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Experience the best of {tour.city_name} with this carefully curated tour. 
                  Enjoy spectacular views, immersive cultural experiences, and top-tier accommodations.
                  Your journey starts here.
                </p>
              )}

              {/* Key Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-6 bg-gray-50 dark:bg-[#0B1120] rounded-2xl">
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white mb-2 text-sm uppercase tracking-wider text-gray-500">Start Location</h4>
                  <p className="font-medium text-gray-700 dark:text-gray-300">{tour.start_location || tour.city_name}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white mb-2 text-sm uppercase tracking-wider text-gray-500">Finish Location</h4>
                  <p className="font-medium text-gray-700 dark:text-gray-300">{tour.finish_location || tour.city_name}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white mb-2 text-sm uppercase tracking-wider text-gray-500">Category</h4>
                  <p className="font-medium text-gray-700 dark:text-gray-300">{tour.category_name}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sticky Booking Widget */}
          <aside className="w-full lg:w-96 shrink-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 shadow-xl shadow-black/5 border border-gray-100 dark:border-white/5 sticky top-28"
            >
              <div className="mb-6">
                <span className="text-gray-500 dark:text-gray-400 font-medium block mb-1">Starting from</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-[#0EA5E9]">${tour.price_start_per_person || 0}</span>
                  <span className="text-gray-500 dark:text-gray-400">/ person</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-md shadow-[#0EA5E9]/20">
                  Book This Tour
                </button>
                <button className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] hover:bg-gray-100 dark:hover:bg-black text-[#0F172A] dark:text-white border border-gray-200 dark:border-white/10 font-bold text-lg py-4 rounded-xl transition-colors">
                  Inquire Now
                </button>
              </div>

              <div className="border-t border-gray-100 dark:border-white/10 pt-6 space-y-4">
                <h4 className="font-bold text-[#0F172A] dark:text-white mb-4">Why book with us?</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Free cancellation up to 24 hours before the tour starts.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">24/7 customer support available in multiple languages.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Best price guarantee. We match any lower price found online.</p>
                </div>
              </div>
            </motion.div>
          </aside>

        </div>
      </div>
    </div>
  );
}
