import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteContent } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sanjay | Aspiring Full-Stack Web Developer (AI-Assisted)',
  description:
    'Portfolio of Sanjay, a fresher from Villupuram, Tamil Nadu, who builds websites with AI coding tools and is learning Python and web development.',
  authors: [{ name: 'Sanjay', url: siteContent.personal.linkedinUrl }],
  creator: 'Sanjay',
  openGraph: {
    title: 'Sanjay | Aspiring Full-Stack Web Developer (AI-Assisted)',
    description:
      'Portfolio of Sanjay, a fresher from Villupuram, Tamil Nadu, who builds websites with AI coding tools and is learning Python and web development.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sanjay Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanjay | Aspiring Full-Stack Web Developer (AI-Assisted)',
    description:
      'Portfolio of Sanjay, a fresher from Villupuram, Tamil Nadu, who builds websites with AI coding tools and is learning Python and web development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteContent.personal.name,
    jobTitle: siteContent.personal.roleLine,
    email: siteContent.personal.email,
    sameAs: [siteContent.personal.linkedinUrl],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </head>
      <body className="min-h-screen bg-white text-[#0F172A] dark:bg-[#0B1220] dark:text-[#E5E7EB] antialiased transition-colors duration-150">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
