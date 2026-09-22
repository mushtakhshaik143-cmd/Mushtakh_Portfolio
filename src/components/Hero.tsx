import React from 'react';
import { ArrowRight, Github, Linkedin, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenPromptModal: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPromptModal, onExploreProjects }) => {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-linear-to-b from-zinc-50 via-white to-white py-16 dark:border-zinc-800/80 dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 sm:py-24">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-20">
        <div className="h-[400px] w-[600px] rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-950/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Main Info */}
          <div className="max-w-2xl space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse dark:bg-indigo-400" />
                1st Year B.Tech • Computer Science & Engineering
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <Cpu className="h-3 w-3 text-indigo-500" />
                Aspiring AI Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Mushtakh</span>
              </h1>
              <p className="text-xl font-medium text-zinc-700 dark:text-zinc-200 sm:text-2xl">
                Building practical software and pursuing the future of Artificial Intelligence.
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              Currently establishing my core engineering fundamentals in B.Tech Computer Science. Focused on <strong>Python algorithmic logic</strong>, <strong>modern web development</strong>, and <strong>Generative AI workflows</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              >
                <span>Explore Projects & Calculators</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenPromptModal}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition hover:bg-zinc-50 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span>AI Studio Prompt</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-xs transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
                  title="GitHub: mushtakhshaik143-cmd"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-xs transition hover:border-zinc-400 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-indigo-400"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Highlight Card */}
          <div className="w-full lg:max-w-md">
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">profile.py</span>
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-300">
                <p>
                  <span className="text-purple-600 dark:text-purple-400">class</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-bold">AspiringAIEngineer</span>:
                </p>
                <div className="pl-4 space-y-1.5 border-l-2 border-indigo-100 dark:border-indigo-900/50">
                  <p>
                    <span className="text-zinc-400">name</span> = <span className="text-emerald-600 dark:text-emerald-400">"{PERSONAL_INFO.name}"</span>
                  </p>
                  <p>
                    <span className="text-zinc-400">program</span> = <span className="text-emerald-600 dark:text-emerald-400">"B.Tech CSE (Year 1)"</span>
                  </p>
                  <p>
                    <span className="text-zinc-400">languages</span> = [<span className="text-emerald-600 dark:text-emerald-400">"Python"</span>, <span className="text-emerald-600 dark:text-emerald-400">"JavaScript"</span>]
                  </p>
                  <p>
                    <span className="text-zinc-400">interests</span> = [<span className="text-emerald-600 dark:text-emerald-400">"Generative AI"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Web Dev"</span>]
                  </p>
                  <p>
                    <span className="text-zinc-400">status</span> = <span className="text-emerald-600 dark:text-emerald-400">"Active Learner & Builder"</span>
                  </p>
                </div>
              </div>

              {/* Quick interactive project preview badge */}
              <div className="mt-6 rounded-xl bg-zinc-50 p-3.5 border border-zinc-200/80 dark:bg-zinc-950/60 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  <Code2 className="h-4 w-4 text-indigo-500" />
                  <span>Featured Year-1 Projects Ready to Test</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-white p-2 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300">
                    <p className="font-semibold text-indigo-600 dark:text-indigo-400">01.</p>
                    <p className="truncate">Student Grade Calc</p>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300">
                    <p className="font-semibold text-indigo-600 dark:text-indigo-400">02.</p>
                    <p className="truncate">Voting Eligibility</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
