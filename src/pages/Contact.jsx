import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apne webhook ya API endpoint se connection kar sakte hain
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
      answer: 'We build custom webhooks, API routing pipelines, email inbox management panels, and CRM integrations tailored to your requirements.',
    },
    {
      question: 'How long does a project usually take?',
      answer: 'Depending on complexity, standard web apps and automation workflows typically take between 1 to 3 weeks for full delivery.',
    },
    {
      question: 'Can you integrate Agentic AI into existing applications?',
      answer: 'Yes! We integrate LLM-driven decision routers and autonomous AI agents directly into web interfaces or internal messaging tools.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-16 px-6 sm:px-12">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">
          Get In Touch
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Let’s Build Something <span className="text-indigo-500">Together</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Have a project in mind, need custom automation, or want to explore AI integrations? Send a message and let's discuss.
        </p>
      </section>

      {/* --- MAIN CONTACT SECTION (Cards + Form) --- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        
        {/* --- CONTACT INFO CARDS --- */}
        <div className="space-y-6">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/60 hover:border-indigo-500/50 transition-all flex items-start space-x-4">
            <div className="p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 text-xl">
              📧
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Email Us</h3>
              <p className="text-slate-400 text-sm mt-1">Send us an email anytime.</p>
              <a href="mailto:contact@example.com" className="text-indigo-400 text-sm font-semibold mt-2 inline-block hover:underline">
                contact@example.com
              </a>
            </div>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/60 hover:border-indigo-500/50 transition-all flex items-start space-x-4">
            <div className="p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 text-xl">
              ⚡
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Automation Support</h3>
              <p className="text-slate-400 text-sm mt-1">Fast response for workflows & AI.</p>
              <span className="text-indigo-400 text-sm font-semibold mt-2 block">
                24/7 Monitoring
              </span>
            </div>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/60 hover:border-indigo-500/50 transition-all flex items-start space-x-4">
            <div className="p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 text-xl">
              📍
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Location</h3>
              <p className="text-slate-400 text-sm mt-1">Remote-first services available globally.</p>
            </div>
          </div>
        </div>

        {/* --- INTERACTIVE FORM --- */}
        <div className="lg:col-span-2 bg-slate-800/60 p-8 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl relative">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-12">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center text-3xl mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-slate-300 mt-2 text-sm max-w-md">
                Thank you for reaching out. We have received your query and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Workflow Automation / Web Project"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements or project idea..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- FAQ ACCORDION SECTION --- */}
      <section className="max-w-4xl mx-auto border-t border-slate-800 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm mt-2">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-2xl border border-slate-700/60 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center text-white font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-indigo-400 font-bold ml-4">
                  {activeFaq === index ? '−' : '+'}
                </span>
              </button>

              {activeFaq === index && (
                <div className="px-6 pb-6 text-slate-300 text-sm border-t border-slate-700/40 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}