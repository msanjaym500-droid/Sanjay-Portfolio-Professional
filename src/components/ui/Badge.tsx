import * as React from 'react';

/**
 * Clean Badge component for status markers and metadata.
 * Uses tasteful borders and clean typographic styling rather than garish candy pills.
 */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'neutral' | 'accent' | 'success';
}

export function Badge({
  children,
  className = '',
  variant = 'neutral',
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral:
      'bg-[#F8FAFC] dark:bg-[#111A2E] text-[#475569] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#1E293B]',
    accent:
      'bg-blue-50/80 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#60A5FA] border-blue-200/70 dark:border-blue-900/50',
    success:
      'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200/70 dark:border-emerald-900/50',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
