'use client';
import Link from 'next/link';
import { Home, Video, BarChart3, CreditCard } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800 h-screen p-6 flex flex-col">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🇪🇹</div>
          <div>
            <div className="font-bold text-xl">EthioVideo AI</div>
            <div className="text-xs text-zinc-500">Cinematic AI Videos</div>
          </div>
        </div>
      </div>

      <nav className="space-y-2 flex-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 text-orange-400">
          <Home size={20} /> Dashboard
        </Link>
        <Link href="/dashboard/generate" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800">
          <Video size={20} /> Generate Video
        </Link>
        <Link href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800">
          <BarChart3 size={20} /> Analytics
        </Link>
        <Link href="/dashboard/credits" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800">
          <CreditCard size={20} /> Buy Credits
        </Link>
      </nav>

      <div className="text-xs text-zinc-500 mt-auto pt-8">
        Made for Ethiopian Creators
      </div>
    </aside>
  );
}
