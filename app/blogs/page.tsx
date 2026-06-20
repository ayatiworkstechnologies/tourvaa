import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const allBlogs = [
  {
    id: 1,
    slug: 'top-10-hidden-gems-in-europe',
    title: 'Top 10 Hidden Gems in Europe for 2026',
    excerpt: 'Escape the crowds and discover these breathtaking, lesser-known European destinations that promise authentic experiences away from the usual tourist traps.',
    date: 'Jun 15, 2026',
    author: 'Elena Rodriguez',
    category: 'Destinations',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'packing-guide-for-southeast-asia',
    title: 'The Ultimate Packing Guide for Southeast Asia',
    excerpt: 'Everything you need to know about packing light, staying cool, and being prepared for tropical adventures across Thailand, Vietnam, and Indonesia.',
    date: 'Jun 02, 2026',
    author: 'Mark Johnson',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'sustainable-travel-tips',
    title: '5 Ways to Travel More Sustainably',
    excerpt: 'Learn how to minimize your carbon footprint while maximizing your positive impact on local communities during your global adventures.',
    date: 'May 28, 2026',
    author: 'Sarah Jenkins',
    category: 'Eco-Travel',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'best-street-food-tokyo',
    title: 'A Culinary Journey: Best Street Food in Tokyo',
    excerpt: 'From takoyaki to yakitori, discover the must-try street foods that make Tokyo one of the worlds greatest culinary capitals.',
    date: 'May 12, 2026',
    author: 'Kenji Sato',
    category: 'Food & Drink',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    slug: 'photography-tips-for-safari',
    title: 'Photography Tips for Your First African Safari',
    excerpt: 'Capture the majesty of the Big Five with these essential wildlife photography tips, from lens selection to composition techniques.',
    date: 'Apr 30, 2026',
    author: 'David Wilson',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    slug: 'navigating-trains-in-switzerland',
    title: 'The Ultimate Guide to Swiss Trains',
    excerpt: 'Everything you need to know about the Swiss Travel Pass, scenic routes, and navigating one of the most efficient rail networks in the world.',
    date: 'Apr 15, 2026',
    author: 'Emma Roberts',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
  }
];

export default function BlogsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Travel Inspiration & Guides</h1>
          <p className="text-xl text-gray-600">
            Discover travel tips, destination guides, and stories from our community of global explorers.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blogs/${allBlogs[0].slug}`} className="group block">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={allBlogs[0].image} 
                alt={allBlogs[0].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                  <span className="flex items-center gap-1 bg-blue-600/80 px-3 py-1 rounded-full text-white backdrop-blur-sm">
                    {allBlogs[0].category}
                  </span>
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {allBlogs[0].date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {allBlogs[0].title}
                </h2>
                <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-6 line-clamp-2">
                  {allBlogs[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-white font-medium">
                  <User className="h-5 w-5" /> {allBlogs[0].author}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts Grid */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.slice(1).map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none group bg-white">
              <Link href={`/blogs/${blog.slug}`}>
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm flex items-center gap-1">
                    <Tag className="h-3 w-3" /> {blog.category}
                  </div>
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User className="h-4 w-4" /> {blog.author}</span>
                </div>
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">{blog.title}</h3>
                </Link>
                <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center group-hover:underline underline-offset-4">
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
