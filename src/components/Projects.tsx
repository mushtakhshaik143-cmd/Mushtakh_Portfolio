import React, { useState } from 'react';
import { Code, ExternalLink, Github, Play, CheckCircle, Terminal, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GradeCalculator } from './GradeCalculator';
import { VotingCalculator } from './VotingCalculator';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Record<string, 'demo' | 'code' | 'features'>>({
    'grade-calculator': 'demo',
    'voting-eligibility': 'demo',
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const setTab = (projectId: string, tab: 'demo' | 'code' | 'features') => {
    setActiveTab(prev => ({ ...prev, [projectId]: tab }));
  };

  const copyCode = (projectId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(projectId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Practical Engineering Projects</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Featured Projects & Interactive Demonstrations
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            Real software built during my first-year B.Tech journey. Test the interactive calculators live, or inspect the underlying Python logic.
          </p>
        </div>

        {/* Projects List */}
        <div className="mt-12 space-y-12">
          {PROJECTS.map((project, idx) => {
            const currentTab = activeTab[project.id] || 'demo';

            return (
              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Project Header Bar */}
                <div className="border-b border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/70">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          0{idx + 1}.
                        </span>
                        <span className="rounded-full bg-zinc-200/70 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-xs hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Source on GitHub</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tab Selector */}
                  <div className="mt-6 flex border-b border-zinc-200 dark:border-zinc-800">
                    <button
                      onClick={() => setTab(project.id, 'demo')}
                      className={`flex items-center gap-1.5 border-b-2 px-4 py-2 text-xs font-semibold transition ${
                        currentTab === 'demo'
                          ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                          : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                      }`}
                    >
                      <Play className="h-3.5 w-3.5" />
                      <span>Live Interactive Demo</span>
                    </button>

                    <button
                      onClick={() => setTab(project.id, 'code')}
                      className={`flex items-center gap-1.5 border-b-2 px-4 py-2 text-xs font-semibold transition ${
                        currentTab === 'code'
                          ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                          : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                      }`}
                    >
                      <Code className="h-3.5 w-3.5" />
                      <span>Python Source Code</span>
                    </button>

                    <button
                      onClick={() => setTab(project.id, 'features')}
                      className={`flex items-center gap-1.5 border-b-2 px-4 py-2 text-xs font-semibold transition ${
                        currentTab === 'features'
                          ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                          : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                      }`}
                    >
                      <Terminal className="h-3.5 w-3.5" />
                      <span>Architecture & Specs</span>
                    </button>
                  </div>
                </div>

                {/* Tab Content Body */}
                <div className="p-6">
                  {currentTab === 'demo' && (
                    <div>
                      {project.id === 'grade-calculator' ? (
                        <GradeCalculator />
                      ) : (
                        <VotingCalculator />
                      )}
                    </div>
                  )}

                  {currentTab === 'code' && (
                    <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs text-zinc-200">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                        <span className="text-zinc-400">{project.id}.py</span>
                        <button
                          onClick={() => copyCode(project.id, project.codeSnippet)}
                          className="rounded bg-zinc-800 px-2 py-1 text-[11px] font-sans text-zinc-300 hover:bg-zinc-700"
                        >
                          {copiedId === project.id ? 'Copied!' : 'Copy Code'}
                        </button>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre leading-relaxed text-zinc-300">
                        {project.codeSnippet}
                      </pre>
                    </div>
                  )}

                  {currentTab === 'features' && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        Core Functional Specifications:
                      </h4>
                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {project.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 rounded-lg border border-zinc-200 bg-zinc-50/50 p-3 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
