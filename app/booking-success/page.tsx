"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Download, CalendarDays, ArrowRight } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function BookingSuccessPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId') || 'BKG-0000';

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] min-h-screen pt-28 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-8">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold text-[#0F172A] dark:text-white mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Your payment was successful and your adventure is locked in. We've sent a confirmation email with all the details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-none shadow-xl shadow-black/5 dark:bg-[#1E293B] mb-8 overflow-hidden">
              <div className="bg-[#0EA5E9] px-8 py-6 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">Booking Reference</p>
                  <p className="text-2xl font-bold font-mono tracking-wider">{bookingId}</p>
                </div>
                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white hover:text-[#0EA5E9] text-white gap-2">
                  <Download size={16} /> Download Receipt
                </Button>
              </div>
              <CardContent className="p-8">
                
                <h3 className="font-bold text-[#0F172A] dark:text-white mb-6 text-lg">Next Steps</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] flex items-center justify-center shrink-0">
                      <CalendarDays size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Prepare for your trip</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Review your itinerary and make sure you have all required travel documents ready.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2FE] dark:bg-[#0EA5E9]/20 text-[#0EA5E9] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Manage your booking</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">You can view, modify, or cancel your booking from your customer dashboard.</p>
                    </div>
                  </div>
                </div>
                
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/customer/dashboard" className="flex-1">
                <Button className="w-full h-14 text-lg font-bold">
                  Go to Dashboard
                </Button>
              </Link>
              <Link href="/tours" className="flex-1">
                <Button variant="outline" className="w-full h-14 text-lg font-bold gap-2 bg-white dark:bg-[#1E293B]">
                  Browse More Tours <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
