import { useState } from 'react';

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Contact
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
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
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-xl">📧</div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">For project inquiries, collaborations, and custom development requests.</p>
              <a href="mailto:contact@example.com" className="mt-4 inline-flex text-sm font-semibold text-sky-300 hover:text-sky-200">
                contact@example.com
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-xl">⚡</div>
              <h3 className="text-xl font-semibold text-white">Fast Response</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">Automation and workflow support for teams that need quick implementation.</p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-xl">🌍</div>
              <h3 className="text-xl font-semibold text-white">Remote Service</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">Available globally for web builds, automation, and product support.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40 sm:p-10">
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
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Website / Automation / AI"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea or project..."
                    className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-sky-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/40 lg:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Common questions before you reach out</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-white"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="ml-4 text-xl text-sky-300">{activeFaq === index ? '−' : '+'}</span>
                </button>

                {activeFaq === index && <div className="border-t border-slate-800 px-5 py-4 text-sm leading-7 text-slate-400">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}