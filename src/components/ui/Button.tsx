import * as React from 'react';

/**
 * Accessible button component supporting primary and secondary outline variants.
 * Guarantees minimum 44px touch target height for mobile ergonomics and WCAG compliance.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      asLink = false,
      href,
      target,
      rel,
      download,
      icon,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-200 cursor-pointer rounded-lg text-center select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2';

    const sizeStyles =
      size === 'lg'
        ? 'min-h-[48px] px-6 py-3 text-[16px] gap-2.5'
        : 'min-h-[44px] px-5 py-2.5 text-[15px] gap-2';

    const variantStyles =
      variant === 'primary'
        ? 'bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] text-white shadow-xs focus-visible:outline-[#2563EB]'
        : 'bg-transparent text-[#0F172A] dark:text-[#E5E7EB] border border-[#E2E8F0] dark:border-[#1E293B] hover:bg-[#F8FAFC] dark:hover:bg-[#111A2E] hover:border-[#CBD5E1] dark:hover:border-[#334155] focus-visible:outline-[#2563EB]';

    const combinedClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

    if (asLink && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={combinedClassName}
        >
          {icon && <span aria-hidden="true">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {icon && <span aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
