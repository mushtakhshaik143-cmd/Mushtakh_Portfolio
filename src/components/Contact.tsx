import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    // Client-side simulation of message submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 mb-3">
            <Mail className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            Open to student study groups, hackathon teams, open-source projects, and early AI mentorship.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Contact Details Card */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Direct Profiles
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Reach out via professional platforms or email.
              </p>

              <div className="mt-6 space-y-4">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-zinc-200 p-3.5 transition hover:border-indigo-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                        GitHub
                      </p>
                      <p className="text-xs text-zinc-500 font-mono">
                        github.com/mushtakhshaik143-cmd
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Visit →</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-zinc-200 p-3.5 transition hover:border-indigo-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                        LinkedIn
                      </p>
                      <p className="text-xs text-zinc-500 font-mono">
                        linkedin.com/feed
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Connect →</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 p-3.5 transition hover:border-indigo-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                        Direct Email
                      </p>
                      <p className="text-xs text-zinc-500 font-mono">
                        {PERSONAL_INFO.links.email}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Write →</span>
                </a>
              </div>
            </div>

            {/* Academic Status Card */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                <MapPin className="h-4 w-4 text-indigo-500" />
                <span>Department of Computer Science & Engineering</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Undergraduate Student • Available for collegiate hackathons and peer study initiatives.
              </p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Send a Message
              </h3>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
              Have advice, feedback on my projects, or an opportunity? Drop a note below.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900 dark:bg-emerald-950/50">
                <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                <h4 className="mt-3 text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  Thank You for Reaching Out!
                </h4>
                <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
                  Your message has been formatted. Mushtakh will respond shortly at your provided email.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-4 text-xs font-medium text-emerald-800 underline dark:text-emerald-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Professor Sharma or Peer Alex"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full rounded-xl border border-zinc-300 px-3.5 py-2 text-xs text-zinc-900 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200 mb-1">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-zinc-300 px-3.5 py-2 text-xs text-zinc-900 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Share feedback on my calculators or propose a collaborative idea..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-zinc-300 px-3.5 py-2 text-xs text-zinc-900 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
