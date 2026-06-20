import React from 'react';
import { Search, ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const faqs = [
  {
    question: 'How do I cancel my booking?',
    answer: 'You can cancel your booking by logging into your account, navigating to "My Bookings," selecting the booking you wish to cancel, and clicking the "Cancel Booking" button. Please refer to the specific cancellation policy of your tour for refund eligibility.'
  },
  {
    question: 'Are flights included in the tour price?',
    answer: 'Generally, international flights are not included in the tour price unless explicitly stated in the "Inclusions" section of the tour details. Most of our tours start at the destination airport or hotel.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are securely processed using industry-standard encryption.'
  },
  {
    question: 'Can I request dietary accommodations?',
    answer: 'Yes! When completing your Traveller Details form during the booking process, you can specify any dietary requirements or food allergies. We will forward this information to the tour operator to ensure your needs are met.'
  },
  {
    question: 'When will I receive my travel documents?',
    answer: 'Your detailed travel documents and final itinerary will be available in your customer dashboard and emailed to you approximately 14 days before your tour departure date.'
  }
];

export default function HelpCentrePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header Search Section */}
      <div className="bg-blue-600 pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How can we help you today?</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for answers (e.g., cancellation policy, payments)" 
              className="w-full h-14 pl-12 pr-4 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-blue-400/50 shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10">
        
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat instantly with our support team.</p>
              <button className="text-blue-600 font-semibold hover:underline">Start Chat</button>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for urgent inquiries.</p>
              <p className="text-gray-900 font-bold">+1 (800) 123-4567</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="bg-purple-50 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">We aim to respond within 24 hours.</p>
              <a href="mailto:support@tourvaa.com" className="text-blue-600 font-semibold hover:underline">support@tourvaa.com</a>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180">
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
