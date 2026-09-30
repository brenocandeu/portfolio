import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://site.com.br'), // Mudar depois para o dominio real
  title: {
    default: 'Breno | Frontend Developer',
    template: '%s | Breno',
  },
  description: 'Portfólio de Breno, Desenvolvedor Frontend focado em construir interfaces modernas, performáticas e minimalistas com React e Next.js.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Portfolio', 'Desenvolvedor Web', 'UI/UX'],
  authors: [{ name: 'Breno' }],
  creator: 'Breno',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://site.com.br',  // Mudar depois para o dominio real
    title: 'Breno | Frontend Developer',
    description: 'Portfólio de Breno, Desenvolvedor Frontend focado em construir interfaces modernas e minimalistas.',
    siteName: 'Breno Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Breno - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breno | Frontend Developer',
    description: 'Portfólio de Breno, Desenvolvedor Frontend focado em construir interfaces modernas e minimalistas.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
