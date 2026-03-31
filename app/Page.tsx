'use client';
import Link from 'next/link';
import { Play, Globe, Zap, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Top Nav */}
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-1.5 rounded-full text-sm mb-6">
            🇪🇹 Built for Ethiopian Creators
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Cinematic Videos in<br />
            <span className="ethio-gradient bg-clip-text text-transparent">Amharic, Afaan Oromo,</span><br />
            Somali & Tigrinya
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Turn your ideas into professional AI videos with native Ethiopian voices, cinematic visuals, and auto-posting to social media.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard/generate">
              <button className="ethio-gradient text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:scale-105 transition">
                Generate Your First Video – Free Trial
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="border border-zinc-700 hover:bg-zinc-900 px-10 py-5 rounded-2xl text-xl font-medium transition">
                Watch Demo
              </button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-zinc-500">
            Trusted by creators in Addis Ababa • 100% Ethiopian language support
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Creators Love EthioVideo AI</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <Globe className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Native Languages</h3>
              <p className="text-zinc-400">High-quality Amharic & Afaan Oromo voices with Addis AI + ElevenLabs fallback. Perfect Ge’ez script support.</p>
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <Zap className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Cinematic Quality</h3>
              <p className="text-zinc-400">Ken Burns motion, DALL·E/Flux images, layered music, accurate subtitles, and multi-format export (TikTok, Reels, YouTube).</p>
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Auto Distribution</h3>
              <p className="text-zinc-400">Generate once → auto-post to Telegram. TikTok & Facebook ready. Save hours every week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to create your first viral video?</h2>
          <Link href="/dashboard/generate">
            <button className="ethio-gradient text-white px-16 py-6 rounded-2xl text-2xl font-semibold">
              Start Generating – Get 10 Free Credits
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
```
