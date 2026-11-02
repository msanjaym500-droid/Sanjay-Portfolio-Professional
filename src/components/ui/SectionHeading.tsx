import * as React from 'react';

/**
 * Standardized Section Heading with title and optional description.
 * Adheres to 60-70 character measure and -0.02em letter spacing.
 */
interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 mb-12 md:mb-16 ${centered ? 'text-center mx-auto' : ''} ${className}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] block font-mono-tag">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[#0F172A] dark:text-[#E5E7EB] leading-[1.15] text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-[17px] text-[#475569] dark:text-[#94A3B8] leading-[1.6] max-w-[65ch] text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
