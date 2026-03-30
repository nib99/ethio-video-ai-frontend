'use client';
import Link from 'next/link';
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import { Play, Globe, Zap, Users } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎬</div>
          <span className="font-bold text-2xl">EthioVideo AI</span>
        </div>
        <div className="flex items-center gap-6">
          <SignInButton mode="modal">
            <button className="text-sm font-medium hover:text-orange-400">Sign In</button>
          </SignInButton>
          <Link href="/dashboard/generate">
            <button className="ethio-gradient px-8 py-3 rounded-2xl text-sm font-semibold">
              Start Free
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero + Features + CTA - Same as previous but cleaner */}
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
          Professional Videos in<br />
          <span className="ethio-gradient bg-clip-text text-transparent">Ethiopian Languages</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-10">
          AI-powered cinematic videos with native Amharic, Afaan Oromo, Somali & Tigrinya voices.
        </p>
        <Link href="/dashboard/generate">
          <button className="ethio-gradient text-white px-12 py-6 rounded-2xl text-xl font-bold">
            Generate Your First Video Free
          </button>
        </Link>
      </section>
    </div>
  );
}
