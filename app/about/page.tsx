"use client";

import { motion } from "framer-motion";
import { Globe2, Users, MapPin, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] pb-24 pt-28">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] dark:text-white leading-tight">
              Redefining the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
                Way You Travel
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              At Tourvaa, we believe that travel is more than just visiting a place—it's about the connections you make, the stories you gather, and the memories that last a lifetime. We handpick every experience to ensure your journey is nothing short of extraordinary.
            </p>
            <div className="pt-4 flex gap-4">
              <Link href="/tours" className="px-8 py-4 bg-[#0EA5E9] text-white font-bold rounded-full hover:bg-[#0284C7] transition-colors shadow-lg shadow-[#0EA5E9]/20">
                Explore Tours
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gray-50 dark:bg-[#1E293B] text-[#0F172A] dark:text-white border border-gray-200 dark:border-white/10 font-bold rounded-full hover:bg-gray-100 dark:hover:bg-black transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" 
                alt="Travelers exploring" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Floating Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-[#1E293B] p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 flex gap-8"
            >
              <div>
                <p className="text-4xl font-black text-[#0EA5E9]">10k+</p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Happy Travelers</p>
              </div>
              <div className="w-px bg-gray-200 dark:bg-white/10" />
              <div>
                <p className="text-4xl font-black text-[#0EA5E9]">4.9</p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Average Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-32 bg-gray-50 dark:bg-[#0B1120] py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">Why Choose Tourvaa</h2>
            <p className="text-gray-500 dark:text-gray-400">We sweat the details so you don't have to. Here's what makes our tours stand out from the rest.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe2, title: "Global Reach", desc: "Access to over 50+ countries with exclusive local partnerships." },
              { icon: Award, title: "Premium Quality", desc: "Handpicked accommodations and vetted luxury transport." },
              { icon: Users, title: "Small Groups", desc: "Intimate group sizes to ensure a personalized experience." },
              { icon: MapPin, title: "Local Experts", desc: "Guided by passionate locals who know the hidden gems." }
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#1E293B] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
