import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'General Relativity ? Philosophy',
  description:
    'A clear, structured exploration of the philosophical ideas behind Einstein\'s general relativity: spacetime, equivalence, measurement, causality, realism, and explanation.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <Nav />
        <main className="mx-auto w-full max-w-4xl px-6 pb-20 pt-8 sm:pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
