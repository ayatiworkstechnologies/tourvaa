"use client";

import { motion } from "framer-motion";
import { Globe2, Users, MapPin, Award, Heart, ShieldCheck, Star, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "10k+", label: "Happy Travellers", icon: Users },
  { value: "150+", label: "Destinations", icon: Globe2 },
  { value: "500+", label: "Curated Tours", icon: MapPin },
  { value: "4.9", label: "Average Rating", icon: Star },
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Would Recommend", icon: Heart },
];

const WHY_US = [
  { icon: Globe2, title: "Global Reach", desc: "Access to 150+ destinations across 50+ countries with exclusive local partnerships built over a decade." },
  { icon: Award, title: "Premium Quality", desc: "Handpicked accommodations and vetted transport — every detail is inspected before it reaches your itinerary." },
  { icon: Users, title: "Small Groups", desc: "We cap group sizes so every traveller gets personal attention, not a crowd experience." },
  { icon: MapPin, title: "Local Experts", desc: "Our guides are passionate locals who know the hidden gems, the best tables, and the untold stories." },
  { icon: ShieldCheck, title: "Safe & Secure", desc: "End-to-end trip protection, 24/7 emergency support, and fully bonded operations for total peace of mind." },
  { icon: Heart, title: "Sustainable Travel", desc: "We work with community-owned businesses and offset carbon on every itinerary we operate." },
];

const TEAM = [
  { name: "Aria Chen", role: "CEO & Co-Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
  { name: "Marcus Webb", role: "Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  { name: "Priya Nair", role: "Lead Experience Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] pb-24 pt-28">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] dark:text-white leading-tight">
              Redefining the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
                Way You Travel
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              At Tourvaa, we believe that travel is more than visiting a place — it's about the connections you make, the stories you gather, and the memories that last a lifetime. Founded in 2016, we've grown from a small team of backpackers to a globally trusted travel platform serving 10,000+ explorers a year.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              We handpick every experience, partner only with vetted local guides, and obsess over the details so you can focus entirely on the journey.
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
                alt="Travellers exploring"
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
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Happy Travellers</p>
              </div>
              <div className="w-px bg-gray-200 dark:bg-white/10" />
              <div>
                <p className="text-4xl font-black text-[#0EA5E9]">4.9★</p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Average Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <div className="mt-32 bg-[#0F172A] py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <Icon size={20} className="text-[#0EA5E9] mx-auto mb-2" />
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <div className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative h-100 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white leading-snug">
                Making Extraordinary Travel Accessible to Everyone
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We started Tourvaa with one belief: world-class travel experiences shouldn't require a travel agent, a huge budget, or a degree in logistics. We built a platform that puts curation, transparency, and local expertise at its heart.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every tour on our platform has been personally reviewed. Every guide has been interviewed. Every supplier has been audited for safety, quality, and fair labour practices. We hold ourselves to the standard we'd want if we were the traveller.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#0B1120] py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest mb-3">Why Tourvaa</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">What Makes Us Different</h2>
            <p className="text-gray-500 dark:text-gray-400">We sweat the details so you don't have to.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
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

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <div className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest mb-3">The People Behind the Magic</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-[#E0F2FE] dark:ring-[#0EA5E9]/20">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{member.name}</h3>
                <p className="text-sm text-[#0EA5E9] font-semibold mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <div className="bg-linear-to-br from-[#0EA5E9] to-[#0284C7] py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of travellers who trust Tourvaa to turn their dream trips into reality.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-white text-[#0EA5E9] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-50 transition-colors shadow-xl"
          >
            Browse All Tours
          </Link>
        </div>
      </div>

    </div>
  );
}
