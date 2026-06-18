"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import TourCard from "@/components/tours/TourCard";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tour } from "@/lib/api";

type SortOption = "recommended" | "price-asc" | "price-desc" | "duration-asc" | "duration-desc";

export default function ToursClient({ initialTours }: { initialTours: Tour[] }) {
  const searchParams = useSearchParams();

  // Read search from URL params (?q=... or ?search=...)
  const urlQuery = searchParams.get("q") || searchParams.get("search") || "";

  const [search, setSearch] = useState(urlQuery);
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [maxPrice, setMaxPrice] = useState<number>(9999);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync search with URL param changes
  useEffect(() => {
    setSearch(urlQuery);
  }, [urlQuery]);

  // Derived values from actual data
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    initialTours.forEach((t) => {
      if (t.category_name) cats.add(t.category_name);
    });
    return Array.from(cats).sort();
  }, [initialTours]);

  const priceMax = useMemo(() => {
    if (!initialTours.length) return 5000;
    return Math.max(...initialTours.map((t) => t.price_start_per_person || 0), 100);
  }, [initialTours]);

  // Reset maxPrice when data loads
  useEffect(() => {
    setMaxPrice(priceMax);
  }, [priceMax]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  const clearFilters = () => {
    setSearch("");
    setSortBy("recommended");
    setSelectedCategories(new Set());
    setMaxPrice(priceMax);
  };

  const activeFilterCount =
    (search ? 1 : 0) +
    selectedCategories.size +
    (maxPrice < priceMax ? 1 : 0);

  const filteredAndSorted = useMemo(() => {
    let result = initialTours.filter((tour) => {
      const matchSearch =
        !search ||
        tour.title.toLowerCase().includes(search.toLowerCase()) ||
        (tour.tour_code || "").toLowerCase().includes(search.toLowerCase()) ||
        (tour.city_name || "").toLowerCase().includes(search.toLowerCase()) ||
        (tour.country_name || "").toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategories.size === 0 ||
        selectedCategories.has(tour.category_name);

      const matchPrice = (tour.price_start_per_person || 0) <= maxPrice;

      return matchSearch && matchCategory && matchPrice;
    });

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => (a.price_start_per_person || 0) - (b.price_start_per_person || 0));
        break;
      case "price-desc":
        result = [...result].sort((a, b) => (b.price_start_per_person || 0) - (a.price_start_per_person || 0));
        break;
      case "duration-asc":
        result = [...result].sort((a, b) => (a.number_of_days || 1) - (b.number_of_days || 1));
        break;
      case "duration-desc":
        result = [...result].sort((a, b) => (b.number_of_days || 1) - (a.number_of_days || 1));
        break;
      default:
        break;
    }

    return result;
  }, [initialTours, search, selectedCategories, maxPrice, sortBy]);

  const FilterPanel = () => (
    <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-white/5 space-y-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg text-[#0F172A] dark:text-white">
          <SlidersHorizontal size={20} className="text-[#0EA5E9]" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-[#0EA5E9] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-bold text-[#0EA5E9] hover:text-[#0284C7] flex items-center gap-1"
          >
            <X size={14} /> Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Search</label>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tours, destinations…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0B1120] outline-none focus:border-[#0EA5E9] transition-colors text-sm"
          />
          {search && (
            <button type="button" aria-label="Clear search" onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Max Price</label>
          <span className="text-sm font-bold text-[#0EA5E9]">${maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          aria-label="Maximum price filter"
          min={0}
          max={priceMax}
          step={50}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#0EA5E9] cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>$0</span>
          <span>${priceMax.toLocaleString()}+</span>
        </div>
      </div>

      {/* Categories */}
      {allCategories.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</label>
          <div className="space-y-2">
            {allCategories.map((cat) => (
              <label key={cat} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-[#0EA5E9] transition-colors">
                <input
                  type="checkbox"
                  checked={selectedCategories.has(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="rounded accent-[#0EA5E9] w-4 h-4 cursor-pointer"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] pb-20">
      {/* Header Banner */}
      <div className="bg-[#0F172A] text-white pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Find Your Next Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            Browse {initialTours.length} handpicked tours and create memories that last a lifetime.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl pt-8">
        {/* Mobile filter toggle */}
        <button
          type="button"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="lg:hidden flex items-center gap-2 mb-5 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-white/10 px-4 py-2.5 rounded-xl font-semibold text-sm text-[#0F172A] dark:text-white shadow-sm"
        >
          <SlidersHorizontal size={16} className="text-[#0EA5E9]" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-[#0EA5E9] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
          <ChevronDown size={16} className={`ml-auto transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
        </button>

        {/* Mobile filters */}
        {showMobileFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 lg:hidden"
          >
            <FilterPanel />
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28">
              <FilterPanel />
            </div>
          </aside>

          {/* Tour Grid */}
          <div className="flex-1">
            {/* Sort + count row */}
            <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  {filteredAndSorted.length}{" "}
                  <span className="text-gray-500 dark:text-gray-400 font-normal">
                    {filteredAndSorted.length === 1 ? "tour" : "tours"} found
                  </span>
                </p>
                {/* Active filter pills */}
                {(selectedCategories.size > 0 || search) && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {search && (
                      <span className="inline-flex items-center gap-1 bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold px-3 py-1 rounded-full">
                        "{search}"
                        <button type="button" aria-label={`Remove search filter: ${search}`} onClick={() => setSearch("")}><X size={12} /></button>
                      </span>
                    )}
                    {Array.from(selectedCategories).map((cat) => (
                      <span key={cat} className="inline-flex items-center gap-1 bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold px-3 py-1 rounded-full">
                        {cat}
                        <button type="button" aria-label={`Remove category filter: ${cat}`} onClick={() => toggleCategory(cat)}><X size={12} /></button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <select
                aria-label="Sort tours"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2 bg-white dark:bg-[#1E293B] outline-none text-sm font-medium focus:border-[#0EA5E9] transition-colors cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration-asc">Duration: Short to Long</option>
                <option value="duration-desc">Duration: Long to Short</option>
              </select>
            </div>

            {filteredAndSorted.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSorted.map((tour, index) => (
                  <TourCard key={tour.id} tour={tour} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1E293B] rounded-3xl p-14 text-center border border-gray-100 dark:border-white/5"
              >
                <div className="w-16 h-16 bg-gray-50 dark:bg-[#0B1120] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0F172A] dark:text-white">No tours found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  We couldn't find tours matching your current filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <X size={16} /> Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
