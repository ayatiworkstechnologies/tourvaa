"use client";

import { motion } from "framer-motion";
import {
  Search, MapPin, ChevronRight, Star, Shield, Clock, Award,
  ArrowRight, CheckCircle2, Globe2, Users, Compass, BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TourCard from "@/components/tours/TourCard";
import { Tour } from "@/lib/api";

const destinations = [
  { name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop", tours: 42 },
  { name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", tours: 56 },
  { name: "Swiss Alps", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop", tours: 28 },
  { name: "Kyoto, Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop", tours: 35 },
];

const stats = [
  { value: "10k+", label: "Happy Travellers", icon: Users },
  { value: "150+", label: "Destinations", icon: Globe2 },
  { value: "500+", label: "Curated Tours", icon: Compass },
  { value: "4.9", label: "Average Rating", icon: Star },
];

const steps = [
  {
    step: "01",
    title: "Choose Your Destination",
    description: "Browse our curated collection of tours across 150+ destinations worldwide. Filter by category, duration, or budget.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Customise & Book",
    description: "Select your travel dates, group size, and any add-ons. Secure your spot with a flexible deposit.",
    icon: CheckCircle2,
  },
  {
    step: "03",
    title: "Explore & Enjoy",
    description: "Pack your bags. Our local expert guides take care of everything from the moment you arrive.",
    icon: Award,
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Our Bali tour was absolutely flawless. The local guide knew every hidden waterfall and secret temple. I've travelled with many companies but Tourvaa is on another level.",
    tour: "Bali Hidden Paradise",
  },
  {
    name: "James Okafor",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Booked the Swiss Alps 7-day trek and it was the highlight of my year. Every detail — accommodation, transport, meals — was handled perfectly. Already planning my next trip.",
    tour: "Swiss Alps Adventure",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "From booking to the final day, the experience was seamless. The Kyoto cultural tour exceeded every expectation. The small group size made it feel so personal.",
    tour: "Kyoto Cultural Immersion",
  },
];

const trustBadges = [
  { icon: Shield, label: "Safe & Secure Payments" },
  { icon: Clock, label: "Free Cancellation 24h" },
  { icon: BadgeCheck, label: "Verified Local Guides" },
  { icon: Award, label: "Award-Winning Service" },
];

export default function HomePage({ popularTours }: { popularTours: Tour[] }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  function handleSearch() {
    const q = searchQuery.trim();
    router.push(q ? `/tours?q=${encodeURIComponent(q)}` : "/tours");
  }

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setNewsletterDone(true);
      setEmail("");
    }
  }

  return (
    <div className="w-full">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            <BadgeCheck size={16} className="text-[#0EA5E9]" /> Trusted by 10,000+ travellers worldwide
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
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
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover carefully curated tours, breathtaking destinations, and exclusive experiences tailored just for you.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-2.5 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch gap-2 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 px-4 py-2 flex-1">
              <Search className="text-[#0EA5E9] shrink-0" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search destination or tour name…"
                className="w-full bg-transparent outline-none text-[#0F172A] placeholder-gray-400 text-base"
              />
            </div>
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-95 text-white font-bold px-8 py-3.5 rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Search size={18} /> Search
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm text-white/70"
          >
            <span>Popular:</span>
            {["Bali", "Swiss Alps", "Kyoto", "Santorini"].map((dest) => (
              <button
                key={dest}
                onClick={() => router.push(`/tours?q=${encodeURIComponent(dest)}`)}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 px-3 py-1 rounded-full transition-colors backdrop-blur-sm"
              >
                {dest}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────────────── */}
      <section className="bg-[#0F172A] py-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <Icon size={22} className="text-[#0EA5E9]" />
                  </div>
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400 font-medium mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Destinations ──────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest mb-2">Explore the Globe</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white">Trending Destinations</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg">The most sought-after locations our travellers love right now.</p>
            </div>
            <Link href="/destinations" className="hidden md:flex items-center gap-1 font-semibold text-[#0EA5E9] hover:text-[#0284C7] transition-colors">
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
              >
                <Link
                  href={`/tours?q=${encodeURIComponent(dest.name.split(",")[0])}`}
                  className="group relative block h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
                >
                  <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">{dest.name}</h3>
                    <p className="text-sm text-gray-300 font-medium">{dest.tours} Tours</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/destinations" className="inline-flex items-center gap-1 font-semibold text-[#0EA5E9]">
              View all destinations <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">How Tourvaa Works</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">From discovery to adventure in three easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] mb-6 relative">
                    <Icon size={32} />
                    <span className="absolute -top-3 -right-3 w-7 h-7 bg-[#0EA5E9] text-white text-xs font-black rounded-full flex items-center justify-center">
                      {step.step.replace("0", "")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Popular Tours ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest mb-3">Editor's Choice</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">Handpicked Tours</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Unforgettable journeys, tailored to perfection by our travel experts.</p>
          </div>

          {popularTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularTours.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500 dark:text-gray-400">
              No tours available right now — check back soon!
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#0EA5E9]/20"
            >
              Explore All Tours <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest mb-3">Real Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">What Our Travellers Say</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Don't take our word for it — hear from those who have been there.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-[#1E293B] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 dark:border-white/10 pt-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A] dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.location} · {testimonial.tour}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Badges ───────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 dark:bg-[#0B1120] border-y border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-[#0F172A] dark:text-gray-300">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter / CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get Exclusive Travel Deals
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join 10,000+ travellers who receive early access to new tours, flash sales, and insider travel tips.
            </p>

            {newsletterDone ? (
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-6 inline-flex items-center gap-3 text-white font-bold text-lg">
                <CheckCircle2 size={24} /> You're on the list! We'll be in touch.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-4 rounded-xl bg-white text-[#0F172A] font-medium placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold px-7 py-4 rounded-xl transition-colors whitespace-nowrap flex items-center gap-2"
                >
                  Subscribe <ArrowRight size={18} />
                </button>
              </form>
            )}
            <p className="text-white/60 text-sm mt-4">No spam, ever. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
