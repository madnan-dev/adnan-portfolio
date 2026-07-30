import { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, MessageSquareText, Send, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of automation pipelines do you build?',
      answer: 'I build custom webhooks, API routing workflows, CRM integrations, email automations, and internal tools tailored to your business needs.',
    },
    {
      question: 'How long does a project usually take?',
      answer: 'Depending on complexity, most web apps and automation workflows are delivered within 1 to 3 weeks.',
    },
    {
      question: 'Can you integrate AI into existing apps?',
      answer: 'Yes. I can connect AI assistants, smart routing, and automation logic into existing websites or business systems.',
    },
  ];

  const contactOptions = [
    {
      title: 'Email',
      icon: Mail,
      text: 'Best for project briefs, scope questions, and detailed collaboration requests.',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
    },
    {
      title: 'Response time',
      icon: Clock3,
      text: 'Typical reply window is same day or next business day depending on the request.',
      value: '< 24 hours',
    },
    {
      title: 'Working style',
      icon: Sparkles,
      text: 'I work solo, communicate clearly, and keep delivery practical and maintainable.',
      value: 'Direct delivery',
    },
  ];

  const quickNotes = [
    'n8n workflow builds',
    'AI agent and OpenAI integrations',
    'API automation and webhooks',
    'Frontend pages and portfolio upgrades',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-kicker text-sky-300">Contact</p>
          <h1 className="section-title mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
            Let’s build something{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              remarkable together.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Whether you need a polished website, automation, or a smarter digital workflow, I’m ready to help turn your idea into reality.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <GlassCard key={option.title} className="p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{option.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{option.text}</p>
                  {option.href ? (
                    <a href={option.href} className="mt-4 inline-flex text-sm font-semibold text-sky-300 transition hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
                      {option.value}
                    </a>
                  ) : (
                    <p className="mt-4 text-sm font-semibold text-sky-300">{option.value}</p>
                  )}
                </GlassCard>
              );
            })}

            <GlassCard className="p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-sky-300">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">What I can help with</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {quickNotes.map((note) => (
                  <li key={note} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    {note}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-8 shadow-2xl shadow-slate-950/40 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-3xl text-emerald-400">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                  Thanks for reaching out. Your message has been received and I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <SectionHeading
                  kicker="Project intake"
                  title="Tell me what you want to automate or improve"
                  description="The more context you provide, the faster I can tell you what is feasible, what the scope should be, and the best next step."
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="focus-visible:outline-none w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="focus-visible:outline-none w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Website / Automation / AI"
                    className="focus-visible:outline-none w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea or project..."
                    className="focus-visible:outline-none w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <GlassCard className="mx-auto max-w-5xl p-8 shadow-xl shadow-slate-950/40 lg:p-10">
          <div className="mb-8 text-center">
            <p className="section-kicker text-sky-300">FAQ</p>
            <h2 className="section-title mt-3 text-4xl text-white sm:text-5xl">Common questions before you reach out</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400/70"
                  aria-expanded={activeFaq === index}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="ml-4 text-xl text-sky-300">{activeFaq === index ? '−' : '+'}</span>
                </button>

                {activeFaq === index && <div className="border-t border-slate-800 px-5 py-4 text-sm leading-7 text-slate-400">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </GlassCard>
      </section>
    </div>
  );
}