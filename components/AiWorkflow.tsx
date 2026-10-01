'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Search,
  Sparkles,
  Zap,
  Globe,
  Wrench,
  PenTool,
  Calendar,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';

interface AiWorkflowArea {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  practicalExplanation: string;
  workflowSample: string;
}

export function AiWorkflow() {
  const [selectedArea, setSelectedArea] = useState<string>('webdev');

  const workflowAreas: AiWorkflowArea[] = [
    {
      id: 'learning',
      name: 'Learning',
      icon: BookOpen,
      tagline: 'Deconstructing complex concepts into digestible milestones',
      practicalExplanation:
        'Using AI to generate conceptual analogies, dissect intricate documentation, explain new JavaScript syntax paradigms, and understand programming abstractions quickly.',
      workflowSample:
        'Asking AI to explain JavaScript asynchronous Promises with real-world analogies, then implementing a test script to verify comprehension.',
    },
    {
      id: 'research',
      name: 'Research',
      icon: Search,
      tagline: 'Comparing architectural patterns and technological trade-offs',
      practicalExplanation:
        'Rapidly gathering comparative analysis between design paradigms (e.g., CSS Grid vs. Flexbox layouts, utility-first styling vs. traditional BEM) to inform architectural choices.',
      workflowSample:
        'Inquiring about best practices for responsive web layouts and accessible color contrasts before writing CSS code.',
    },
    {
      id: 'brainstorming',
      name: 'Brainstorming',
      icon: Sparkles,
      tagline: 'Generating creative perspectives and UX edge cases',
      practicalExplanation:
        'Exploring multiple user experience journeys, creative section layouts, edge-case scenarios, and feature ideas for web prototypes.',
      workflowSample:
        'Brainstorming 5 alternative ways a user might interact with a data filtering component to ensure intuitive navigation.',
    },
    {
      id: 'productivity',
      name: 'Productivity',
      icon: Zap,
      tagline: 'Eliminating repetitive boilerplate to focus on core logic',
      practicalExplanation:
        'Speeding up routine typing, generating scaffolding templates, drafting initial regex patterns, and formulating boilerplate configs to maximize daily development velocity.',
      workflowSample:
        'Generating a structured TypeScript interface for complex JSON data instead of manually hand-typing 20 field declarations.',
    },
    {
      id: 'webdev',
      name: 'Website Development',
      icon: Globe,
      tagline: 'Prompt-guided frontend prototyping & styling acceleration',
      practicalExplanation:
        'Translating wireframe concepts into clean semantic HTML structure and Tailwind CSS classes, iteratively refining responsive layouts across mobile, tablet, and desktop viewports.',
      workflowSample:
        'Iteratively refining CSS transitions and card layouts by prompting AI for optimal Tailwind responsive utility patterns, then validating the result in browser dev tools.',
    },
    {
      id: 'problemsolving',
      name: 'Problem Solving',
      icon: Wrench,
      tagline: 'Diagnostic partner for debugging & error traceback analysis',
      practicalExplanation:
        'Feeding difficult error messages and stack traces to AI to explore potential root causes, followed by rigorous testing and manual verification of the suggested solution.',
      workflowSample:
        'Pasting a cryptic Python IndexError or hydration warning to understand the underlying trigger, then patching the code systematically.',
    },
    {
      id: 'writing',
      name: 'Writing',
      icon: PenTool,
      tagline: 'Polishing documentation, commit notes & technical copy',
      practicalExplanation:
        'Crafting concise Git commit messages, refining code comments, drafting comprehensive README instructions, and polishing client-facing copy for readability and tone.',
      workflowSample:
        'Drafting clear, standardized README setup instructions for a project repository so other developers can run the code effortlessly.',
    },
    {
      id: 'planning',
      name: 'Planning',
      icon: Calendar,
      tagline: 'Decomposing project briefs into structured sprints',
      practicalExplanation:
        'Breaking larger software goals into organized task lists, prioritizing milestones, defining dependency orders, and estimating phase-by-phase completion roadmaps.',
      workflowSample:
        'Generating a 4-phase step-by-step checklist for building a responsive portfolio before writing the first line of code.',
    },
  ];

  const currentArea = workflowAreas.find((w) => w.id === selectedArea) || workflowAreas[0];
  const CurrentIcon = currentArea.icon;

  return (
    <section id="ai-workflow" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            AI-Assisted Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            How I responsibly integrate AI tools into everyday development.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Rather than claiming expert status, I maintain a practical, disciplined human-in-the-loop philosophy: using AI as a catalyst for efficiency, research, and ideation while verifying logic with analytical rigor.
          </p>
        </div>

        {/* 8 AI Competency Pills as Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {workflowAreas.map((area) => {
            const Icon = area.icon;
            const isSelected = area.id === selectedArea;
            return (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                type="button"
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500/80 shadow-xs'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-blue-600'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  )}
                </div>
                <div className="font-semibold text-xs text-slate-900 dark:text-white">
                  {area.name}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {area.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Spotlight Showcase Container for Selected Area */}
        <motion.div
          key={currentArea.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Using AI for {currentArea.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {currentArea.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentArea.practicalExplanation}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Typical Developer Scenario:
              </span>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono leading-relaxed">
                &ldquo;{currentArea.workflowSample}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Transparent Philosophy Guarantee */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              <ShieldCheck className="w-4 h-4" />
              Developer Principles
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Human in the loop:</strong> Every line of code is understood, reviewed, and tested before commit.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No blind copy-pasting:</strong> AI recommendations are treated as hypotheses to verify, not unexamined truth.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Honest capabilities:</strong> Transparent about when AI assisted in speed, while owning the overall engineering outcome.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
