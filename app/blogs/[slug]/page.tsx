import React from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  // Dummy fetch for blog post based on slug
  const blog = {
    title: resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    content: `
      <p class="mb-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Journey Begins</h2>
      <p class="mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop" alt="Scenery" class="w-full rounded-2xl my-8 object-cover h-96" />
      
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Local Cuisine</h2>
      <p class="mb-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <blockquote class="border-l-4 border-blue-600 pl-6 py-2 my-8 italic text-xl text-gray-700 bg-gray-50 rounded-r-lg">
        "Travel makes one modest. You see what a tiny place you occupy in the world." - Gustave Flaubert
      </blockquote>
      
      <p class="mb-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
    `,
    date: 'Jun 15, 2026',
    author: 'Elena Rodriguez',
    category: 'Destinations',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop',
  };

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <Link href="/blogs" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
        </Link>
        
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-6">
            <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              <Tag className="h-4 w-4" /> {blog.category}
            </span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {blog.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-gray-100 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{blog.author}</p>
                <p className="text-sm text-gray-500">Travel Expert</p>
              </div>
            </div>
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" title="Share this article">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden mb-12 shadow-lg">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        <article 
          className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </div>
  );
}
