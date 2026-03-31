'use client';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function CreditBalance({ credits = 8, onRefresh }: { credits?: number; onRefresh?: () => void }) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-2xl">
      <div>
        <div className="text-sm text-zinc-400">Credits Remaining</div>
        <div className="text-3xl font-bold text-orange-400">{credits}</div>
      </div>
      <Button 
        onClick={() => router.push('/dashboard/credits')}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 text-sm"
      >
        Buy More
      </Button>
    </div>
  );
}
