'use client';

import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { Globe, Zap, Users, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Landing() {
  const { isSignedIn } = useUser();

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      
      {/* Background Video - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 z-0 md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-fallback.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-zinc-800 px-6 lg:px-8 py-5 flex justify-between items-center bg-zinc-950/90 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎬</div>
          <span className="font-bold text-2xl tracking-tight">EthioVideo AI</span>
        </div>

        <div className="flex items-center gap-6">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button className="text-sm font-medium hover:text-orange-400 transition-colors">
                Sign In
              </button>
            </SignInButton>
          )}
          <Link href="/dashboard/generate">
            <button className="ethio-gradient px-8 py-3 rounded-2xl text-sm font-semibold hover:scale-105 transition-transform">
              Start Free
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-28 md:pt-32 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-6"
        >
          Professional Videos in<br />
          <span className="ethio-gradient bg-clip-text text-transparent">
            Ethiopian Languages
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-300 mb-12"
        >
          AI-powered cinematic videos with native Amharic, Afaan Oromo, Somali & Tigrinya voices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Link href="/dashboard/generate">
            <button className="ethio-gradient text-white px-12 py-6 rounded-2xl text-xl font-bold flex items-center gap-3 mx-auto hover:scale-105 transition-all">
              <Play className="w-6 h-6" fill="white" />
              Generate Your First Video Free
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Supported Languages */}
      <section className="relative z-10 py-16 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Supported Languages</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { flag: "🇪🇹", name: "Amharic", script: "አማርኛ" },
              { flag: "🇪🇹", name: "Afaan Oromo", script: "Afaan Oromoo" },
              { flag: "🇸🇴", name: "Somali", script: "Soomaali" },
              { flag: "🇪🇹", name: "Tigrinya", script: "ትግርኛ" },
            ].map((lang, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <span className="text-5xl">{lang.flag}</span>
                <div className="text-center">
                  <p className="font-semibold">{lang.name}</p>
                  <p className="text-orange-400 text-sm">{lang.script}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Creators Love Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Native Languages", desc: "High-quality voices in Amharic, Afaan Oromo, Somali & Tigrinya with perfect Ge’ez script support." },
              { icon: Zap, title: "Cinematic Quality", desc: "Stunning visuals, smooth motion, subtitles, and music. Ready for TikTok, Reels & YouTube." },
              { icon: Users, title: "Auto Distribution", desc: "Generate once and auto-post to Telegram, TikTok & Facebook. Save hours every week." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800"
              >
                <feature.icon className="w-12 h-12 text-orange-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to create your first viral video?</h2>
          <Link href="/dashboard/generate">
            <button className="ethio-gradient text-white px-16 py-7 rounded-2xl text-2xl font-semibold hover:scale-105 transition-all">
              Start Generating – Get 10 Free Credits
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-zinc-950 border-t border-zinc-800 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎬</div>
              <span className="font-bold text-2xl">EthioVideo AI</span>
            </div>
            <p className="text-zinc-400 max-w-xs">
              Professional AI video creation for Ethiopian creators and businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-3 text-zinc-400">
                <Link href="/dashboard/generate" className="hover:text-white">Generate</Link>
                <Link href="/features" className="hover:text-white">Features</Link>
                <Link href="/pricing" className="hover:text-white">Pricing</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-3 text-zinc-400">
                <Link href="/about" className="hover:text-white">About</Link>
                <Link href="/blog" className="hover:text-white">Blog</Link>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <div className="space-y-3 text-zinc-400">
                <a href="#" className="hover:text-white">Telegram</a>
                <a href="#" className="hover:text-white">TikTok</a>
                <a href="#" className="hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-zinc-500 text-sm mt-16">
          © {new Date().getFullYear()} EthioVideo AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
