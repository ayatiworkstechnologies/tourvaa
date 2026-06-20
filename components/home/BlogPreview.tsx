import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const blogs = [
  {
    id: 1,
    slug: 'top-10-hidden-gems-in-europe',
    title: 'Top 10 Hidden Gems in Europe for 2026',
    excerpt: 'Escape the crowds and discover these breathtaking, lesser-known European destinations that promise authentic experiences.',
    date: 'Jun 15, 2026',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'packing-guide-for-southeast-asia',
    title: 'The Ultimate Packing Guide for Southeast Asia',
    excerpt: 'Everything you need to know about packing light, staying cool, and being prepared for tropical adventures.',
    date: 'Jun 02, 2026',
    image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'sustainable-travel-tips',
    title: '5 Ways to Travel More Sustainably',
    excerpt: 'Learn how to minimize your carbon footprint while maximizing your positive impact on local communities.',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Inspiration</h2>
            <p className="text-gray-600 text-lg max-w-2xl">Read our latest guides, tips, and stories from travellers around the world.</p>
          </div>
          <Link href="/blogs" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none group">
              <Link href={`/blogs/${blog.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" /> {blog.date}
                </div>
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">{blog.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center group-hover:underline underline-offset-4">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
