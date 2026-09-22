import React from 'react';
import { BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Academic Background & Journey</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Starting My Journey in Computer Science
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            As a 1st-year student in the <strong>Computer Science & Engineering Department</strong>, I am actively building my fundamentals from the ground up — pairing mathematical reasoning with practical programming.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">B.Tech First Year</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Enrolled in B.Tech CSE, focusing on engineering mathematics, algorithmic thinking, and computer architecture essentials. Every week is an opportunity to strengthen core problem-solving instincts.
            </p>
            <div className="mt-4 border-t border-zinc-200/80 pt-3 dark:border-zinc-800/80">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Current Phase:</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Foundational semester & structured programming.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 mb-4">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">The AI Spark</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Fascinated by how Large Language Models and Generative AI bridge human ideas with code. I've begun experimenting with structured prompt design, Gemini models in Google AI Studio, and AI assisted development.
            </p>
            <div className="mt-4 border-t border-zinc-200/80 pt-3 dark:border-zinc-800/80">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Vision:</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">To evolve into an AI Engineer building helpful software.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 mb-4">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Hands-on Building</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Believing in learning by doing, I turned classroom logic exercises into functioning mini-apps: a multi-course <strong>Student Grade Calculator</strong> and a legal-criteria <strong>Voting Eligibility Screener</strong>.
            </p>
            <div className="mt-4 border-t border-zinc-200/80 pt-3 dark:border-zinc-800/80">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Philosophy:</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Write clean code, test every edge case.</p>
            </div>
          </div>

        </div>

        {/* Quick Highlights Row */}
        <div className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-indigo-950 dark:text-indigo-200">
                Mushtakh's Year-1 Milestones
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Setting a strong trajectory for future internships, hackathons, and AI research projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1.5 shadow-xs border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Python Syntax & Algorithms
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1.5 shadow-xs border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Web Development Foundations
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1.5 shadow-xs border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Generative AI & Prompting
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
