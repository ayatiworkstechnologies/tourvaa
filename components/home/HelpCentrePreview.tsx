import React from 'react';
import Link from 'next/link';
import { HelpCircle, FileText, LifeBuoy } from 'lucide-react';

export function HelpCentrePreview() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need Help With Your Booking?</h2>
              <p className="text-gray-600 text-lg mb-8">Whether you have questions about a tour, need to change your reservation, or just want some travel advice, we're here for you.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full mt-1">
                    <HelpCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Frequently Asked Questions</h4>
                    <p className="text-gray-600">Find quick answers to common questions about booking, payments, and cancellations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full mt-1">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Booking Guides</h4>
                    <p className="text-gray-600">Step-by-step instructions on how to use our platform effectively.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <LifeBuoy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600 mb-8">Our travel experts are ready to assist you via email or phone.</p>
              <Link href="/help-centre" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors w-full sm:w-auto">
                Visit Help Centre
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
