import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, Terminal, BookOpen, ExternalLink } from 'lucide-react';
import { STRUCTURED_AI_STUDIO_PROMPT } from '../data/portfolioData';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(STRUCTURED_AI_STUDIO_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 my-8 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Structured Prompt for Google AI Studio
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Tailored for Mushtakh • First-Year B.Tech CSE Portfolio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-indigo-50/60 px-6 py-3 border-b border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-200 flex items-center justify-between gap-3">
          <p>
            This clean, high-precision prompt is engineered for Google AI Studio with persona, structured sections, tech stack, and interactive calculator specs.
          </p>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 shrink-0 rounded-lg bg-indigo-600 px-3 py-1.5 font-semibold text-white shadow-xs hover:bg-indigo-700"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Content / Code Viewer */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs leading-relaxed">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-300">
            <pre className="whitespace-pre-wrap font-mono text-xs text-zinc-200">
              {STRUCTURED_AI_STUDIO_PROMPT}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-200 px-6 py-3.5 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <span>You can paste this prompt directly into Google AI Studio Build.</span>
          <button
            onClick={onClose}
            className="rounded-lg border border-zinc-300 px-4 py-1.5 font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
