"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200"
          >
            Have a question about a tour? Need a custom itinerary? Our team of travel experts is here to help you plan the perfect getaway.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <div className="bg-white dark:bg-[#1E293B] p-8 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-white/5">
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Our Headquarters</h4>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      123 Explorer's Way, Suite 400<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#DCFCE7] dark:bg-[#22C55E]/20 text-[#22C55E] rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Call Us</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      +1 (800) 123-TOUR<br />
                      Mon-Fri, 9am - 6pm PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FEF3C7] dark:bg-[#F59E0B]/20 text-[#F59E0B] rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Email Us</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      hello@tourvaa.com<br />
                      support@tourvaa.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-2/3 bg-white dark:bg-[#1E293B] p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-white/5"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2">Send us a message</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">We'll get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <select className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all">
                  <option>General Inquiry</option>
                  <option>Custom Tour Request</option>
                  <option>Support/Billing</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="flex items-center justify-center gap-2 w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-[#0EA5E9]/20">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
