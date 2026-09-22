import React from 'react';
import { Code, Globe, Cpu, Check, ArrowUpRight, Compass } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Technologies & Tools
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            A solid grounding in programming fundamentals, web structure, and modern artificial intelligence workflows.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {skill.description}
                </p>

                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Key Competencies
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                    {skill.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] text-zinc-400 font-mono">
                Status: In Practice
              </div>
            </div>
          ))}
        </div>

        {/* Learning Roadmap */}
        <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Future Learning Roadmap (AI Engineering Pathway)
            </h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-200/80 dark:bg-zinc-950/60 dark:border-zinc-800">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Step 1 (Current)</span>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">Python & Basic Logic</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Control flows, loops, functions, OOP basics.</p>
            </div>

            <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-200/80 dark:bg-zinc-950/60 dark:border-zinc-800">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Step 2 (Next)</span>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">Data Structures & Math</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Linear algebra, calculus, stacks, queues, trees.</p>
            </div>

            <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-200/80 dark:bg-zinc-950/60 dark:border-zinc-800">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Step 3</span>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">Data Science & ML</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">NumPy, Pandas, scikit-learn, statistical models.</p>
            </div>

            <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-200/80 dark:bg-zinc-950/60 dark:border-zinc-800">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Step 4</span>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">Deep Learning & LLMs</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Neural networks, transformers, PyTorch, AI agents.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
