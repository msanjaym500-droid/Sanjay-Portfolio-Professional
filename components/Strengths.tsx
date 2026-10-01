'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  Lightbulb,
  Brain,
  Compass,
  Cpu,
  Smile,
  BookOpen,
  CheckCircle,
} from 'lucide-react';

export function Strengths() {
  const strengthsList = [
    {
      name: 'Quick Learner',
      icon: Zap,
      subtitle: 'Rapid concept assimilation',
      description:
        'Proven track record of bridging pure theoretical physics into practical programming and web development workflows in compressed timeframes.',
    },
    {
      name: 'Problem Solver',
      icon: Lightbulb,
      subtitle: 'First-principles diagnosis',
      description:
        'Methodical troubleshooting approach that isolates root causes rather than applying surface-level patches to complex software bugs.',
    },
    {
      name: 'Analytical Thinker',
      icon: Brain,
      subtitle: 'Rigorous logical reasoning',
      description:
        'Strong quantitative foundation derived from higher-level physics coursework, ensuring sound algorithmic logic and edge-case handling.',
    },
    {
      name: 'Self Motivated',
      icon: Compass,
      subtitle: 'Disciplined self-direction',
      description:
        'Proactively pursues technical roadmaps, completes challenging projects independently, and maintains a structured daily development routine.',
    },
    {
      name: 'Technology Enthusiast',
      icon: Cpu,
      subtitle: 'Genuine passion for tech',
      description:
        'Excited by how modern frontend tooling and AI-accelerated workflows create real-world digital value for end users.',
    },
    {
      name: 'Positive Attitude',
      icon: Smile,
      subtitle: 'Resilient and collaborative',
      description:
        'Welcomes constructive technical criticism, embraces difficult bugs as growth opportunities, and contributes positively to team morale.',
    },
    {
      name: 'Continuous Learning',
      icon: BookOpen,
      subtitle: 'Daily craft refinement',
      description:
        'Consistently expands technical depth through documentation study, hands-on code experimentation, and modern industry best practices.',
    },
  ];

  return (
    <section id="strengths" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#090e1a]/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Core Character & Strengths
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Key qualities I bring to a development team.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Technical skills can be taught; foundational curiosity, analytical rigor, and an enthusiastic mindset are core traits that drive sustained engineering success.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {strengthsList.map((strength, idx) => {
            const Icon = strength.icon;
            const isLast = idx === strengthsList.length - 1;
            return (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 transition-colors shadow-2xs flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {strength.name}
                  </h3>

                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 block mb-2">
                    {strength.subtitle}
                  </span>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Personal Trait</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
