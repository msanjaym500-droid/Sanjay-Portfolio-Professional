'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export function EducationTimeline() {
  const academicMilestones = [
    {
      year: '2025 – 2026',
      phase: 'Final Year · Advanced Synthesis & Computational Logic',
      description:
        'Focus on Quantum Mechanics, Solid State Physics, Optics, and experimental deduction. Applied analytical modeling and computational methods to solve complex theoretical problems.',
      skills: ['Computational Logic', 'Experimental Analysis', 'Statistical Reasoning'],
    },
    {
      year: '2024 – 2025',
      phase: 'Second Year · Electromagnetism, Wave Dynamics & Algorithms',
      description:
        'Deep study into electromagnetism, wave phenomena, and mathematical physics. Formulated differential equation models and began cross-applying analytical methods to programming structures.',
      skills: ['Mathematical Physics', 'Wave Motion', 'Algorithmic Decomposition'],
    },
    {
      year: '2023 – 2024',
      phase: 'First Year · Core Mechanics & First-Principles Foundation',
      description:
        'Foundational grounding in classical mechanics, properties of matter, vector calculus, and laboratory experimentation. Developed disciplined scientific rigor and meticulous note-taking.',
      skills: ['Classical Mechanics', 'Vector Calculus', 'Scientific Rigor'],
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Education & Analytical Training.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A Bachelor of Science in Physics from Annamalai University providing the analytical, logical, and mathematical backbone for my engineering mindset.
          </p>
        </div>

        {/* Degree Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Undergraduate Degree
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Bachelor of Science (Physics)
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Annamalai University
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:border-l md:border-slate-200 dark:md:border-slate-800 md:pl-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">2023 – 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Chidambaram / Tamil Nadu</span>
            </div>
          </div>
        </motion.div>

        {/* Beautiful Timeline */}
        <div className="relative border-l-2 border-blue-500/20 dark:border-blue-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {academicMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#070b14] border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 transition-colors shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {milestone.year}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                    Academic Timeline
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {milestone.phase}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {/* Zero-Pill Unboxed Key Competency Separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Core Areas:</span>
                  {milestone.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      {sIdx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                      <span>{skill}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Physics Makes a Great Web Developer callout */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            The Physics-to-Code Advantage
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Physics instills a relentless discipline of first-principles thinking: observing anomalies, formulating testable hypotheses, isolating variables, and proving solutions systematically. In modern web development, these exact habits prevent guess-and-check coding, leading to clean debugging, robust architecture, and dependable software execution.
          </p>
        </div>
      </div>
    </section>
  );
}
