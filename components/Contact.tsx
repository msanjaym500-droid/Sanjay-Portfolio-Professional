'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'msanjay662006@gmail.com';
  const phoneNumber = '+91 9345850520';
  const linkedInUrl = 'https://www.linkedin.com/in/sanjay-sanjay-10479231b';
  const locationString = 'Villupuram, Tamil Nadu, India';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s+/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyDraft = () => {
    const draftText = `To: ${emailAddress}\nSubject: ${formState.subject || 'Portfolio Inquiry'}\n\nHi Sanjay,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setEmailError('Please provide a valid email address (e.g. name@domain.com)');
      return;
    }
    setEmailError('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    formState.subject || `Inquiry from ${formState.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Let&apos;s discuss opportunities, internships, or web projects.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            I am currently open to Junior Web Developer roles, frontend internships, and collaborative development opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Location Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Contact Cards */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Direct Channels
              </h3>

              {/* Email Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block font-medium">Email</span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block font-medium">Phone & WhatsApp</span>
                    <a
                      href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  type="button"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900/40 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block font-medium">LinkedIn Profile</span>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors truncate block"
                    >
                      linkedin.com/in/sanjay-sanjay-10479231b
                    </a>
                  </div>
                </div>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Open LinkedIn in new tab"
                  aria-label="Open LinkedIn Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Base Location</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>IST (UTC +5:30)</span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {locationString}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Coordinates: 11.9401° N, 79.4861° E · Willing to relocate or work remotely
                </p>
              </div>

              {/* Styled Maps Visualizer Container */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-4 relative">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Tamil Nadu Tech Corridor
                  </span>
                  <a
                    href="https://maps.google.com/?q=Villupuram,+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Abstract Stylized Map Grid representation */}
                <div className="h-28 rounded-lg bg-slate-200 dark:bg-slate-900/90 flex flex-col items-center justify-center relative overflow-hidden text-center p-3">
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping absolute" />
                    <span className="w-3 h-3 rounded-full bg-rose-600 relative mb-1" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Villupuram
                    </span>
                    <span className="text-[10px] text-slate-500">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Have a question, job opportunity, or project inquiry? Drop a note below and I will reply within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Message Prepared Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-1">
                      You can send this inquiry directly to <span className="font-semibold">{emailAddress}</span> via your favorite email app or copy the formatted draft.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Launch Mail Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Draft Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Draft</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      type="button"
                      className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (emailError) setEmailError('');
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 ${
                          emailError
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500'
                        }`}
                      />
                      {emailError && (
                        <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{emailError}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Subject / Role Title
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Junior Web Developer Opportunity / Internship"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell me about the project, role requirements, or your organization..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Direct delivery to msanjay662006@gmail.com
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg transition-all shadow-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Preparing...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
