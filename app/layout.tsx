import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Maison Aure — Fine, Estate & High Jewelry | New York',
    template: '%s | Maison Aure',
  },
  description:
    'Maison Aure presents an extraordinary collection of fine jewelry, estate jewelry, high jewelry, and bridal pieces. Private appointments in New York.',
  keywords: [
    'luxury jewelry',
    'estate jewelry',
    'high jewelry',
    'fine jewelry',
    'engagement rings',
    'New York jewelry',
    'private jeweler',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maisonaure.com',
    siteName: 'Maison Aure',
    title: 'Maison Aure — Fine, Estate & High Jewelry',
    description:
      'Extraordinary jewelry presented by private appointment in New York.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Maison Aure Jewelry',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
