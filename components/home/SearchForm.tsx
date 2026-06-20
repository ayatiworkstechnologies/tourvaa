"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SearchForm() {
  const router = useRouter();
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (country) params.append('country', country);
    if (date) params.append('date', date);
    if (duration) params.append('duration', duration);
    if (adults) params.append('adults', adults);
    if (children) params.append('children', children);
    
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mx-auto max-w-5xl mt-[-80px] relative z-20">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Destination */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            Where to?
          </label>
          <select 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
            className="h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-3 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="">Any Destination</option>
            <option value="italy">Italy</option>
            <option value="japan">Japan</option>
            <option value="switzerland">Switzerland</option>
            <option value="egypt">Egypt</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-600" />
            When?
          </label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-3 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Duration */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-gray-700">Duration</label>
          <select 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)}
            className="h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-3 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="">Any Duration</option>
            <option value="day">Day Tours</option>
            <option value="2-6">2 to 6 Days</option>
            <option value="7-10">7 to 10 Days</option>
            <option value="11-14">11 to 14 Days</option>
            <option value="15+">15+ Days</option>
          </select>
        </div>

        {/* Travellers */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-600" />
            Travellers
          </label>
          <div className="flex gap-2">
            <select 
              value={adults} 
              onChange={(e) => setAdults(e.target.value)}
              className="h-12 w-1/2 rounded-md border border-gray-200 bg-gray-50 px-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5+">5+ Adults</option>
            </select>
            <select 
              value={children} 
              onChange={(e) => setChildren(e.target.value)}
              className="h-12 w-1/2 rounded-md border border-gray-200 bg-gray-50 px-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="0">0 Child</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3 Children</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col justify-end h-full">
          <Button type="submit" size="lg" className="w-full h-12 gap-2 text-lg">
            <Search className="h-5 w-5" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
