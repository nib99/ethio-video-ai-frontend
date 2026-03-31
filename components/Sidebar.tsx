'use client';

import Link from 'next/link';
import { Home, Video, BarChart3, CreditCard, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/generate', label: 'Generate Video', icon: Video },
    { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/dashboard/credits', label: 'Buy Credits', icon: CreditCard },
  ];

  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800 h-screen p-6 flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-md">
            🇪🇹
          </div>
          <div>
            <div className="font-bold text-2xl tracking-tight">EthioVideo AI</div>
            <div className="text-xs text-zinc-500 flex items-center gap-1">
              <Sparkles size={12} /> Cinematic AI Videos
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                active
                  ? 'bg-orange-500/10 text-orange-400 font-medium'
                  : 'hover:bg-zinc-800 text-zinc-300 hover:text-white'
              }`}
            >
              <Icon 
                size={20} 
                className={active ? 'text-orange-400' : 'text-zinc-400 group-hover:text-zinc-300'} 
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="pt-8 mt-auto">
        <div className="text-xs text-zinc-500 text-center">
          Made with ❤️ for Ethiopian Creators
        </div>
      </div>
    </aside>
  );
}
