import React from 'react';
import { Target, Eye, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Tourvaa</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a premium travel marketplace connecting passionate travellers with the world's finest tour operators, creating unforgettable journeys and lifetime memories.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          <div className="rounded-2xl overflow-hidden h-80 md:h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop" 
              alt="Travellers exploring" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 h-80 md:h-[450px]">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600&auto=format&fit=crop" 
                alt="Venice canal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop" 
                alt="Swiss Alps" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-blue-50 rounded-3xl p-10">
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Target className="h-7 w-7 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To democratize premium travel by providing a secure, transparent, and easy-to-use platform where travellers can discover, compare, and book the world's most incredible experiences without hidden fees or booking anxieties.
            </p>
          </div>
          <div className="bg-emerald-50 rounded-3xl p-10">
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Eye className="h-7 w-7 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a world where every journey enriches both the traveller and the destination. We strive to be the global standard for responsible, high-quality tour marketplaces that empower local operators and global adventurers alike.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <CardContent className="p-8">
                <Shield className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Transparency</h3>
                <p className="text-gray-600">We believe in upfront pricing, verified reviews, and secure payments. No surprises, just great trips.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
                <p className="text-gray-600">We prioritize the well-being of our travellers, our suppliers, and the local communities we visit.</p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
