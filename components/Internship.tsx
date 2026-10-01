'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Calendar,
  CheckCircle2,
  Terminal,
  FileCode2,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';

export function Internship() {
  const [copiedCode, setCopiedCode] = useState(false);

  const samplePythonScript = `# ==========================================
# Skibui Technologies Internship Project
# Topic: Simple File Automation & Categorizer
# Developer: Sanjay (Python Programming Intern)
# ==========================================

import os
import shutil
from pathlib import Path

def organize_workspace(directory_path: str):
    """
    Categorizes messy directory files into structured subfolders:
    Documents, Datasets, Scripts, and Archives.
    Strengthened file I/O & exception handling during internship.
    """
    target_dir = Path(directory_path)
    if not target_dir.exists():
        print(f"[Error] Path does not exist: {directory_path}")
        return

    file_rules = {
        'Documents': ['.txt', '.docx', '.pdf'],
        'Datasets': ['.csv', '.xlsx', '.json'],
        'Scripts': ['.py', '.sh', '.js'],
    }

    processed_count = 0
    for file_path in target_dir.iterdir():
        if file_path.is_file():
            ext = file_path.suffix.lower()
            destination_folder = 'Others'

            for folder_name, extensions in file_rules.items():
                if ext in extensions:
                    destination_folder = folder_name
                    break

            dest_path = target_dir / destination_folder
            dest_path.mkdir(exist_ok=True)
            shutil.move(str(file_path), str(dest_path / file_path.name))
            processed_count += 1

    print(f"[Success] Successfully categorized {processed_count} files.")

if __name__ == '__main__':
    print("Python Automation Script initialized successfully.")`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(samplePythonScript);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const responsibilities = [
    {
      title: 'Completed Hands-on Python Training',
      desc: 'Immersed in intensive practical sessions covering syntax fundamentals, data structures (lists, dictionaries, tuples), and control flow.',
    },
    {
      title: 'Learned Python Fundamentals',
      desc: 'Mastered modular programming principles, function definitions, standard libraries, and error handling with try/except blocks.',
    },
    {
      title: 'Developed Simple Automation Scripts',
      desc: 'Authored scripts for local directory management, text file parsing, automated batch renaming, and clean data categorization.',
    },
    {
      title: 'Improved Logical Thinking',
      desc: 'Practiced algorithmic decomposition, breaking complex logical requirements down into sequential, testable procedural steps.',
    },
    {
      title: 'Strengthened Debugging Skills',
      desc: 'Acquired hands-on experience interpreting traceback logs, isolating syntax/runtime exceptions, and applying disciplined fixes.',
    },
    {
      title: 'Improved Problem-Solving Ability',
      desc: 'Applied programming techniques to practical automation challenges, establishing confidence in software development workflows.',
    },
  ];

  return (
    <section id="internship" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#090e1a]/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Python Programming Internship at Skibui Technologies.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A milestone experience that cemented my programming fundamentals, logical reasoning, and passion for software engineering.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Organization & Responsibilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Python Programming Intern
                    </h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Skibui Technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>15 May 2025 – 15 June 2025</span>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Responsibilities & Competencies Acquired
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {responsibilities.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5 block">
                          {item.desc}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Demonstration / Automation Artifact */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-2xl bg-slate-900 dark:bg-[#070b14] border border-slate-800 shadow-xl overflow-hidden">
              {/* Code Editor Header */}
              <div className="px-4 py-3 bg-slate-800/70 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-300 font-mono text-[11px] ml-2 flex items-center gap-1">
                    <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
                    automation_organizer.py
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  type="button"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-200 text-[11px] transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet */}
              <pre className="p-4 text-[11px] font-mono leading-relaxed text-slate-300 overflow-x-auto max-h-[360px] scrollbar-thin">
                <code>{samplePythonScript}</code>
              </pre>

              <div className="p-3 bg-slate-800/40 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  Python 3.11+ Executable Sample
                </span>
                <span className="text-slate-500">Skibui Tech Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
