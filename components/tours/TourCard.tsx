import Link from "next/link";
import Image from "next/image";
import { Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Tour } from "@/lib/api";

type Props = {
  tour: Tour;
  index?: number;
};

export default function TourCard({ tour, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-white/5 group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={tour.banner_image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"} 
          alt={tour.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#0F172A] flex items-center gap-1 shadow-sm">
          <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" /> {tour.rating || "5.0"}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
          <span className="flex items-center gap-1"><Calendar size={16} /> {tour.number_of_days || 1} Days</span>
          <span>{tour.reviews || 0} reviews</span>
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-4 line-clamp-2 min-h-[56px] group-hover:text-[#0EA5E9] transition-colors">
          {tour.title}
        </h3>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
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
  );
}
