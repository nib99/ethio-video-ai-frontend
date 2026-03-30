'use client';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center">
          🎬
        </div>
        <span className="text-2xl font-bold tracking-tight">EthioVideo AI</span>
      </div>

      <div className="flex items-center gap-8 text-sm">
        <Link href="/dashboard" className="hover:text-orange-400 transition">Dashboard</Link>
        <Link href="/dashboard/generate" className="hover:text-orange-400 transition">Generate</Link>
        <Link href="/dashboard/analytics" className="hover:text-orange-400 transition">Analytics</Link>
        <Link href="/dashboard/credits" className="hover:text-orange-400 transition">Credits</Link>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-zinc-400">Nibras</span>
        <button className="text-zinc-400 hover:text-white">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
}
