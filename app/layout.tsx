import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Industrial Cleaning & Water Jetting Services | Oil & Gas',
  description: 'Premium industrial cleaning solutions for the oil and gas industry, specializing in high-pressure water jetting and shutdown maintenance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white text-slate-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
