'use client';

import Link from 'next/link';
import { LogOut, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-6 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-gradient-to-br from-red-600 via-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-xl shadow-lg">
          🎬
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-white">
            EthioVideo AI
          </span>
          <p className="text-[10px] text-zinc-500 -mt-1">Ethiopian Video Intelligence</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link 
          href="/dashboard" 
          className="hover:text-orange-400 transition-colors duration-200"
        >
          Dashboard
        </Link>
        <Link 
          href="/dashboard/generate" 
          className="hover:text-orange-400 transition-colors duration-200"
        >
          Generate
        </Link>
        <Link 
          href="/dashboard/analytics" 
          className="hover:text-orange-400 transition-colors duration-200"
        >
          Analytics
        </Link>
        <Link 
          href="/dashboard/credits" 
          className="hover:text-orange-400 transition-colors duration-200"
        >
          Credits
        </Link>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
            <User size={18} className="text-zinc-400" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">Nibras</p>
            <p className="text-xs text-zinc-500 -mt-0.5">Free Plan</p>
          </div>
        </div>

        <button 
          className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-200"
          title="Logout"
          aria-label="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
}
