import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-[0.2em] text-white uppercase">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sm font-bold text-sky-300">
            P
          </span>
          Portfolio
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-200 transition hover:border-sky-400 hover:text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(link.to)
                  ? 'bg-sky-500 text-slate-950'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive(link.to)
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}