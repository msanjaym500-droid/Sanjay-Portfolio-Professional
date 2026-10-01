'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Atom,
  Terminal,
  Sparkles,
  Layers,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { ProjectDemoModal, ProjectData } from './ProjectDemoModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projectsList: ProjectData[] = [
    {
      id: 'optics-lab',
      title: 'OpticsLab — Physics Wave & Harmonic Simulator',
      category: 'Scientific Web Simulation',
      tagline: 'Interactive optical wave interference and real-time vector modeling',
      description:
        'A browser-based interactive wave physics visualizer developed to demonstrate harmonic superposition, wavelength variation, and vector mechanics. Combines analytical mathematics from my physics degree with dynamic canvas animation and AI-assisted formula translation.',
      keyFeatures: [
        'Real-time HTML5 canvas rendering of wave frequencies & amplitudes',
        'Harmonic interference visualization with configurable velocities',
        'Analytical mathematical calculations based on classical wave mechanics',
        'Responsive parameter sliders for interactive student exploration',
      ],
      toolsUsed: ['Next.js', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS', 'AI Physics Modeling'],
      accentColor: 'blue',
    },
    {
      id: 'py-automate',
      title: 'PyAutomate — Python Workflow & File Categorizer',
      category: 'Python Automation & Tooling',
      tagline: 'Batch filesystem reorganization, automated audit logs, and exception handling',
      description:
        'A practical desktop and server-side automation utility conceived during my Python internship at Skibui Technologies. Recursively scans directories, classifies files according to extension heuristics, and generates audit logs with robust exception handling.',
      keyFeatures: [
        'Automated recursive directory parsing using Python pathlib and os',
        'Batch classification and safe atomic file transfer',
        'Detailed execution log generator for audit verification',
        'Error isolation for read-only permissions and unhandled file formats',
      ],
      toolsUsed: ['Python 3', 'Pathlib', 'Regular Expressions', 'File I/O', 'Automation Scripting'],
      accentColor: 'emerald',
    },
    {
      id: 'dev-sprint',
      title: 'DevSprint — AI-Assisted Study & Sprint Tracker',
      category: 'Productivity & Planning',
      tagline: 'Structured learning milestones, markdown notes export, and sprint cadence',
      description:
        'A minimalist web application engineered for self-directed developers to structure daily coding sprints, document research insights, and break down complex learning roadmaps into actionable tasks. Demonstrates prompt-planned component architecture and local persistence.',
      keyFeatures: [
        'Milestone task management with real-time status toggling',
        'Markdown study summary exporter for easy documentation',
        'Client-side state persistence without external database lag',
        'Mobile-friendly responsive touch layout with accessibility considerations',
      ],
      toolsUsed: ['React', 'Next.js', 'LocalStorage API', 'Tailwind CSS', 'Lucide Icons'],
      accentColor: 'purple',
    },
    {
      id: 'portfolio-prime',
      title: 'Sanjay Developer Portfolio & ATS Resume Suite',
      category: 'Frontend Engineering',
      tagline: 'Recruiter-focused, accessible, agency-grade web showcase',
      description:
        'A personal portfolio and interactive resume engine built from the ground up to reflect modern frontend standards: strict zero-pill typographic discipline, WCAG AA contrast compliance, dark and light theme switching, and instant print-to-PDF resume generation.',
      keyFeatures: [
        'Strict adherence to the 3-zone Top Bar Contract and Zero-Pill discipline',
        'Print-optimized ATS resume view triggered directly from the browser',
        'Zero reliance on fragile third-party CDNs or external image hosts',
        'Interactive live simulators for all demonstrated projects',
      ],
      toolsUsed: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO Schema.org'],
      accentColor: 'sky',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Real projects demonstrating code, automation, and AI workflows.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Every project below represents genuine work built on solid fundamentals. Click any project to open an interactive live working demonstration right inside your browser.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header / Mockup Banner */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="h-48 sm:h-52 w-full bg-slate-900 dark:bg-[#070b14] border-b border-slate-100 dark:border-slate-800 relative cursor-pointer overflow-hidden p-5 flex flex-col justify-between"
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {project.id === 'optics-lab' && (
                      <svg className="w-full h-full" viewBox="0 0 400 150">
                        <path d="M0,75 Q100,20 200,75 T400,75" fill="none" stroke="#3b82f6" strokeWidth="2" />
                        <path d="M0,75 Q100,130 200,75 T400,75" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" />
                      </svg>
                    )}
                    {project.id === 'py-automate' && (
                      <div className="p-4 font-mono text-[10px] text-emerald-400 opacity-40">
                        &gt; scanning directory...<br />
                        &gt; 14 items categorized<br />
                        &gt; log status: SUCCESS
                      </div>
                    )}
                    {project.id === 'dev-sprint' && (
                      <div className="grid grid-cols-3 gap-2 p-3">
                        <div className="h-16 rounded bg-slate-800 border border-slate-700" />
                        <div className="h-16 rounded bg-slate-800 border border-slate-700" />
                        <div className="h-16 rounded bg-slate-800 border border-slate-700" />
                      </div>
                    )}
                    {project.id === 'portfolio-prime' && (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center font-mono text-xs text-blue-400">
                          &lt;semantic-html-5&gt;
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Top Bar inside thumbnail */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                      {project.id === 'optics-lab' && <Atom className="w-4 h-4 text-blue-400" />}
                      {project.id === 'py-automate' && <Terminal className="w-4 h-4 text-emerald-400" />}
                      {project.id === 'dev-sprint' && <Sparkles className="w-4 h-4 text-purple-400" />}
                      {project.id === 'portfolio-prime' && <Layers className="w-4 h-4 text-sky-400" />}
                      {project.category}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 text-white text-[11px] font-medium backdrop-blur-xs group-hover:bg-blue-600 transition-colors">
                      <Eye className="w-3 h-3" />
                      Interactive Demo
                    </span>
                  </div>

                  {/* Bottom title overlay */}
                  <div className="relative z-10">
                    <span className="text-xs text-blue-400 font-mono block">
                      Featured Showcase
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                        Core Capabilities:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                        {project.keyFeatures.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                    {/* Zero-Pill Unboxed Tools Metadata with Separators */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Tools:</span>
                      {project.toolsUsed.map((tool, tIdx) => (
                        <React.Fragment key={tool}>
                          {tIdx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                          <span>{tool}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        type="button"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </button>

                      <button
                        onClick={() => setSelectedProject(project)}
                        type="button"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                        title="View Architecture & Source Code Details"
                        aria-label={`View ${project.title} code and details`}
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>GitHub / Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectDemoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
