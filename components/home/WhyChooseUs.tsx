import React from 'react';
import { ShieldCheck, HeartHandshake, Map, Award } from 'lucide-react';

const reasons = [
  {
    title: 'Expert Curation',
    description: 'Every tour is handpicked and verified by our travel experts to ensure premium quality.',
    icon: <Award className="h-8 w-8 text-blue-600" />,
  },
  {
    title: 'Secure Booking',
    description: 'Your payments and personal data are protected by industry-leading security standards.',
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated customer service team is available around the clock to assist you.',
    icon: <HeartHandshake className="h-8 w-8 text-blue-600" />,
  },
  {
    title: 'Global Reach',
    description: 'Access to thousands of unique experiences and destinations worldwide.',
    icon: <Map className="h-8 w-8 text-blue-600" />,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Tourvaa</h2>
          <p className="text-gray-600 text-lg">We are committed to providing you with the best travel experiences, backed by our guarantees of quality, security, and exceptional service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
