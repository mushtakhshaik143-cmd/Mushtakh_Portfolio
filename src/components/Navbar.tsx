import React, { useState } from 'react';
import { Github, Linkedin, Sparkles, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenPromptModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPromptModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="Mushtakh Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-sm transition-transform group-hover:scale-105">
              M
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                <span>Mushtakh</span>
                <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300">
                  AI
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">1st Year B.Tech CSE</p>
            </div>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollTo('about')}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            Projects & Demos
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onOpenPromptModal}
            className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-xs transition hover:bg-indigo-100 hover:border-indigo-300 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-900/60"
            title="View the structured prompt for Google AI Studio"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>AI Studio Prompt</span>
          </button>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-indigo-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenPromptModal}
            className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
          >
            <Sparkles className="h-3 w-3" />
            <span>Prompt</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => scrollTo('about')}
              className="text-left text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200"
            >
              About Me
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="text-left text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200"
            >
              Technical Skills
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-left text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200"
            >
              Interactive Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200"
            >
              Contact
            </button>

            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Connect with Mushtakh</span>
              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-1.5 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-1.5 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
