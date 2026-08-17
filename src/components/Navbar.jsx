import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const repositoryLink = 'https://github.com/madnan-dev/n8n-automation-workflows';

  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/services', label: 'Services' },
      { to: '/projects', label: 'Projects' },
      { to: '/blogs', label: 'Blogs' },
      { to: '/contact', label: 'Contact' },
    ],
    [],
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3 focus-ring">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/25 bg-gradient-to-br from-sky-400/20 via-cyan-400/10 to-slate-900 text-sm font-bold tracking-[0.24em] text-sky-100 shadow-lg shadow-sky-950/30 transition group-hover:border-sky-300/40">
            AA
          </span>
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-sky-300">Automation Engineer</span>
            <span className="mt-1 block text-lg font-semibold text-white">Madnan Dev</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-200 transition hover:border-sky-400/40 hover:text-white focus-ring lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/60 p-1.5 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition focus-ring ${
                  isActive(link.to)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 ring-1 ring-inset ring-sky-400/30"
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          <a
            href="/resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2.5 text-sm font-semibold text-sky-100 transition hover:border-sky-400/40 hover:bg-sky-500/15 focus-ring"
            aria-label="Download resume"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>

          <a
            href={repositoryLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-white focus-ring"
          >
            <ArrowUpRight className="h-4 w-4" />
            GitHub Repo
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus-ring"
          >
            Start a Build
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition focus-ring ${
                    isActive(link.to)
                      ? 'bg-sky-500/10 text-white ring-1 ring-inset ring-sky-400/20'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-white focus-ring"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>

              <a
                href={repositoryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-white focus-ring"
              >
                <ArrowUpRight className="h-4 w-4" />
                GitHub Repo
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus-ring"
              >
                Start a Build
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
