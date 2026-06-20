"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' }
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    
    try {
      // Simulate API call for password reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (err) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        
        <div className="max-w-md mx-auto">
          <Link href="/login" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to login
          </Link>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
            <p className="text-gray-600">
              {isSubmitted 
                ? "We've sent you an email with instructions to reset your password." 
                : "Enter the email address associated with your account and we'll send you a link to reset your password."}
            </p>
          </div>
          
          <Card className="border-none shadow-xl shadow-gray-200/50">
            <CardContent className="p-8">
              
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Check your email</h3>
                  <p className="text-gray-600 mb-8">We've sent a password reset link to your email address.</p>
                  <Button 
                    variant="outline" 
                    className="w-full h-12"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Didn't receive the email? Try again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        {...register("email")}
                        type="email" 
                        placeholder="you@example.com" 
                        className="pl-10 h-12 bg-gray-50 focus:bg-white" 
                        error={errors.email?.message}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending Link...' : 'Send Reset Link'} 
                  </Button>
                </form>
              )}
              
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  );
}
