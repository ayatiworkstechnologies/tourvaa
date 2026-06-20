import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Whether you have a question about our tours, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours. For urgent matters, please use the phone number provided below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-full mt-1">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Office Address</h4>
                  <p className="text-gray-600">123 Adventure Way, Suite 400<br/>San Francisco, CA 94105<br/>United States</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-4 rounded-full mt-1">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">Toll-Free: +1 (800) 123-4567<br/>Local: +1 (415) 555-0198</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-4 rounded-full mt-1">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">support@tourvaa.com<br/>partnerships@tourvaa.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border border-gray-100 shadow-xl shadow-gray-200/50 rounded-3xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                    <Input placeholder="John" className="h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                    <Input placeholder="Doe" className="h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <Input placeholder="How can we help?" className="h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us more about your inquiry..."
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>
                
                <Button type="button" size="lg" className="w-full h-12 text-lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  );
}
