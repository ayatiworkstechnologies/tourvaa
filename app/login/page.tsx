"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { setToken } from '@/lib/auth';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call for login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we accept any login and assign a role based on email domain
      // e.g. agent@tourvaa.com -> agent, supplier@tourvaa.com -> supplier
      let role = "customer";
      if (data.email.includes("agent")) role = "agent";
      if (data.email.includes("supplier")) role = "supplier";
      
      // Create a dummy JWT token
      const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payload = btoa(JSON.stringify({ 
        sub: "123", 
        email: data.email, 
        role: role,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // 24 hours
      }));
      const signature = "dummy-signature";
      const dummyToken = `${header}.${payload}.${signature}`;
      
      setToken(dummyToken);
      
      // Redirect based on role
      if (role === "agent") router.push('/agent/dashboard');
      else if (role === "supplier") router.push('/supplier/dashboard');
      else router.push('/customer/dashboard');
      
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Tourvaa account to continue.</p>
          </div>
          
          <Card className="border-none shadow-xl shadow-gray-200/50">
            <CardContent className="p-8">
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}
              
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
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-gray-700">Password</label>
                    <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input 
                      {...register("password")}
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10 h-12 bg-gray-50 focus:bg-white" 
                      error={errors.password?.message}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 text-lg gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'} 
                  {!isLoading && <ArrowRight className="h-5 w-5" />}
                </Button>
              </form>
              
            </CardContent>
          </Card>
          
          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
              Create an account
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}
