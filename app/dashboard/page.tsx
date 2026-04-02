'use client';
import { useState } from 'react';
import CreditBalance from '@/components/CreditBalance';
import VideoPlayer from '@/components/VideoPlayer';

export default function Dashboard() {
  const [credits, setCredits] = useState(12);
  const [recentVideos, setRecentVideos] = useState<any[]>([]);

  // In a real app, fetch from /api/analytics or your jobs list endpoint

  return (
    <div className="flex-1 p-10 overflow-auto bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter">Welcome back 👋</h1>
            <p className="text-zinc-400 mt-3 text-lg">Create stunning videos in Ethiopian languages</p>
          </div>
          <CreditBalance credits={credits} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <div className="text-orange-400 text-sm mb-2">VIDEOS GENERATED</div>
            <div className="text-6xl font-bold">27</div>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <div className="text-orange-400 text-sm mb-2">TOTAL VIEWS</div>
            <div className="text-6xl font-bold">48.2K</div>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <div className="text-orange-400 text-sm mb-2">THIS MONTH</div>
            <div className="text-6xl font-bold text-green-400">+12</div>
          </div>
        </div>

        <div className="mb-8">
          <a 
            href="/dashboard/generate"
            className="block w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white text-center py-8 rounded-3xl text-2xl font-semibold transition-all active:scale-[0.985]"
          >
            🎬 Generate New Cinematic Video
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Recent Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentVideos.length > 0 ? (
              recentVideos.map((video, i) => (
                <VideoPlayer key={i} src={video.url} title={video.title} />
              ))
            ) : (
              <div className="col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-16 text-center">
                <p className="text-zinc-400">No videos yet. Generate your first one!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
