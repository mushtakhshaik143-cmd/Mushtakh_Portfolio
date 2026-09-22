import React from 'react';
import { Github, Linkedin, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPromptModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPromptModal }) => {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Brand info */}
          <div className="text-center sm:text-left">
            <p className="font-bold text-zinc-900 dark:text-zinc-100">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Aspiring AI Engineer • 1st Year B.Tech Computer Science & Engineering
            </p>
          </div>

          {/* Prompt banner button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPromptModal}
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Copy AI Studio Prompt</span>
            </button>

            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Social links */}
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-900 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Mushtakh. Built for Google AI Studio.</p>
        </div>
      </div>
    </footer>
  );
};
