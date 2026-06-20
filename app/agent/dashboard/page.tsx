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
  Link as LinkIcon,
  TrendingUp,
  ArrowUpRight,
  Download
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'Client Bookings', icon: Map },
  { id: 'clients', label: 'My Clients', icon: Users },
  { id: 'earnings', label: 'Earnings & Payouts', icon: Wallet },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function AgentDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-white/5 sticky top-28">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                  SA
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] dark:text-white">Sarah Agent</h3>
                  <p className="text-xs text-purple-600 font-medium">Travel Agent</p>
                </div>
              </div>

              <nav className="space-y-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                      activeTab === tab.id 
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' 
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
                    className="pl-9 pr-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1E293B] text-sm focus:outline-none focus:border-purple-500 dark:text-white"
                  />
                </div>
                <button className="w-10 h-10 rounded-full bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors relative">
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
                        <span className="text-xs font-bold text-emerald-600 flex items-center bg-emerald-50 px-2 py-1 rounded-full"><TrendingUp size={12} className="mr-1"/> +12%</span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Total Earnings</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">$4,250.00</h3>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center"><Map size={20} /></div>
                        <span className="text-xs font-bold text-emerald-600 flex items-center bg-emerald-50 px-2 py-1 rounded-full"><TrendingUp size={12} className="mr-1"/> +5%</span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Active Bookings</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">24</h3>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center"><Users size={20} /></div>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Total Clients</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">142</h3>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center"><ArrowUpRight size={20} /></div>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Pending Payout</p>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">$850.00</h3>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Share Tools */}
                <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B] bg-gradient-to-r from-purple-50 to-white dark:from-[#1E293B] dark:to-[#1E293B]">
                  <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h2 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2 flex items-center gap-2">
                        <LinkIcon className="text-purple-600" /> Shareable Agent Link
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 max-w-lg text-sm">
                        Share this link with your clients. Any bookings made through this link will automatically be attributed to your account, earning you an 8% commission.
                      </p>
                    </div>
                    <div className="w-full md:w-auto">
                      <div className="flex items-center bg-white dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl p-1 overflow-hidden w-full md:w-96 shadow-sm">
                        <input 
                          type="text" 
                          readOnly 
                          value="https://tourvaa.com/agent/sarah-travels" 
                          className="w-full bg-transparent outline-none px-3 text-sm text-gray-600 dark:text-gray-300"
                        />
                        <Button className="bg-purple-600 hover:bg-purple-700 h-9 px-4 shrink-0">Copy</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Bookings Table */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">Recent Client Bookings</h2>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                  <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B] overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
                        <thead className="bg-gray-50 dark:bg-[#0B1120] text-gray-700 dark:text-gray-300 font-semibold uppercase text-xs">
                          <tr>
                            <th className="px-4 py-3">Client</th>
                            <th className="px-4 py-3">Tour</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3 text-right">Commission</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                          {[
                            { client: "Michael Chen", tour: "Swiss Alps Adventure", date: "Sep 12, 2026", amount: 3400, comm: 272 },
                            { client: "Emma Watson", tour: "Rome City Break", date: "Aug 05, 2026", amount: 1200, comm: 96 },
                            { client: "David Miller", tour: "Bali Retreat", date: "Jul 22, 2026", amount: 2800, comm: 224 },
                          ].map((b, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                              <td className="px-4 py-4 font-medium text-[#0F172A] dark:text-white">{b.client}</td>
                              <td className="px-4 py-4">{b.tour}</td>
                              <td className="px-4 py-4">{b.date}</td>
                              <td className="px-4 py-4">${b.amount.toLocaleString()}</td>
                              <td className="px-4 py-4 text-right font-bold text-emerald-600">+${b.comm}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )}

            {/* EARNINGS TAB */}
            {activeTab === 'earnings' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                  <CardHeader>
                    <CardTitle>Available for Withdrawal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 border border-gray-100 dark:border-white/10 rounded-2xl bg-gray-50 dark:bg-[#0B1120]">
                      <div>
                        <p className="text-gray-500 mb-1 font-medium">Available Balance</p>
                        <h2 className="text-4xl font-extrabold text-[#0F172A] dark:text-white">$850.00</h2>
                      </div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 h-12 px-8 text-lg w-full md:w-auto">Withdraw Funds</Button>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="font-bold text-lg text-[#0F172A] dark:text-white mt-8 mb-4">Payout History</h3>
                <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
                      <thead className="bg-gray-50 dark:bg-[#0B1120] text-gray-700 dark:text-gray-300 font-semibold uppercase text-xs">
                        <tr>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Method</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                        {[
                          { date: "May 01, 2026", method: "Bank Transfer (***492)", status: "Processed", amount: 1240 },
                          { date: "Apr 01, 2026", method: "PayPal", status: "Processed", amount: 890 },
                          { date: "Mar 01, 2026", method: "Bank Transfer (***492)", status: "Processed", amount: 2150 },
                        ].map((p, i) => (
                          <tr key={i}>
                            <td className="px-4 py-4">{p.date}</td>
                            <td className="px-4 py-4 font-medium">{p.method}</td>
                            <td className="px-4 py-4"><span className="text-xs font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{p.status}</span></td>
                            <td className="px-4 py-4 text-right font-bold text-[#0F172A] dark:text-white">${p.amount.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Placeholder for other tabs */}
            {(activeTab === 'clients' || activeTab === 'bookings' || activeTab === 'settings') && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center p-20 text-center bg-white dark:bg-[#1E293B] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 dark:bg-[#0B1120] rounded-full flex items-center justify-center mb-4">
                  {activeTab === 'clients' && <Users className="text-gray-400" size={24} />}
                  {activeTab === 'bookings' && <Map className="text-gray-400" size={24} />}
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
