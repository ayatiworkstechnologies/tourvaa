"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Map, 
  Users, 
  Wallet, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Plus,
  TrendingUp,
  BarChart3,
  Calendar,
  CheckCircle2,
  MoreVertical,
  Edit,
  Eye,
  Trash2
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'tours', label: 'Manage Tours', icon: Map },
  { id: 'bookings', label: 'Recent Bookings', icon: Users },
  { id: 'revenue', label: 'Revenue & Payouts', icon: Wallet },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function SupplierDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-white/5 sticky top-28">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                  BO
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] dark:text-white">Bali Outdoors</h3>
                  <p className="text-xs text-emerald-600 font-medium">Tour Supplier</p>
                </div>
              </div>

              <nav className="space-y-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                      activeTab === tab.id 
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' 
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
                    className="pl-9 pr-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1E293B] text-sm focus:outline-none focus:border-emerald-500 dark:text-white"
                  />
                </div>
                <button className="w-10 h-10 rounded-full bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors relative">
                  <Bell size={18} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center"><Wallet size={20} /></div>
                        <span className="text-xs font-bold text-emerald-600 flex items-center bg-emerald-50 px-2 py-1 rounded-full"><TrendingUp size={12} className="mr-1"/> +24%</span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Total Revenue</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">$45,250.00</h3>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center"><Users size={20} /></div>
                        <span className="text-xs font-bold text-emerald-600 flex items-center bg-emerald-50 px-2 py-1 rounded-full"><TrendingUp size={12} className="mr-1"/> +12%</span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Total Bookings</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">128</h3>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center"><Map size={20} /></div>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Active Tours</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">12</h3>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center"><BarChart3 size={20} /></div>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Average Rating</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">4.8 <span className="text-sm font-normal text-gray-400">/ 5.0</span></h3>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Recent Bookings List */}
                  <div className="lg:col-span-2">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">Recent Bookings</h2>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                    <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B] overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
                          <thead className="bg-gray-50 dark:bg-[#0B1120] text-gray-700 dark:text-gray-300 font-semibold uppercase text-xs">
                            <tr>
                              <th className="px-4 py-3">ID</th>
                              <th className="px-4 py-3">Tour</th>
                              <th className="px-4 py-3">Date</th>
                              <th className="px-4 py-3 text-right">Revenue</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                            {[
                              { id: "BKG-1123", tour: "Magical Bali Experience", date: "Oct 15, 2026", amount: 2850 },
                              { id: "BKG-1124", tour: "Ubud Cultural Walk", date: "Oct 16, 2026", amount: 150 },
                              { id: "BKG-1125", tour: "Mount Batur Sunrise", date: "Oct 18, 2026", amount: 450 },
                              { id: "BKG-1126", tour: "Magical Bali Experience", date: "Oct 20, 2026", amount: 1425 },
                            ].map((b, i) => (
                              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-4 py-4 font-medium text-[#0F172A] dark:text-white">{b.id}</td>
                                <td className="px-4 py-4">{b.tour}</td>
                                <td className="px-4 py-4">{b.date}</td>
                                <td className="px-4 py-4 text-right font-bold text-emerald-600">${b.amount.toLocaleString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </div>

                  {/* Upcoming Departures */}
                  <div>
                    <h2 className="text-lg font-bold text-[#0F172A] dark:text-white mb-4">Upcoming Departures</h2>
                    <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-100 dark:divide-white/5">
                          {[
                            { tour: "Magical Bali Experience", date: "Tomorrow, 8:00 AM", pax: 12 },
                            { tour: "Mount Batur Sunrise", date: "Oct 16, 3:00 AM", pax: 8 },
                            { tour: "Ubud Cultural Walk", date: "Oct 16, 10:00 AM", pax: 15 },
                          ].map((d, i) => (
                            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                              <div>
                                <h4 className="font-bold text-[#0F172A] dark:text-white text-sm">{d.tour}</h4>
                                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                  <Calendar size={12} /> {d.date}
                                </div>
                              </div>
                              <div className="bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] font-bold text-xs px-2 py-1 rounded-full">
                                {d.pax} pax
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TOURS TAB */}
            {activeTab === 'tours' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-[#0F172A] dark:text-white">Manage Your Tours</h2>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2"><Plus size={18}/> Create New Tour</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Magical Bali Experience", status: "Active", price: 1299, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800" },
                    { title: "Ubud Cultural Walk", status: "Active", price: 75, image: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&q=80&w=800" },
                    { title: "Mount Batur Sunrise", status: "Draft", price: 150, image: "https://images.unsplash.com/photo-1577700207399-52e04e4c27a9?auto=format&fit=crop&q=80&w=800" },
                  ].map((tour, i) => (
                    <Card key={i} className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B] overflow-hidden group">
                      <div className="relative h-40">
                        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${tour.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                            {tour.status}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 bg-white dark:bg-[#0B1120] p-1 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex">
                          <button className="p-1 text-gray-500 hover:text-[#0EA5E9]"><Edit size={16} /></button>
                          <button className="p-1 text-gray-500 hover:text-red-500"><Trash2 size={16} /></button>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-[#0F172A] dark:text-white line-clamp-1 mb-2">{tour.title}</h3>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Starting from</span>
                          <span className="font-bold text-emerald-600">${tour.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Placeholder for other tabs */}
            {(activeTab === 'bookings' || activeTab === 'revenue' || activeTab === 'settings') && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center p-20 text-center bg-white dark:bg-[#1E293B] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 dark:bg-[#0B1120] rounded-full flex items-center justify-center mb-4">
                  {activeTab === 'bookings' && <Users className="text-gray-400" size={24} />}
                  {activeTab === 'revenue' && <Wallet className="text-gray-400" size={24} />}
                  {activeTab === 'settings' && <Settings className="text-gray-400" size={24} />}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">Coming Soon</h3>
                <p className="text-gray-500">This section is currently under development.</p>
              </motion.div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
