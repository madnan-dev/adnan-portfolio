import React, { useState } from 'react';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogsData = [
    {
      id: 1,
      title: 'Building Scalable Webhook Pipelines with n8n',
      category: 'automation',
      date: 'Jul 20, 2026',
      readTime: '5 min read',
      excerpt: 'Learn how to connect custom APIs, trigger automated webhooks, and handle error nodes gracefully in production environments.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
      featured: true,
      author: 'Automation Specialist'
    },
    {
      id: 2,
      title: 'Understanding Agentic AI & Autonomous Workflows',
      category: 'ai',
      date: 'Jul 15, 2026',
      readTime: '7 min read',
      excerpt: 'Discover how AI agents use dynamic routing, context evaluation, and LLMs to execute complex decision-making processes.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'AI Developer'
    },
    {
      id: 3,
      title: 'Mastering Modern React Components with Tailwind CSS',
      category: 'web',
      date: 'Jul 10, 2026',
      readTime: '4 min read',
      excerpt: 'Best practices for writing clean, modular React components using utility-first CSS styling without bloated frameworks.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'Frontend Lead'
    },
    {
      id: 4,
      title: 'Automating Email Communications via Gmail & n8n',
      category: 'automation',
      date: 'Jul 05, 2026',
      readTime: '6 min read',
      excerpt: 'A step-by-step guide to building an inbox management panel that categorizes and auto-replies to prospective clients.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'Workflow Engineer'
    },
    {
      id: 5,
      title: 'Optimizing Web App Performance and Assets',
      category: 'web',
      date: 'Jun 28, 2026',
      readTime: '5 min read',
      excerpt: 'Tips on asset loading, semantic markup, and structure optimizations for fast page renders and seamless UX.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'Web Architect'
    }
  ];

  // Search & Category Filtering Logic
  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogsData.find((b) => b.featured);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-16 px-6 sm:px-12">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">
          Insights & Articles
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Latest <span className="text-indigo-500">Blogs & Tutorials</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Deep dives into web development, autonomous AI agents, and workflow automation strategies.
        </p>

        {/* --- SEARCH BAR & FILTERS --- */}
        <div className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700/80 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
          </div>
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {['all', 'automation', 'ai', 'web'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Articles' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- FEATURED ARTICLE SPOTLIGHT --- */}
      {featuredBlog && selectedCategory === 'all' && !searchQuery && (
        <section className="max-w-7xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-slate-800/60 border border-slate-700/80 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-2xl">
            <div className="overflow-hidden rounded-2xl border border-slate-700/50 h-64 lg:h-80">
              <img 
                src={featuredBlog.image} 
                alt={featuredBlog.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <div className="flex items-center space-x-3 text-xs text-slate-400 mb-3">
                <span className="bg-indigo-500/20 text-indigo-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-500/30">
                  Featured
                </span>
                <span>•</span>
                <span>{featuredBlog.date}</span>
                <span>•</span>
                <span>{featuredBlog.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-indigo-400 transition-colors cursor-pointer">
                {featuredBlog.title}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">{featuredBlog.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">By {featuredBlog.author}</span>
                <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-lg transition-all">
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- BLOGS GRID --- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="group bg-slate-800/40 rounded-2xl border border-slate-700/60 overflow-hidden hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-xl"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/80 text-indigo-400 text-xs px-2.5 py-1 rounded-md capitalize font-medium border border-slate-700">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-700/40 flex justify-between items-center mt-4">
                <span className="text-xs text-slate-400">{blog.author}</span>
                <button className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center">
                  Read More <span className="ml-1">→</span>
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-400">
            No articles found matching your search term.
          </div>
        )}
      </section>

      {/* --- NEWSLETTER SUBSCRIPTION --- */}
      <section className="max-w-4xl mx-auto mt-20 bg-slate-800/60 border border-slate-700/80 p-8 sm:p-12 rounded-3xl text-center shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
          Get the latest articles, tutorials, and workflow automation tips delivered straight to your inbox.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </section>

    </div>
  );
}