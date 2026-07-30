import { ArrowLeft, Home, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-8 text-center sm:p-10">
            <p className="section-kicker text-sky-300">404</p>
            <h1 className="section-title mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
              This page took a wrong turn.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The route you opened does not exist, but you can still get back to the portfolio or jump to the section you need.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
                <Search className="h-4 w-4" />
                Browse Projects
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Quick links"
            title="Popular places to continue"
            description="If you landed here by mistake, these sections will get you back into the portfolio fast."
            align="center"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { to: '/about', label: 'About' },
              { to: '/services', label: 'Services' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <GlassCard key={link.to} className="p-5">
                <Link to={link.to} className="flex items-center justify-between text-white transition hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
                  <span className="font-semibold">{link.label}</span>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </GlassCard>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-slate-500">
            <Sparkles className="mr-2 inline-block h-4 w-4" />
            The portfolio stays available at the main routes in the navbar.
          </div>
        </div>
      </section>
    </div>
  );
}