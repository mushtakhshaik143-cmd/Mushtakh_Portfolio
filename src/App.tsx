/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PromptModal } from './components/PromptModal';
import { Sparkles, Copy, Check, ArrowRight, Terminal } from 'lucide-react';
import { STRUCTURED_AI_STUDIO_PROMPT } from './data/portfolioData';

export default function App() {
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [copiedQuickPrompt, setCopiedQuickPrompt] = useState(false);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickCopyPrompt = () => {
    navigator.clipboard.writeText(STRUCTURED_AI_STUDIO_PROMPT);
    setCopiedQuickPrompt(true);
    setTimeout(() => setCopiedQuickPrompt(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-indigo-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      {/* Top Navigation */}
      <Navbar onOpenPromptModal={() => setIsPromptModalOpen(true)} />

      {/* Hero Section */}
      <Hero
        onOpenPromptModal={() => setIsPromptModalOpen(true)}
        onExploreProjects={handleExploreProjects}
      />

      {/* Prominent Quick-Action Prompt Banner for Google AI Studio */}
      <section className="bg-indigo-900 text-white py-6 border-y border-indigo-800 shadow-inner">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-800/80 px-2.5 py-0.5 text-xs font-semibold text-indigo-200">
                <Sparkles className="h-3 w-3 text-indigo-300" />
                <span>Google AI Studio Prompt Ready</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Structured Portfolio Generation Prompt for Mushtakh
              </h3>
              <p className="text-xs text-indigo-200 max-w-2xl">
                We've built this interactive portfolio live, and crafted the precise prompt ready for Google AI Studio with all your personal background, projects, and links.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleQuickCopyPrompt}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-indigo-950 shadow-sm transition hover:bg-indigo-50 active:scale-95"
              >
                {copiedQuickPrompt ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied Prompt!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-indigo-700" />
                    <span>Copy AI Studio Prompt</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsPromptModalOpen(true)}
                className="inline-flex items-center gap-1 rounded-xl border border-indigo-700 bg-indigo-800/60 px-3.5 py-2 text-xs font-semibold text-indigo-100 hover:bg-indigo-800"
              >
                <Terminal className="h-3.5 w-3.5" />
                <span>View Full Prompt</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main>
        {/* About & Academic Journey */}
        <About />

        {/* Technical Skills & Capabilities */}
        <Skills />

        {/* Featured Projects with Live Calculators */}
        <Projects />

        {/* Contact & Social Links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenPromptModal={() => setIsPromptModalOpen(true)} />

      {/* Full Screen Prompt Modal */}
      <PromptModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
      />
    </div>
  );
}
