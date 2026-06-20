"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CreditCard, Lock, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const paymentSchema = z.object({
  cardName: z.string().min(2, "Name on card is required"),
  cardNumber: z.string().min(16, "Invalid card number").max(19, "Invalid card number"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
  cvv: z.string().regex(/^[0-9]{3,4}$/, "Invalid CVV"),
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId') || 'BKG-0000';
  const amountParam = searchParams.get('amount') || '0';
  const amount = parseFloat(amountParam);

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: PaymentFormValues) => {
    handlePayment();
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2500));
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Wait a moment then redirect to success page
      setTimeout(() => {
        router.push(`/booking-success?bookingId=${bookingId}`);
      }, 1000);
      
    } catch (error) {
      console.error(error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white font-medium mb-8 transition-colors"
          disabled={isProcessing || isSuccess}
        >
          <ArrowLeft size={18} /> Back to Booking Details
        </button>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#0F172A] dark:text-white mb-2">Complete Your Payment</h1>
          <p className="text-gray-600 dark:text-gray-400">Secure, encrypted, and trusted payment.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Payment Area */}
          <div className="flex-1 space-y-6">
            
            {/* Payment Methods */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'card' 
                    ? 'border-[#0EA5E9] bg-white dark:bg-[#1E293B]' 
                    : 'border-gray-200 dark:border-white/10 bg-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <CreditCard size={28} className={paymentMethod === 'card' ? 'text-[#0EA5E9] mb-2' : 'text-gray-500 mb-2'} />
                <span className={`font-bold ${paymentMethod === 'card' ? 'text-[#0F172A] dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                  Credit Card
                </span>
              </button>
              
              <button 
                onClick={() => setPaymentMethod('paypal')}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'paypal' 
                    ? 'border-[#0EA5E9] bg-white dark:bg-[#1E293B]' 
                    : 'border-gray-200 dark:border-white/10 bg-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <svg viewBox="0 0 100 100" width="28" height="28" className="mb-2">
                  <path fill={paymentMethod === 'paypal' ? '#003087' : '#9CA3AF'} d="M82.8,24.1c-2.3-7.2-8.5-12.7-16-14.8c-2.3-0.6-4.8-1-7.4-1.2h-31c-3,0-5.6,2.2-6.1,5.2L12,65.6c-0.2,1.3,0.8,2.5,2.1,2.5h16.2 l-3.1,19.3c-0.3,1.6,1,3.1,2.6,3.1h15c2.6,0,4.8-1.9,5.2-4.5l4-24.8l0.1-0.8c0.4-2.6,2.6-4.5,5.2-4.5h3.9c13,0,23.1-6.1,26.4-18.4 C90.5,33.9,88.4,27.5,82.8,24.1z"/>
                  <path fill={paymentMethod === 'paypal' ? '#009CDE' : '#9CA3AF'} d="M81.5,33.2c-3.1,11-12.7,16.5-24.3,16.5h-4l0,0l-5.4,34c-0.3,1.6,1,3.1,2.6,3.1h15 c2.6,0,4.8-1.9,5.2-4.5l4-24.8l0.1-0.8c0.4-2.6,2.6-4.5,5.2-4.5h3.9c10,0,18.1-4.1,21.5-12.8c0.6-1.5,1.1-3.2,1.5-5 C85,34.9,83.3,34.1,81.5,33.2z"/>
                </svg>
                <span className={`font-bold ${paymentMethod === 'paypal' ? 'text-[#0F172A] dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                  PayPal
                </span>
              </button>
            </div>

            <Card className="border-none shadow-xl shadow-black/5 dark:bg-[#1E293B] overflow-hidden relative">
              {/* Processing / Success Overlay */}
              {(isProcessing || isSuccess) && (
                <div className="absolute inset-0 bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                  {isProcessing ? (
                    <>
                      <div className="w-16 h-16 border-4 border-gray-200 border-t-[#0EA5E9] rounded-full animate-spin mb-4"></div>
                      <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">Processing Payment</h3>
                      <p className="text-gray-500 mt-2">Please do not close this window</p>
                    </>
                  ) : (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex flex-col items-center justify-center text-center px-6"
                    >
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2">Payment Successful!</h3>
                      <p className="text-gray-600 dark:text-gray-400">Redirecting to your booking confirmation...</p>
                    </motion.div>
                  )}
                </div>
              )}

              <CardContent className="p-8">
                {paymentMethod === 'card' ? (
                  <form id="payment-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name on Card</label>
                      <Input 
                        {...register("cardName")} 
                        placeholder="John Doe" 
                        error={errors.cardName?.message}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Card Number</label>
                      <div className="relative">
                        <Input 
                          {...register("cardNumber")} 
                          placeholder="0000 0000 0000 0000" 
                          maxLength={19}
                          error={errors.cardNumber?.message}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-50">
                          {/* Payment icons could go here */}
                          <CreditCard size={20} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Expiry Date</label>
                        <Input 
                          {...register("expiryDate")} 
                          placeholder="MM/YY" 
                          maxLength={5}
                          error={errors.expiryDate?.message}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">CVV</label>
                        <Input 
                          {...register("cvv")} 
                          placeholder="123" 
                          maxLength={4}
                          type="password"
                          error={errors.cvv?.message}
                        />
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      You will be redirected to PayPal to complete your secure payment.
                    </p>
                    {/* Dummy button acting like paypal redirect */}
                  </div>
                )}
              </CardContent>
            </Card>

            <Button 
              type={paymentMethod === 'card' ? "submit" : "button"} 
              form={paymentMethod === 'card' ? "payment-form" : undefined}
              onClick={paymentMethod === 'paypal' ? handlePayment : undefined}
              className="w-full h-14 text-lg font-bold gap-2 flex items-center justify-center bg-[#0F172A] hover:bg-black dark:bg-[#0EA5E9] dark:hover:bg-[#0284C7]"
              disabled={isProcessing || isSuccess}
            >
              <Lock size={18} /> Pay ${amount.toLocaleString()} Now
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium mt-4">
              <ShieldCheck size={16} className="text-emerald-500" />
              Your payment is 256-bit encrypted and secure
            </div>
            
          </div>

          {/* Right Column - Order Summary */}
          <aside className="w-full md:w-80 shrink-0">
            <Card className="border-none shadow-sm shadow-black/5 dark:bg-[#1E293B]">
              <CardHeader className="border-b border-gray-100 dark:border-white/5 pb-4">
                <CardTitle className="text-lg">Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                
                <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-4">
                  <span>Booking Reference</span>
                  <span className="font-bold text-[#0F172A] dark:text-white uppercase">{bookingId}</span>
                </div>
                
                <div className="flex justify-between items-center py-4 border-t border-gray-100 dark:border-white/10 mt-2">
                  <span className="font-bold text-[#0F172A] dark:text-white text-lg">Total Amount</span>
                  <span className="text-2xl font-extrabold text-[#0EA5E9]">${amount.toLocaleString()}</span>
                </div>
                
              </CardContent>
            </Card>
          </aside>

        </div>
      </div>
    </div>
  );
}
