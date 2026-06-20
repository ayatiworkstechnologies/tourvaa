"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search, User, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "Destinations", href: "/destinations" },
  { name: "Tours", href: "/tours" },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = searchQuery.trim();
    setShowSearch(false);
    setSearchQuery("");
    router.push(q ? `/tours?q=${encodeURIComponent(q)}` : "/tours");
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            T
          </div>
          <span className={cn("text-2xl font-bold tracking-tight", isScrolled ? "text-text dark:text-white" : "text-white")}>
            Tourvaa
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all pb-0.5",
                  isScrolled
                    ? active
                      ? "text-primary dark:text-[#38BDF8]"
                      : "text-text-muted hover:text-primary dark:text-gray-300 dark:hover:text-[#38BDF8]"
                    : active
                      ? "text-white font-bold"
                      : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {showSearch ? (
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tours…"
                className="border border-gray-200 dark:border-white/20 bg-white/90 dark:bg-[#1E293B] rounded-full px-4 py-1.5 text-sm outline-none focus:border-primary w-44 text-text dark:text-white"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={() => { setShowSearch(false); setSearchQuery(""); }}
                className={cn("p-2 rounded-full hover:bg-black/5 transition-colors", isScrolled ? "text-text dark:text-white" : "text-white")}
              >
                <X size={18} />
              </button>
            </form>
          ) : (
            <button
              type="button"
              aria-label="Open search"
              onClick={() => setShowSearch(true)}
              className={cn("p-2 rounded-full hover:bg-black/5 transition-colors", isScrolled ? "text-text dark:text-white" : "text-white")}
            >
              <Search size={20} />
            </button>
          )}
          <Link
            href="/login"
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow-md",
              isScrolled
                ? "bg-text text-white hover:bg-[#1E293B] dark:bg-white dark:text-black"
                : "bg-white text-text hover:bg-gray-100"
            )}
          >
            <User size={16} />
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-semibold transition-colors",
                  active
                    ? "text-primary"
                    : "text-text dark:text-white hover:text-primary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <hr className="my-2 border-gray-100 dark:border-white/10" />
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <User size={18} /> Sign In
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
