import Link from "next/link";
import Image from "next/image";
import { Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Tour } from "@/lib/api";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Clock, MapPin, Calendar, Star } from "lucide-react";

type Props = {
  tour: Tour;
  index?: number;
};

export default function TourCard({ tour, index = 0 }: Props) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-white/5 group relative flex flex-col h-full"
      >
        <div className="relative h-64 overflow-hidden shrink-0">
          <Image 
            src={tour.banner_image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"} 
            alt={tour.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#0F172A] flex items-center gap-1 shadow-sm">
            <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" /> {tour.rating || "5.0"}
          </div>
          
          {/* Quick View Button overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              onClick={(e) => { e.preventDefault(); setIsQuickViewOpen(true); }}
              className="bg-white text-[#0F172A] font-bold px-6 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all shadow-lg hover:bg-[#0EA5E9] hover:text-white"
            >
              Quick View
            </button>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
            <span className="flex items-center gap-1"><Calendar size={16} /> {tour.number_of_days || 1} Days</span>
            <span>{tour.reviews || 0} reviews</span>
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-4 line-clamp-2 min-h-[56px] group-hover:text-[#0EA5E9] transition-colors">
            {tour.title}
          </h3>
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
            <div>
              <span className="text-sm text-gray-500 block">From</span>
              <span className="text-2xl font-bold text-[#0EA5E9]">${tour.price_start_per_person || 0}</span>
            </div>
            <Link href={`/tours/${tour.id}`} className="bg-[#F8FAFC] dark:bg-[#0B1120] text-[#0F172A] dark:text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#0EA5E9] hover:text-white transition-colors">
              View Tour
            </Link>
          </div>
        </div>
      </motion.div>

      <Modal 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)}
        title={tour.title}
        size="lg"
      >
        <div className="space-y-6">
          <div className="relative h-64 w-full rounded-2xl overflow-hidden">
            <Image 
              src={tour.banner_image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"} 
              alt={tour.title} 
              fill 
              className="object-cover" 
            />
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1.5"><MapPin size={18} className="text-[#0EA5E9]" /> {tour.city_name}, {tour.country_name}</div>
            <div className="flex items-center gap-1.5"><Clock size={18} className="text-[#0EA5E9]" /> {tour.number_of_days || 1} Days</div>
            <div className="flex items-center gap-1.5"><Star size={18} className="text-[#F59E0B]" /> {tour.rating || "5.0"} ({tour.reviews || 0} reviews)</div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#0F172A] dark:text-white mb-2 text-lg">Overview</h4>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
              {tour.short_description || `Experience the best of ${tour.city_name} with this carefully curated tour. Enjoy spectacular views, immersive cultural experiences, and top-tier accommodations. Your journey starts here.`}
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/10">
            <div>
              <span className="text-sm text-gray-500 block">Starting Price</span>
              <span className="text-3xl font-extrabold text-[#0EA5E9]">${tour.price_start_per_person || 0}</span>
            </div>
            <Link href={`/tours/${tour.id}`} onClick={() => setIsQuickViewOpen(false)}>
              <button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md shadow-[#0EA5E9]/20">
                Full Details
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
