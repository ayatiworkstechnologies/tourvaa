"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search, User, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4 dark:bg-[#0B1120]/80 dark:border-b dark:border-white/10"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            T
          </div>
          <span className={cn("text-2xl font-bold tracking-tight", isScrolled ? "text-[#0F172A] dark:text-white" : "text-white")}>
            Tourvaa
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Destinations", href: "/destinations" },
            { name: "Tours", href: "/tours" },
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium hover:opacity-70 transition-opacity",
                isScrolled ? "text-[#64748B] hover:text-[#0EA5E9] dark:text-gray-300" : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className={cn("p-2 rounded-full hover:bg-black/5 transition-colors", isScrolled ? "text-[#0F172A] dark:text-white" : "text-white")}>
            <Search size={20} />
          </button>
          <Link
            href="/login"
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow-md",
              isScrolled
                ? "bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-white dark:text-black"
                : "bg-white text-[#0F172A] hover:bg-gray-100"
            )}
          >
            <User size={16} />
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-black dark:text-white" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-[#0B1120] shadow-xl border-b dark:border-white/10 md:hidden flex flex-col p-6 gap-4"
        >
          {["Destinations", "Tours", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-semibold text-[#0F172A] dark:text-white hover:text-[#0EA5E9]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <hr className="my-2 border-gray-100 dark:border-white/10" />
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 bg-[#0EA5E9] text-white py-3 rounded-xl font-bold"
          >
            Sign In
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
