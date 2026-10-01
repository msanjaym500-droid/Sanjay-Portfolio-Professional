'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Terminal,
  Sparkles,
  FileSpreadsheet,
  FileText,
  Presentation,
  Palette,
  Lightbulb,
  Brain,
  Zap,
  MessageSquare,
  RefreshCw,
  Users,
  Smile,
  BookOpen,
} from 'lucide-react';

type SkillCategory = 'all' | 'technical' | 'soft' | 'productivity';

interface SkillItem {
  name: string;
  category: 'technical' | 'soft' | 'productivity';
  level: string;
  icon: React.ElementType;
  description: string;
  practicalUsage: string;
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('all');

  const skills: SkillItem[] = [
    // Technical Skills
    {
      name: 'AI-Assisted Web Development',
      category: 'technical',
      level: 'Core Competency',
      icon: Code,
      description: 'Building modern responsive web layouts, combining HTML/CSS/JavaScript concepts with AI-assisted development tools for rapid prototyping and iteration.',
      practicalUsage: 'Component architecture, responsive styling, prompt-driven prototyping, and code refinement.',
    },
    {
      name: 'Python Programming (Fundamentals)',
      category: 'technical',
      level: 'Foundation & Automation',
      icon: Terminal,
      description: 'Solid understanding of Python core concepts gained through hands-on training and internship projects at Skibui Technologies.',
      practicalUsage: 'Data structures, file handling scripts, simple automation workflows, logic structuring, and debugging.',
    },
    {
      name: 'AI Tools',
      category: 'technical',
      level: 'Workflow Integration',
      icon: Sparkles,
      description: 'Active, pragmatic utilization of modern AI platforms to accelerate research, brainstorming, documentation, and troubleshooting.',
      practicalUsage: 'Prompt engineering, code explanation, regex drafting, architecture planning, and learning new APIs.',
    },
    // Office & Productivity / Creative Tools
    {
      name: 'Microsoft Word',
      category: 'productivity',
      level: 'Proficient',
      icon: FileText,
      description: 'Structuring clear documentation, formal reports, and academic research papers with proper typography and layout formatting.',
      practicalUsage: 'Technical briefs, project summaries, and formal correspondence.',
    },
    {
      name: 'Microsoft Excel',
      category: 'productivity',
      level: 'Data Analysis & Formulas',
      icon: FileSpreadsheet,
      description: 'Organizing datasets, utilizing analytical formulas, sorting, filtering, and tabulating physics lab observations.',
      practicalUsage: 'Data tabulation, spreadsheet modeling, and automated calculations.',
    },
    {
      name: 'Microsoft PowerPoint',
      category: 'productivity',
      level: 'Presentations',
      icon: Presentation,
      description: 'Designing clean, visually compelling slide decks to communicate project architectures, seminars, and technical overviews.',
      practicalUsage: 'Academic seminars, project walkthroughs, and team visual decks.',
    },
    {
      name: 'Canva',
      category: 'productivity',
      level: 'Visual Design',
      icon: Palette,
      description: 'Creating crisp graphic assets, banners, social mockups, and presentations with balanced typography and color palettes.',
      practicalUsage: 'Portfolio visual thumbnails, UI mockups, and branding assets.',
    },
    // Soft Skills
    {
      name: 'Problem Solving',
      category: 'soft',
      level: 'Analytical Strength',
      icon: Lightbulb,
      description: 'Breaking down complex challenges into modular, solvable components using systematic first-principles thinking.',
      practicalUsage: 'Debugging code, identifying root causes, and finding efficient solutions.',
    },
    {
      name: 'Analytical Thinking',
      category: 'soft',
      level: 'Physics Foundation',
      icon: Brain,
      description: 'Cultivated through rigorous B.Sc Physics coursework; evaluating logic, quantitative data, and algorithmic soundness.',
      practicalUsage: 'Evaluating algorithmic efficiency, edge-case testing, and structured reasoning.',
    },
    {
      name: 'Quick Learner',
      category: 'soft',
      level: 'High Adaptability',
      icon: Zap,
      description: 'A dedicated self-starter with the ability to rapidly assimilate new libraries, tools, and technical concepts.',
      practicalUsage: 'Transitioning from physics theory into practical programming and web technologies.',
    },
    {
      name: 'Communication',
      category: 'soft',
      level: 'Collaborative',
      icon: MessageSquare,
      description: 'Clear, respectful, and articulate communication of ideas, progress updates, and technical inquiries.',
      practicalUsage: 'Team discussions, documentation clarity, and active listening.',
    },
    {
      name: 'Adaptability',
      category: 'soft',
      level: 'Flexible Mindset',
      icon: RefreshCw,
      description: 'Eagerly embracing changing requirements, new tools, and constructive feedback from experienced mentors.',
      practicalUsage: 'Adapting to modern dev workflows, code review recommendations, and tech shifts.',
    },
    {
      name: 'Teamwork',
      category: 'soft',
      level: 'Collaborative Spirit',
      icon: Users,
      description: 'Enjoys working collaboratively with cross-functional peers, sharing knowledge, and contributing to shared milestones.',
      practicalUsage: 'Pair programming, group seminars, and cooperative project delivery.',
    },
    {
      name: 'Positive Attitude',
      category: 'soft',
      level: 'Growth Orientation',
      icon: Smile,
      description: 'Approaching challenges with optimism, persistence, and genuine enthusiasm for growth.',
      practicalUsage: 'Resilience when debugging tricky errors and welcoming new learning opportunities.',
    },
    {
      name: 'Continuous Learning',
      category: 'soft',
      level: 'Core Discipline',
      icon: BookOpen,
      description: 'A lifelong commitment to expanding capabilities, exploring emerging practices, and refining craft daily.',
      practicalUsage: 'Daily practice, exploring web developer roadmaps, and continuous self-study.',
    },
  ];

  const filteredSkills = skills.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#090e1a]/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Skills & Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Technical foundations, productivity tools, and analytical soft skills.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Honest representation of practical capabilities developed through hands-on Python training, physics problem solving, and modern AI-assisted web workflows.
            </p>
          </div>

          {/* Filter Segmented Control (Zero-Pill compliant functional button group) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-lg shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Skills ({skills.length})
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'technical'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveTab('productivity')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'productivity'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Office & Creative
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'soft'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-2xs hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    {/* Clean unboxed metadata separator */}
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300 block mb-0.5">
                    Practical Application:
                  </span>
                  {skill.practicalUsage}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
