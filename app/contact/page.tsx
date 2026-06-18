"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setError(null);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

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
            Have a question about a tour? Need a custom itinerary? Our team of travel experts is here to help.
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
                      Mon-Fri, 9am – 6pm PST
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
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-[#DCFCE7] dark:bg-[#22C55E]/20 text-[#22C55E] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "" }); }}
                  className="mt-8 px-6 py-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2">Send us a message</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">We'll get back to you within 24 hours.</p>

                {error && (
                  <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 text-sm font-medium">
                    {error}
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Custom Tour Request</option>
                      <option>Support / Billing</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 w-full bg-[#0EA5E9] hover:bg-[#0284C7] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-[#0EA5E9]/20"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
