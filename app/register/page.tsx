"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, User, Briefcase, AlertCircle, ArrowRight } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const registerSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string(),
  role: z.enum(['customer', 'supplier', 'agent', 'affiliate']),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultRole = (searchParams.get('role') as 'customer' | 'supplier' | 'agent' | 'affiliate') || 'customer';

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: defaultRole,
    }
  });

  const selectedRole = watch('role');

  useEffect(() => {
    if (defaultRole) {
      setValue('role', defaultRole);
    }
  }, [defaultRole, setValue]);

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call for registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to login on success
      router.push('/login?registered=true');
      
    } catch (err) {
      setError("An error occurred during registration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an Account</h1>
            <p className="text-gray-600">Join Tourvaa to book amazing tours or grow your travel business.</p>
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
                
                {/* Role Selection */}
                <div className="space-y-3 mb-8">
                  <label className="text-sm font-semibold text-gray-700">I want to register as a:</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { id: 'customer', label: 'Traveller', icon: User },
                      { id: 'supplier', label: 'Supplier', icon: Briefcase },
                      { id: 'agent', label: 'Agent', icon: Briefcase },
                      { id: 'affiliate', label: 'Affiliate', icon: Briefcase },
                    ].map((role) => (
                      <div 
                        key={role.id}
                        onClick={() => setValue('role', role.id as any)}
                        className={`border rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer transition-all ${
                          selectedRole === role.id 
                            ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600' 
                            : 'border-gray-200 hover:border-blue-300 text-gray-600 bg-white hover:bg-gray-50'
                        }`}
                      >
                        <role.icon className={`h-6 w-6 mb-2 ${selectedRole === role.id ? 'text-blue-600' : 'text-gray-400'}`} />
                        <span className="text-sm font-medium">{role.label}</span>
                      </div>
                    ))}
                  </div>
                  {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        {...register("firstName")}
                        placeholder="John" 
                        className="pl-10 h-12 bg-gray-50 focus:bg-white" 
                        error={errors.firstName?.message}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        {...register("lastName")}
                        placeholder="Doe" 
                        className="pl-10 h-12 bg-gray-50 focus:bg-white" 
                        error={errors.lastName?.message}
                      />
                    </div>
                  </div>
                </div>
                
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Password</label>
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
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        {...register("confirmPassword")}
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10 h-12 bg-gray-50 focus:bg-white" 
                        error={errors.confirmPassword?.message}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-gray-500 mb-6">
                    By creating an account, you agree to our <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                  </p>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 text-lg gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating account...' : 'Create Account'} 
                    {!isLoading && <ArrowRight className="h-5 w-5" />}
                  </Button>
                </div>
              </form>
              
            </CardContent>
          </Card>
          
          <p className="text-center mt-8 text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
              Sign in
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}
