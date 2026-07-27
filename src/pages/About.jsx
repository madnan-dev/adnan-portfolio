import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { label: 'Projects Delivered', value: '25+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Automations Built', value: '50+' },
    { label: 'Years of Experience', value: '4+' },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Michael Brown',
      role: 'Automation Specialist',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            About Me
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            I create thoughtful digital products that feel{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              premium and purposeful.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            I blend modern web design, clean development, and smart automation to help brands stand out and operate more efficiently.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center">
              <p className="text-3xl font-bold text-sky-300">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">My Approach</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Built around clarity, speed, and long-term value</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Every project starts with understanding the user, the goal, and the story behind the brand. That allows me to create interfaces that feel effortless while remaining strong technically.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">React</span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">Tailwind CSS</span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">UI/UX</span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">Automation</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('mission')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === 'mission' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === 'vision' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Vision
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              {activeTab === 'mission' ? (
                <>
                  <h3 className="text-xl font-semibold text-white">Empowering better digital experiences</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    My mission is to turn complex ideas into simple, beautiful, and high-performing experiences that genuinely help people and businesses.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white">Designing smarter digital futures</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    I envision a future where modern websites and automation tools feel effortless, accessible, and deeply connected to real business goals.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Team</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A collaborative approach to every project</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-2 text-sm text-sky-300">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-sky-500/20 bg-sky-500/10 px-8 py-12 text-center shadow-lg shadow-sky-950/20 lg:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to build something exceptional?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Let’s turn your ideas into a portfolio or website that feels modern, trusted, and memorable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Get in Touch
            </Link>
            <Link to="/projects" className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}