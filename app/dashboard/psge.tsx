'use client';
import { useUser } from '@clerk/nextjs';
import CreditBalance from '@/components/CreditBalance';
import VideoPlayer from '@/components/VideoPlayer';

export default function Dashboard() {
  const { user } = useUser();
  const credits = user?.publicMetadata.credits as number || 10;

  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-5xl font-bold">Welcome back, {user?.firstName || 'Creator'} 👋</h1>
          <p className="text-zinc-400 mt-2">Create cinematic videos in your language</p>
        </div>
        <CreditBalance credits={credits} />
      </div>

      {/* Stats + Generate CTA + Recent Videos - same as before */}
      <a 
        href="/dashboard/generate"
        className="block w-full bg-gradient-to-r from-red-600 to-orange-500 text-center py-8 rounded-3xl text-2xl font-semibold mb-12 hover:scale-[1.01] transition"
      >
        🎬 Generate New Cinematic Video
      </a>
    </div>
  );
}
