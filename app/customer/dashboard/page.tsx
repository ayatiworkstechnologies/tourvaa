"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Map, 
  User, 
  FileText, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Download
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'My Bookings', icon: Map },
  { id: 'invoices', label: 'Invoices', icon: FileText },
  { id: 'profile', label: 'Profile Settings', icon: User },
];

// Mock Data
const UPCOMING_BOOKING = {
  id: "BKG-8472",
  title: "Magical Bali Experience",
  date: "Oct 15, 2026",
  status: "Confirmed",
  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
  guests: 2,
  amount: 2857.80
};

const PAST_BOOKINGS = [
  { id: "BKG-3921", title: "Paris City Break", date: "Jun 10, 2025", status: "Completed", amount: 1450.00 },
  { id: "BKG-1847", title: "Tokyo Highlights", date: "Nov 05, 2024", status: "Completed", amount: 3200.00 },
];

export default function CustomerDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-white/5 sticky top-28">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#0EA5E9] text-white flex items-center justify-center font-bold text-xl">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] dark:text-white">John Doe</h3>
                  <p className="text-xs text-gray-500">Customer</p>
                </div>
              </div>

              <nav className="space-y-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                      activeTab === tab.id 
                        ? 'bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9]' 
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/5">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10">
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="text-2xl font-bold text-[#0F172A] dark:text-white">
                {TABS.find(t => t.id === activeTab)?.label}
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1E293B] text-sm focus:outline-none focus:border-[#0EA5E9] dark:text-white"
                  />
                </div>
                <button className="w-10 h-10 rounded-full bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0EA5E9] transition-colors">
                  <Bell size={18} />
                </button>
              </div>
            </div>

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center"><Map size={24} /></div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Total Trips</p>
                          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">3</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={24} /></div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Upcoming</p>
                          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">1</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center"><FileText size={24} /></div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Reviews Left</p>
                          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">2</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Trip */}
                <div>
                  <h2 className="text-lg font-bold text-[#0F172A] dark:text-white mb-4">Your Next Adventure</h2>
                  <div className="bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 flex flex-col md:flex-row group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="relative h-48 md:h-auto md:w-64 shrink-0">
                      <Image src={UPCOMING_BOOKING.image} alt={UPCOMING_BOOKING.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">{UPCOMING_BOOKING.status}</span>
                          <span className="text-sm text-gray-500">{UPCOMING_BOOKING.id}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-4 group-hover:text-[#0EA5E9] transition-colors">{UPCOMING_BOOKING.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1.5"><Calendar size={16} className="text-[#0EA5E9]" /> {UPCOMING_BOOKING.date}</span>
                          <span className="flex items-center gap-1.5"><User size={16} className="text-[#0EA5E9]" /> {UPCOMING_BOOKING.guests} Guests</span>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                        <span className="font-bold text-[#0F172A] dark:text-white">${UPCOMING_BOOKING.amount.toLocaleString()}</span>
                        <span className="text-[#0EA5E9] font-medium flex items-center gap-1 text-sm">View Details <ChevronRight size={16} /></span>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* BOOKINGS TAB */}
            {activeTab === 'bookings' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                  <CardHeader>
                    <CardTitle>Booking History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
                        <thead className="bg-gray-50 dark:bg-[#0B1120] text-gray-700 dark:text-gray-300 font-semibold uppercase text-xs">
                          <tr>
                            <th className="px-4 py-3 rounded-l-lg">Booking ID</th>
                            <th className="px-4 py-3">Tour</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 rounded-r-lg text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                          <tr>
                            <td className="px-4 py-4 font-medium text-[#0F172A] dark:text-white">{UPCOMING_BOOKING.id}</td>
                            <td className="px-4 py-4 font-medium">{UPCOMING_BOOKING.title}</td>
                            <td className="px-4 py-4">{UPCOMING_BOOKING.date}</td>
                            <td className="px-4 py-4"><span className="text-xs font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{UPCOMING_BOOKING.status}</span></td>
                            <td className="px-4 py-4 text-right"><Button variant="outline" size="sm">Manage</Button></td>
                          </tr>
                          {PAST_BOOKINGS.map((booking) => (
                            <tr key={booking.id}>
                              <td className="px-4 py-4 font-medium text-[#0F172A] dark:text-white">{booking.id}</td>
                              <td className="px-4 py-4">{booking.title}</td>
                              <td className="px-4 py-4">{booking.date}</td>
                              <td className="px-4 py-4"><span className="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300">{booking.status}</span></td>
                              <td className="px-4 py-4 text-right"><Button variant="outline" size="sm">View</Button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* INVOICES TAB */}
            {activeTab === 'invoices' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                  <CardHeader>
                    <CardTitle>Invoices & Receipts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[UPCOMING_BOOKING, ...PAST_BOOKINGS].map((booking) => (
                        <div key={booking.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] flex items-center justify-center shrink-0">
                              <FileText size={18} />
                            </div>
                            <div>
                              <h4 className="font-bold text-[#0F172A] dark:text-white">Invoice #{booking.id}</h4>
                              <p className="text-xs text-gray-500">{booking.title} • {booking.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
                            <span className="font-bold text-[#0F172A] dark:text-white">${booking.amount.toLocaleString()}</span>
                            <button className="text-[#0EA5E9] hover:text-[#0284C7] p-2 bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 rounded-lg transition-colors">
                              <Download size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-6 pb-6 border-b border-gray-100 dark:border-white/5">
                      <div className="w-20 h-20 rounded-full bg-[#0EA5E9] text-white flex items-center justify-center font-bold text-3xl">
                        JD
                      </div>
                      <div>
                        <Button variant="outline" className="mb-2">Change Avatar</Button>
                        <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                        <Input defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                        <Input defaultValue="john.doe@example.com" type="email" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                        <Input defaultValue="+1 234 567 8900" />
                      </div>
                    </div>
                    
                    <Button className="w-full sm:w-auto">Save Changes</Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Current Password</label>
                        <Input type="password" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">New Password</label>
                        <Input type="password" placeholder="••••••••" />
                      </div>
                    </div>
                    <Button className="w-full sm:w-auto">Update Password</Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
