'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Placeholder for Clerk or custom auth
    // Will be replaced when we integrate full Clerk
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl mb-6">
              🇪🇹
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">Welcome back</h1>
            <p className="text-zinc-400">
              Sign in to continue creating cinematic Ethiopian videos
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 space-y-8">
            <div>
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full ethio-gradient py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                {isLoading ? "Signing in..." : "Continue with Email"}
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest text-zinc-500">
                <span className="bg-zinc-900 px-4">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="py-6">
                Google
              </Button>
              <Button variant="outline" className="py-6">
                Apple
              </Button>
            </div>

            <p className="text-center text-sm text-zinc-500">
              Don&apos;t have an account?{' '}
              <Link href="/dashboard/generate" className="text-orange-400 hover:underline">
                Try for free
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center text-xs text-zinc-500">
            Secured by Stripe • Ethiopian creators trusted
          </div>
        </div>
      </div>
    </div>
  );
}
