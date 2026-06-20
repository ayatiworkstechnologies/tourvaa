"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bot, HelpCircle } from "lucide-react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  all: "All",
  general: "General",
  booking: "Booking",
  payment: "Payment",
  policies: "Policies",
  destinations: "Destinations",
  other: "Other",
};

export default function FAQClient({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filtered =
    activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <div className="relative bg-linear-to-br from-text via-primary/20 to-text pt-32 pb-20 px-4 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--color-primary),transparent)]"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <HelpCircle size={14} />
            Help Centre
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Frequently Asked
            <br />
            <span className="text-primary">Questions</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Find quick answers below, or ask our AI assistant for anything else.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Category filter */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenId(null); }}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-gray-100 dark:bg-[#1E293B] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#334155]"
                }`}
              >
                {CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>
        )}

        {/* Accordion */}
        <div className="space-y-3">
          <AnimatePresence>
            {filtered.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "border-primary/40 dark:border-primary/30 bg-sky-50/50 dark:bg-sky-900/10 shadow-sm"
                      : "border-gray-100 dark:border-white/10 bg-white dark:bg-[#1E293B] hover:border-gray-200 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span
                      className={`font-semibold text-sm md:text-base leading-snug ${
                        isOpen ? "text-primary" : "text-(--foreground)"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-[#334155] text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <ChevronDown size={15} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* AI CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl bg-linear-to-br from-primary/10 to-indigo-500/10 dark:from-primary/5 dark:to-indigo-500/5 border border-primary/20 p-8 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Bot size={24} className="text-primary" />
          </div>
          <h3 className="font-bold text-(--foreground) text-lg mb-2">
            Still have questions?
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 max-w-sm mx-auto">
            Our AI assistant is available 24/7 to answer any questions about tours,
            destinations, visas, or bookings.
          </p>
          <p className="text-primary font-semibold text-sm">
            👇 Click the chat button in the bottom-right corner
          </p>
        </motion.div>
      </div>
    </div>
  );
}
