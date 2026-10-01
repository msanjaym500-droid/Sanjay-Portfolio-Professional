import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Sanjay — AI-Assisted Web Developer Portfolio',
  description:
    'Official portfolio of Sanjay, an AI-Assisted Web Developer and Physics graduate from Annamalai University based in Tamil Nadu, India. Skilled in web development, Python fundamentals, and AI-accelerated workflows.',
  keywords: [
    'Sanjay',
    'AI-Assisted Web Developer',
    'Frontend Developer',
    'Web Developer India',
    'Villupuram',
    'Tamil Nadu',
    'Annamalai University',
    'Python Developer Intern',
    'Physics Graduate'
  ],
  authors: [{ name: 'Sanjay', url: 'https://www.linkedin.com/in/sanjay-sanjay-10479231b' }],
  creator: 'Sanjay',
  openGraph: {
    title: 'Sanjay — AI-Assisted Web Developer Portfolio',
    description:
      'Explore the personal portfolio of Sanjay: AI-Assisted Web Developer, Physics graduate, and Python Intern. View projects, skills, education, and resume.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sanjay Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanjay — AI-Assisted Web Developer Portfolio',
    description:
      'Explore the personal portfolio of Sanjay: AI-Assisted Web Developer, Physics graduate, and Python Intern.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sanjay',
  jobTitle: 'AI-Assisted Web Developer',
  email: 'msanjay662006@gmail.com',
  telephone: '+919345850520',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Villupuram',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'India',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Annamalai University',
  },
  knowsAbout: [
    'AI-Assisted Web Development',
    'Web Development',
    'Python Programming',
    'Physics',
    'Analytical Problem Solving',
    'Automation Scripts'
  ],
  sameAs: [
    'https://www.linkedin.com/in/sanjay-sanjay-10479231b'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070b14] dark:text-slate-100 antialiased transition-colors duration-200 selection:bg-blue-600 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
