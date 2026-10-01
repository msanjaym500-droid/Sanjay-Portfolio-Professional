'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Brain, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: Target,
      title: 'Career Objective',
      description:
        'To establish a high-impact career as a professional Web Developer by building high-quality, responsive, and performance-driven web applications that solve real-world problems.',
    },
    {
      icon: Brain,
      title: 'Analytical Mindset',
      description:
        'My Physics education at Annamalai University trained me in mathematical deduction, root-cause diagnosis, and methodical troubleshooting — skills that directly translate to clean code architecture.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description:
        'Committed to expanding technical knowledge every day, embracing modern standards, learning from senior peers, and turning curiosity into practical development capability.',
    },
    {
      icon: Sparkles,
      title: 'Pragmatic AI Workflows',
      description:
        'Leveraging AI tools honestly and efficiently for research, planning, brainstorming, and development acceleration, while exercising critical human reasoning over every line of code.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            A disciplined learner building modern digital experiences with analytical rigor.
          </h2>
        </div>

        {/* Professional Summary Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden"
        >
          {/* Subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500" />

          <div className="space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am Sanjay, an AI-Assisted Web Developer with a passion for building modern, user-friendly, and impactful digital experiences. I recently graduated with a Bachelor of Science in Physics from Annamalai University, where I developed strong analytical thinking, logical reasoning, and problem-solving abilities.
            </p>
            <p>
              I enjoy combining creativity with technology to build websites and explore innovative solutions using AI-assisted development workflows. I actively use AI tools to support learning, research, planning, productivity, content creation, and software development, enabling me to work more efficiently while continuously expanding my technical knowledge.
            </p>
            <p>
              My internship in Python Programming at Skibui Technologies strengthened my programming fundamentals, logical thinking, debugging skills, and problem-solving approach. It also reinforced my interest in software development and motivated me to continue learning modern technologies and industry best practices.
            </p>
            <p>
              I believe that continuous learning, adaptability, and discipline are essential qualities for every developer. I am always eager to improve my skills, embrace new challenges, and create digital solutions that provide real value to users. I enjoy working collaboratively, learning from experienced professionals, and contributing with dedication and a positive mindset.
            </p>
            <p className="font-medium text-slate-900 dark:text-white pt-1">
              My goal is to build a successful career as a professional Web Developer by creating high-quality, responsive, and performance-driven web applications. I am committed to growing every day, delivering meaningful work, and making a positive impact through technology.
            </p>
          </div>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Recruiter Guarantee / Integrity Callout */}
        <div className="mt-8 p-5 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-slate-900 dark:text-white font-semibold">Honesty & Integrity Commitment:</strong> All experience, internship credentials, education, and technical capabilities presented in this portfolio reflect my verified personal journey. I do not claim expert-level status where I possess solid fundamentals; I bring enthusiasm, adaptability, and disciplined dedication to every role.
          </p>
        </div>
      </div>
    </section>
  );
}
