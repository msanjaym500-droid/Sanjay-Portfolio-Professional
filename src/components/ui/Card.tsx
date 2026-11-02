import * as React from 'react';

/**
 * Clean Card container with 14px radius, 1px hairline border, and gentle hover elevation.
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = '',
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-[14px] bg-white dark:bg-[#111A2E] border border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-200 ${
        hoverEffect ? 'hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-[2px]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
