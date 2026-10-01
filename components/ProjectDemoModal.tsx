'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  RotateCcw,
  CheckCircle,
  ExternalLink,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  FileText,
  Sliders,
  FolderOpen,
} from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  toolsUsed: string[];
  githubUrl?: string;
  accentColor: string;
}

interface ProjectDemoModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectDemoModal({ project, onClose }: ProjectDemoModalProps) {
  // Wave Simulation State for OpticsLab
  const [amplitude, setAmplitude] = useState<number>(35);
  const [frequency, setFrequency] = useState<number>(2);
  const [waveSpeed, setWaveSpeed] = useState<number>(1.5);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // PyAutomate State
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processedLog, setProcessedLog] = useState<string[]>([
    'System ready. Select a mock folder and run sorting script.',
  ]);

  // DevSprint State
  const [tasks, setTasks] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: 'Review Python function scopes & recursion', done: true },
    { id: 2, text: 'Build responsive navigation for portfolio', done: true },
    { id: 3, text: 'Test WCAG color contrast across dark/light mode', done: false },
    { id: 4, text: 'Structure AI prompt workflow documentation', done: false },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Canvas wave animation loop for OpticsLab
  useEffect(() => {
    if (!project || project.id !== 'optics-lab') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth || 600;
        canvas.height = 180;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Draw axis
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Primary Wave
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = centerY + Math.sin((x * frequency * 0.02) + step) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Secondary Interference Harmonic
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = centerY + Math.cos((x * (frequency * 1.5) * 0.02) + step * 0.8) * (amplitude * 0.6);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      step += 0.03 * waveSpeed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [project, amplitude, frequency, waveSpeed]);

  if (!project) return null;

  const handleRunPyScript = () => {
    setIsProcessing(true);
    setProcessedLog([
      'Scanning /home/user/downloads...',
      'Detected 14 unorganized files: [notes.txt, data.csv, report.docx, script.py, image.png...]',
    ]);

    setTimeout(() => {
      setProcessedLog((prev) => [
        ...prev,
        'Creating subdirectories: /Documents, /Datasets, /Scripts, /Archives',
        'Moving 4 text documents -> /Documents [OK]',
        'Moving 3 dataset tables -> /Datasets [OK]',
        'Moving 2 python automation files -> /Scripts [OK]',
      ]);
    }, 600);

    setTimeout(() => {
      setProcessedLog((prev) => [
        ...prev,
        'Cleaning temp caches...',
        'Execution complete. 14 files organized with 0 errors.',
      ]);
      setIsProcessing(false);
    }, 1200);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTaskInput.trim(), done: false }]);
    setNewTaskInput('');
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/60 dark:bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <div>
              <h3 id="project-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {project.title}
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                  · Interactive Live Demo
                </span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Tagline & Overview */}
          <div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Interactive Live Demo Workspace Container */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span className="flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5" />
                Live Working Simulation
              </span>
              <span className="text-slate-400 font-mono text-[11px] capitalize">
                Client-Side Sandbox
              </span>
            </div>

            {/* DEMO 1: OpticsLab Wave Simulation */}
            {project.id === 'optics-lab' && (
              <div className="space-y-4">
                <div className="rounded-lg bg-slate-900 p-3 border border-slate-800 relative overflow-hidden">
                  <canvas
                    ref={canvasRef}
                    width={700}
                    height={180}
                    className="w-full h-[180px] block"
                  />
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    Harmonic Superposition Canvas
                  </div>
                </div>

                {/* Simulation Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Amplitude</span>
                      <span className="font-mono">{amplitude}px</span>
                    </div>
                    <input
                      type="range"
                      aria-label="Adjust wave amplitude"
                      min={10}
                      max={65}
                      value={amplitude}
                      onChange={(e) => setAmplitude(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Frequency</span>
                      <span className="font-mono">{frequency} Hz</span>
                    </div>
                    <input
                      type="range"
                      aria-label="Adjust wave frequency"
                      min={1}
                      max={6}
                      value={frequency}
                      onChange={(e) => setFrequency(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Velocity</span>
                      <span className="font-mono">{waveSpeed}x</span>
                    </div>
                    <input
                      type="range"
                      aria-label="Adjust wave velocity"
                      min={0.5}
                      max={4}
                      step={0.5}
                      value={waveSpeed}
                      onChange={(e) => setWaveSpeed(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 2: PyAutomate Script Runner */}
            {project.id === 'py-automate' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Simulate execution of Sanjay&apos;s batch directory automation script.
                  </span>
                  <button
                    onClick={handleRunPyScript}
                    disabled={isProcessing}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{isProcessing ? 'Processing...' : 'Run Python Script'}</span>
                  </button>
                </div>

                <div className="rounded-lg bg-slate-950 p-4 font-mono text-xs text-slate-300 border border-slate-800 space-y-1 max-h-[190px] overflow-y-auto">
                  <div className="text-slate-500 mb-2">$ python3 organize_workspace.py</div>
                  {processedLog.map((log, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEMO 3: DevSprint Milestone Planner */}
            {project.id === 'dev-sprint' && (
              <div className="space-y-3">
                <form onSubmit={handleAddTask} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a new sprint task (e.g. Master CSS Grid syntax)..."
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Add Task
                  </button>
                </form>

                <div className="space-y-1.5 max-h-[180px] overflow-y-auto">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => handleToggleTask(task.id)}
                      className="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-xs cursor-pointer hover:border-blue-500/50"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                            task.done
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-slate-400 dark:border-slate-600'
                          }`}
                        >
                          {task.done && <CheckCircle className="w-3 h-3" />}
                        </span>
                        <span className={task.done ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}>
                          {task.text}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {task.done ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEMO 4: Portfolio Prime Architecture */}
            {project.id === 'portfolio-prime' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 block font-mono">100%</span>
                    <span className="text-[11px] text-slate-500">WCAG AA Contrast</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400 block font-mono">0 pills</span>
                    <span className="text-[11px] text-slate-500">Zero-Pill Discipline</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400 block font-mono">&lt; 1.0s</span>
                    <span className="text-[11px] text-slate-500">First Paint Target</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400 block font-mono">ATS</span>
                    <span className="text-[11px] text-slate-500">Printable Resume</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic text-center pt-1">
                  Engineered with semantic HTML5, zero reliance on external fragile CDNs, and seamless theme persistence.
                </p>
              </div>
            )}
          </div>

          {/* Key Features & Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Key Features
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Tools & Technologies Used
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                {project.toolsUsed.map((tool, tIdx) => (
                  <React.Fragment key={tool}>
                    {tIdx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                    <span className="py-0.5">{tool}</span>
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                <span>Created with honest foundational skills & AI-assisted development acceleration.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <a
            href="https://www.linkedin.com/in/sanjay-sanjay-10479231b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            <span>View Sanjay&apos;s Project Profile on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
