import Link from 'next/link';

/**
 * Clean, friendly 404 page
 * "This page does not exist." with a "Back to home" button.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-[#0B1220] text-[#0F172A] dark:text-[#E5E7EB]">
      <div className="max-w-md space-y-4">
        <span className="text-4xl font-bold text-[#2563EB] dark:text-[#60A5FA]">
          404
        </span>
        <h1 className="text-2xl font-bold tracking-tight">
          This page does not exist.
        </h1>
        <p className="text-[#475569] dark:text-[#94A3B8] text-[16px]">
          The page you are looking for may have been moved or does not exist.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-[15px] transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
