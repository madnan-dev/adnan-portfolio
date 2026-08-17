import { Code2, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/60 p-6 shadow-[0_22px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:p-8">
          <div>
            <p className="section-kicker text-sky-300">Automation Engineer</p>
            <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Building AI systems, workflow automations, and client-ready digital experiences.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Focused on practical automation, reliable integrations, and polished frontends that help teams move faster.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Quick Links</h3>
            <div className="mt-4 grid gap-3">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-slate-400 transition hover:text-white focus-ring">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Connect</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white focus-ring" href="mailto:contact@example.com">
                <Mail className="h-4 w-4" />
                contact@example.com
              </a>
              <a className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white focus-ring" href="https://github.com/" target="_blank" rel="noreferrer">
                <Code2 className="h-4 w-4" />
                GitHub
              </a>
              <a className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white focus-ring" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <ArrowUpRight className="h-4 w-4" />
                LinkedIn
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200 focus-ring">
                <ArrowUpRight className="h-4 w-4" />
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Madnan Dev. All rights reserved.</p>
          <p>Available for freelance automation, AI, and frontend work.</p>
        </div>
      </div>
    </footer>
  );
}