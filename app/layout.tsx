import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GetFlaire - Pige immobilière nouvelle génération',
  description: 'Pige, alertes, surveillance et CRM réunis dans une seule application. Boostez votre prospection immobilière avec GetFlaire.',
  keywords: 'pige immobilière, CRM immobilier, surveillance concurrence, alertes immobilières, prospection immobilière',
  icons: {
    icon: '/GetFlaire_Faticon_16x16.png',
    shortcut: '/GetFlaire_Faticon_16x16.png',
    apple: '/GetFlaire_Faticon_16x16.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}