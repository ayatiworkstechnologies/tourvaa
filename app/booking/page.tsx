"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Users, MapPin, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

// Mock Tour Data (usually fetched via API)
const MOCK_TOUR = {
  id: "1",
  title: "Magical Bali Experience",
  banner_image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
  number_of_days: 7,
  price_per_person: 1299,
  city: "Ubud",
  country: "Indonesia",
  date: "Oct 15, 2026",
  guests: 2
};

const travellerSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
});

const bookingSchema = z.object({
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(8, "Phone number is required"),
  travellers: z.array(travellerSchema).min(1),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tourId = searchParams.get('tourId');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tour] = useState(MOCK_TOUR); // In real app, fetch based on tourId

  const { register, control, handleSubmit, formState: { errors, isValid } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      contactEmail: '',
      contactPhone: '',
      travellers: Array(tour.guests).fill({ firstName: '', lastName: '', email: '', phone: '' }),
      specialRequests: ''
    },
    mode: 'onTouched'
  });

  const { fields } = useFieldArray({
    control,
    name: "travellers"
  });

  const subtotal = tour.price_per_person * tour.guests;
  const taxes = subtotal * 0.1; // 10% tax
  const total = subtotal + taxes;

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Redirect to payment page
      router.push(`/payment?bookingId=BKG-${Math.floor(Math.random() * 10000)}&amount=${total}`);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </button>
        
        <h1 className="text-3xl font-bold text-[#0F172A] dark:text-white mb-8">Secure Your Booking</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Area */}
          <div className="flex-1 space-y-8">
            <form id="booking-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Contact Details */}
              <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                <CardHeader className="border-b border-gray-100 dark:border-white/5 pb-4">
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                      <Input 
                        {...register("contactEmail")} 
                        placeholder="We'll send your confirmation here" 
                        error={errors.contactEmail?.message}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                      <Input 
                        {...register("contactPhone")} 
                        placeholder="In case we need to reach you" 
                        error={errors.contactPhone?.message}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Traveller Details */}
              <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                <CardHeader className="border-b border-gray-100 dark:border-white/5 pb-4">
                  <CardTitle className="text-xl">Traveller Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {fields.map((field, index) => (
                    <div key={field.id} className="p-4 bg-gray-50/50 dark:bg-[#0B1120]/50 rounded-2xl border border-gray-100 dark:border-white/5">
                      <h3 className="font-bold text-[#0F172A] dark:text-white mb-4">Traveller {index + 1} {index === 0 && <span className="text-xs font-normal bg-[#0EA5E9]/10 text-[#0EA5E9] px-2 py-1 rounded-full ml-2">Lead Traveller</span>}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                          <Input 
                            {...register(`travellers.${index}.firstName`)} 
                            placeholder="As on passport" 
                            error={errors.travellers?.[index]?.firstName?.message}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                          <Input 
                            {...register(`travellers.${index}.lastName`)} 
                            placeholder="As on passport" 
                            error={errors.travellers?.[index]?.lastName?.message}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email (Optional)</label>
                          <Input 
                            {...register(`travellers.${index}.email`)} 
                            placeholder="Traveller's email" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone (Optional)</label>
                          <Input 
                            {...register(`travellers.${index}.phone`)} 
                            placeholder="Traveller's phone" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Special Requests */}
              <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
                <CardHeader className="border-b border-gray-100 dark:border-white/5 pb-4">
                  <CardTitle className="text-xl">Special Requests</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Dietary requirements, accessibility needs, or other requests</label>
                    <textarea 
                      {...register("specialRequests")}
                      rows={4}
                      className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B1120] px-4 py-3 text-sm focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-all dark:text-white"
                      placeholder="Let us know if you have any special requirements..."
                    ></textarea>
                    <p className="text-xs text-gray-500">Special requests are subject to availability and cannot be guaranteed.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Cancellation Policy */}
              <div className="bg-[#EFF6FF] dark:bg-[#1E3A8A]/20 border border-[#BFDBFE] dark:border-[#1E3A8A] rounded-2xl p-6 flex items-start gap-4">
                <ShieldCheck className="text-[#3B82F6] shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-bold text-[#1E3A8A] dark:text-[#BFDBFE] mb-1">Flexible Cancellation Policy</h4>
                  <p className="text-sm text-[#1E3A8A]/80 dark:text-[#BFDBFE]/80">
                    Cancel up to 7 days before the tour date for a full refund. 
                    Changes to dates can be made up to 72 hours before departure (subject to availability).
                  </p>
                </div>
              </div>

            </form>
          </div>

          {/* Right Column - Order Summary */}
          <aside className="w-full lg:w-96 shrink-0">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100 dark:border-white/5 sticky top-28">
              
              <div className="relative h-48 w-full">
                <Image src={tour.banner_image} alt={tour.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg line-clamp-1">{tour.title}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                    <MapPin size={14} /> {tour.city}, {tour.country}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 font-medium mb-6 pb-6 border-b border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-[#0EA5E9]" /> {tour.date}</div>
                  <div className="flex items-center gap-2"><Users size={16} className="text-[#0EA5E9]" /> {tour.guests} Guests</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>${tour.price_per_person.toLocaleString()} x {tour.guests} Adult</span>
                    <span className="font-medium text-[#0F172A] dark:text-white">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Taxes & Fees</span>
                    <span className="font-medium text-[#0F172A] dark:text-white">${taxes.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-gray-100 dark:border-white/10 mb-6">
                  <span className="font-bold text-[#0F172A] dark:text-white">Total Amount</span>
                  <span className="text-2xl font-extrabold text-[#0EA5E9]">${total.toLocaleString()}</span>
                </div>

                <Button 
                  type="submit" 
                  form="booking-form"
                  className="w-full h-14 text-lg font-bold gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Continue to Payment'}
                  {!isSubmitting && <ArrowRight size={20} />}
                </Button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  You won't be charged yet.
                </p>
              </div>
              
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
