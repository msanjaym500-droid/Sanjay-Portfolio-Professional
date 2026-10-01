'use client';

import React, { useEffect } from 'react';
import {
  X,
  Briefcase,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Calendar,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface RecruiterBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export function RecruiterBriefModal({
  isOpen,
  onClose,
  onOpenResume,
}: RecruiterBriefModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-brief-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 id="recruiter-brief-title" className="text-base font-bold text-slate-900 dark:text-white">
              Recruiter Snapshot — 60-Second Overview
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close recruiter overview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
          {/* Candidate Matrix Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Target Roles</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                Junior Web Dev / Frontend Intern / Trainee
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Availability</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                Immediate / Flexible
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Work Arrangement</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                On-site / Hybrid / Remote (Villupuram / TN)
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Degree</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                B.Sc Physics, Annamalai University (2023–2026)
              </span>
            </div>
          </div>

          {/* Why Consider Sanjay */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Top 4 Reasons to Consider Sanjay
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-medium block">
                    1. Physics-Trained Problem Solver
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    Approaches bugs with empirical deduction, isolating root causes rather than superficial patching.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-medium block">
                    2. Practical Python & Automation Foundation
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    Hands-on internship experience at Skibui Technologies building file automation scripts and mastering debugging.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-medium block">
                    3. High-Velocity AI-Assisted Workflows
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    Uses AI tools responsibly for research, boilerplate scaffolding, and learning, delivering code faster with human verification.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-medium block">
                    4. Continuous Learning & Honest Discipline
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    Dedicated work ethic, eager to learn from senior engineers, and zero exaggerated claims on abilities.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Connect Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href="mailto:msanjay662006@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Candidate</span>
              </a>

              <a
                href="tel:+919345850520"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 9345850520</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              type="button"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open Full ATS Resume →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
