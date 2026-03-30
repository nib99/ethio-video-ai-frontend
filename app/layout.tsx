import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'EthioVideo AI – Cinematic Videos in Ethiopian Languages',
  description: 'Create professional Amharic, Afaan Oromo, Somali & Tigrinya videos with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className="bg-zinc-950 text-white min-h-screen">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
