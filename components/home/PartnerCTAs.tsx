import React from 'react';
import Link from 'next/link';
import { Briefcase, Handshake, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function PartnerCTAs() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner With Us</h2>
          <p className="text-gray-600 text-lg">Join the Tourvaa network and grow your business with our global platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Supplier */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Become a Supplier</h3>
            <p className="text-gray-600 mb-8 flex-grow">List your tours and experiences on Tourvaa to reach millions of travellers worldwide.</p>
            <Link href="/register?role=supplier" className="w-full">
              <Button variant="primary" className="w-full">Register as Supplier</Button>
            </Link>
          </div>

          {/* Agent */}
          <div className="bg-emerald-50 rounded-2xl p-8 text-center flex flex-col items-center">
            <div className="bg-emerald-100 p-4 rounded-full mb-6">
              <Handshake className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Travel Agents</h3>
            <p className="text-gray-600 mb-8 flex-grow">Access our premium inventory with competitive commissions and dedicated B2B support.</p>
            <Link href="/register?role=agent" className="w-full">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Register as Agent</Button>
            </Link>
          </div>

          {/* Affiliate */}
          <div className="bg-purple-50 rounded-2xl p-8 text-center flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-6">
              <Megaphone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Affiliate Program</h3>
            <p className="text-gray-600 mb-8 flex-grow">Monetize your travel content by promoting our tours to your audience.</p>
            <Link href="/register?role=affiliate" className="w-full">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Join Affiliate Program</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
